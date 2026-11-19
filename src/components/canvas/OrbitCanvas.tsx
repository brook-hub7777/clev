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

