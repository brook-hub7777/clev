import React, { useEffect, useRef } from "react";

// Bayer 8x8 threshold matrix
const BAYER = (() => {
  let o: number[][] = [[0]];
  for (; o.length < 8; ) {
    const e = o.length;
    const n: number[][] = Array.from({ length: e * 2 }, () => new Array(e * 2).fill(0));
    for (let r = 0; r < e; r++) {
      for (let s = 0; s < e; s++) {
        const i = o[r][s] * 4;
        n[r][s] = i;
        n[r][s + e] = i + 2;
        n[r + e][s] = i + 3;
        n[r + e][s + e] = i + 1;
      }
    }
    o = n;
  }
  const t = new Float32Array(64);
  for (let e = 0; e < 8; e++) {
    for (let n = 0; n < 8; n++) {
      t[e * 8 + n] = (o[e][n] + 0.5) / 64;
    }
  }
  return t;
})();

function hexToRgb(colors: string[]) {
  const rgb = new Uint8Array(colors.length * 3);
  colors.forEach((hex, i) => {
    const h = hex.replace("#", "");
    rgb[i * 3] = parseInt(h.slice(0, 2), 16);
    rgb[i * 3 + 1] = parseInt(h.slice(2, 4), 16);
    rgb[i * 3 + 2] = parseInt(h.slice(4, 6), 16);
  });
  return { rgb, count: colors.length };
}

const PALETTE_DARK = hexToRgb(["#0b0b0c", "#2c2c31", "#6e6e77", "#b3b1aa", "#f4f2ea"]);
const PALETTE_LIGHT = hexToRgb(["#f6f4ee", "#c6c3ba", "#8a888f", "#3f3f45", "#111113"]);

function O(o: number, t: number): number {
  let e = (o * 374761393 + t * 668265263) | 0;
  e = (e ^ (e >> 13)) | 0;
  e = Math.imul(e, 1274126177);
  return ((e ^ (e >> 16)) >>> 0) / 4294967296;
}

class DitherBuffer {
  cell: number;
  cols = 0;
  rows = 0;
  field = new Float32Array(0);
  lowres: HTMLCanvasElement | null = null;
  lctx: CanvasRenderingContext2D | null = null;
  img: ImageData | null = null;

  constructor(cell: number) {
    this.cell = cell;
  }

  resize(w: number, h: number) {
    this.cols = Math.max(8, Math.round(w / this.cell));
    this.rows = Math.max(8, Math.round(h / this.cell));
    this.field = new Float32Array(this.cols * this.rows);
    this.lowres = document.createElement("canvas");
    this.lowres.width = this.cols;
    this.lowres.height = this.rows;
    this.lctx = this.lowres.getContext("2d");
    this.img = this.lctx ? this.lctx.createImageData(this.cols, this.rows) : null;
  }

  flush(ctx: CanvasRenderingContext2D, w: number, h: number, palette = PALETTE_DARK) {
    if (!this.img || !this.lctx || !this.lowres) return;
    const data = this.img.data;
    const rgb = palette.rgb;
    const maxShade = palette.count - 1;
    let idx = 0;

    for (let p = 0; p < this.rows; p++) {
      const k = (p & 7) << 3;
      for (let g = 0; g < this.cols; g++, idx++) {
        let b = 0;
        let u = this.field[idx];
        if (u > 0) {
          if (u > 1) u = 1;
          const scaled = u * maxShade;
          const base = scaled | 0;
          b = scaled - base > BAYER[k | (g & 7)] ? base + 1 : base;
          if (b > maxShade) b = maxShade;
        }
        const v = idx * 4;
        const x = b * 3;
        data[v] = rgb[x];
        data[v + 1] = rgb[x + 1];
        data[v + 2] = rgb[x + 2];
        data[v + 3] = 255;
      }
    }
    this.lctx.putImageData(this.img, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(this.lowres, 0, 0, this.cols, this.rows, 0, 0, w, h);
  }
}

interface Satellite {
  ux: number;
  uy: number;
  uz: number;
  vx: number;
  vy: number;
  vz: number;
  radius: number;
  omega: number;
  phase: number;
}

function makeSat(t: number, f: number, h: number, s: number): Satellite {
  const c = Math.cos(t);
  const M = Math.sin(t);
  return { ux: 1, uy: 0, uz: 0, vx: 0, vy: c, vz: M, radius: f, omega: h, phase: s };
}

function makeSats(count: number): Satellite[] {
  const sats: Satellite[] = [];
  for (let h = 0; h < count; h++) {
    const s = (h % 2 === 0 ? 1 : -1) * (0.16 + O(h, 3) * 0.85);
    const c = 1.38 + (h * 1.05) / count + O(h, 7) * 0.14;
    const M = (O(h, 11) > 0.35 ? 1 : -1) * (0.16 + O(h, 13) * 0.3);
    sats.push(makeSat(s, c, M, O(h, 17) * Math.PI * 2));
  }
  return sats;
}

function satPos(sat: Satellite, time: number) {
  const h = sat.phase + time * sat.omega;
  const s = Math.cos(h);
  const c = Math.sin(h);
  return {
    x: sat.radius * (s * sat.ux + c * sat.vx),
    y: sat.radius * (s * sat.uy + c * sat.vy),
    z: sat.radius * (s * sat.uz + c * sat.vz),
  };
}

function smoothStep(t: number, f: number, h: number): number {
  const s = Math.min(1, Math.max(0, (h - t) / (f - t)));
  return s * s * (3 - 2 * s);
}

const JT = -0.42;
const TT = 0.5;
const BT = 0.76;
const XN = -0.621;
const BN = 0.451;
const DN = 0.641;

interface OrbitState {
  buf: DitherBuffer;
  trail: Float32Array;
  inside: Uint8Array;
  lat: Float32Array;
  lon: Float32Array;
  shade: Float32Array;
  inkA: Float32Array;
  inkB: Float32Array;
  light: boolean;
  stars: Float32Array;
  sats: Satellite[];
  moonSat: Satellite;
  cx: number;
  cy: number;
  R: number;
  w: number;
  h: number;
  time: number;
}

function initOrbitState(satellites: number): OrbitState {
  return {
    buf: new DitherBuffer(4),
    trail: new Float32Array(0),
    inside: new Uint8Array(0),
    lat: new Float32Array(0),
    lon: new Float32Array(0),
    shade: new Float32Array(0),
    inkA: new Float32Array(0),
    inkB: new Float32Array(0),
    light: false,
    stars: new Float32Array(0),
    sats: makeSats(satellites),
    moonSat: makeSat(0.34, 2.65, 0.085, 2.2),
    cx: 0,
    cy: 0,
    R: 1,
    w: 1,
    h: 1,
    time: 0,
  };
}

