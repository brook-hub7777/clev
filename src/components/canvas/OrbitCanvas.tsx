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

function resizeOrbitState(
  state: OrbitState,
  w: number,
  h: number,
  globeRadius?: number,
  globeCenterY?: number
) {
  state.w = w;
  state.h = h;
  state.buf.resize(w, h);
  const s = state.buf.cols;
  const c = state.buf.rows;
  const M = s * c;

  state.trail = new Float32Array(M);
  state.inside = new Uint8Array(M);
  state.lat = new Float32Array(M);
  state.lon = new Float32Array(M);
  state.shade = new Float32Array(M);
  state.inkA = new Float32Array(M);
  state.inkB = new Float32Array(M);

  state.cx = s * 0.5;

  const isMobile = w < 640;
  if (globeRadius !== undefined) {
    const rPx = isMobile ? Math.min(globeRadius, 34) : globeRadius;
    state.R = rPx / state.buf.cell;
  } else {
    state.R = Math.min(s, c) * 0.26;
  }

  if (globeCenterY !== undefined) {
    const cyPx = isMobile ? Math.min(globeCenterY, 92) : globeCenterY;
    state.cy = cyPx / state.buf.cell;
  } else {
    state.cy = c > s * 1.3 ? state.R * 2 : c * 0.35;
  }

  for (let a = 0; a < c; a++) {
    for (let x = 0; x < s; x++) {
      const b = a * s + x;
      const e = (x - state.cx) / state.R;
      const n = (a - state.cy) / state.R;
      const u = e * e + n * n;
      if (u > 1) continue;

      const i = e;
      const l = -n;
      const y = Math.sqrt(1 - u);

      state.inside[b] = 1;
      state.lat[b] = Math.asin(l);
      state.lon[b] = Math.atan2(i, y);

      const g = i * JT + l * TT + y * BT;
      const R = Math.max(0, g);
      const P = Math.pow(1 - y, 2.6) * 0.12;
      state.shade[b] = Math.pow(R, 1.15) * 0.85 + P + 0.045;

      const E = i * XN + l * BN + y * DN;
      const A = Math.min(1, Math.max(0, E));
      const F = Math.exp(-Math.pow((E + 0.04) / 0.2, 2));
      const S = smoothStep(-0.2, -0.6, E);
      const o = i * 0.15 - l * 0.95 + y * 0.2;
      const m = 1 - 0.85 * smoothStep(-0.05, 0.75, o);
      const d = ((1 - A) * 0.8 + F * 0.1 - S * 0.22) * m;
      const k = 0.22 * A * m;
      const L = (1 - Math.sqrt(u)) * state.R;
      const z = Math.max(0, (L < 1.2 ? 0.36 : 0.14 * smoothStep(3.5, 1.2, L)) - d);
      const p = 0.6 * d + k / 0.55;

      state.inkA[b] = 0.7 * d - (k * 0.45) / 0.55 + z + (p * 1.04) / 0.84;
      state.inkB[b] = p / 0.84;
    }
  }

  const starCount = Math.round(M / 380);
  state.stars = new Float32Array(starCount * 4);
  for (let a = 0; a < starCount; a++) {
    const x = (O(a, 3) * M) | 0;
    state.stars[a * 4] = x;
    state.stars[a * 4 + 1] = 0.16 + O(a, 19) * 0.4;
    state.stars[a * 4 + 2] = 0.4 + O(a, 37) * 1.7;
    state.stars[a * 4 + 3] = O(a, 51) * Math.PI * 2;
  }
}

function stampTrail(state: OrbitState, x: number, y: number, intensity: number) {
  const c = state.buf.cols;
  const M = state.buf.rows;
  if (x < 1 || x >= c - 1 || y < 1 || y >= M - 1) return;
  const r = y * c + x;
  const a = state.trail;
  a[r] = Math.min(1.3, a[r] + intensity);
  const spread = intensity * 0.3;
  a[r - 1] = Math.min(1.1, a[r - 1] + spread);
  a[r + 1] = Math.min(1.1, a[r + 1] + spread);
  a[r - c] = Math.min(1.1, a[r - c] + spread);
  a[r + c] = Math.min(1.1, a[r + c] + spread);
}

function updateOrbitState(state: OrbitState, dt: number) {
  state.time += dt;
  const s = state.time;
  const { buf, trail, inside, lat, lon, shade, stars, sats, cx: u, cy: i, R: l } = state;
  const { cols: y, rows: g, field: R } = buf;

  const decay = Math.pow(0.915, dt * 60);
  for (let o = 0; o < trail.length; o++) trail[o] *= decay;

  R.fill(0);

  // Stars
  for (let o = 0; o < stars.length; o += 4) {
    const m = stars[o] | 0;
    if (!inside[m]) {
      R[m] = stars[o + 1] * (0.55 + 0.45 * Math.sin(s * stars[o + 2] + stars[o + 3]));
    }
  }

  // Satellite orbit tracks
  for (let m = 0; m < sats.length; m++) {
    const d = sats[m];
    for (let k = 0; k < 190; k++) {
      const L = (k / 190) * Math.PI * 2;
      const z = Math.cos(L);
      const p = Math.sin(L);
      const w = d.radius * (z * d.ux + p * d.vx);
      const U = d.radius * (z * d.uy + p * d.vy);
      if (d.radius * (z * d.uz + p * d.vz) < 0 && w * w + U * U < 1) continue;
      const v = (u + w * l) | 0;
      const T = (i - U * l) | 0;
      if (v < 0 || v >= y || T < 0 || T >= g) continue;
      const idx = T * y + v;
      if (R[idx] < 0.075) R[idx] = 0.075;
    }
  }

  // Planet body surface
  const E = s * 0.11;
  const { light: A, inkA: F, inkB: S } = state;
  for (let o = 0; o < R.length; o++) {
    if (!inside[o]) continue;
    const m = lon[o] + E;
    const d = lat[o];
    const k =
      0.62 +
      0.2 * Math.sin(m * 2.3 + d * 1.4) +
      0.12 * Math.sin(m * 4.7 - d * 3.2 + 1.7) +
      0.1 * Math.sin(d * 5.1 + m * 1.1 + 4.2);
    R[o] = A ? F[o] - S[o] * k : shade[o] * k;
  }

  // Small Moon Satellite
  {
    const o = satPos(state.moonSat, s);
    const m = l * 0.17;
    const d = u + o.x * l;
    const k = i - o.y * l;
    const behind = o.z < 0;
    const z = Math.max(0, (d - m - 1) | 0);
    const p = Math.min(y - 1, (d + m + 1) | 0);
    const w = Math.max(0, (k - m - 1) | 0);
    const U = Math.min(g - 1, (k + m + 1) | 0);

    for (let C = w; C <= U; C++) {
      for (let v = z; v <= p; v++) {
        const TX = (v - d) / m;
        const TY = (C - k) / m;
        const distSq = TX * TX + TY * TY;
        if (distSq > 1) continue;
        const N = C * y + v;
        if (behind && inside[N]) continue;
        const sq = Math.sqrt(1 - distSq);
        const Z = Math.max(0, TX * JT - TY * TT + sq * BT);
        R[N] = Math.max(0.05, Math.pow(Z, 1.1) * 0.78 + Math.pow(1 - sq, 3) * 0.1);
      }
    }
  }

  // Satellites moving stamps
  for (let o = 0; o < sats.length; o++) {
    const m = satPos(sats[o], s);
    if (!(m.z < 0 && m.x * m.x + m.y * m.y < 1)) {
      stampTrail(state, (u + m.x * l) | 0, (i - m.y * l) | 0, 1);
    }
  }

  // Blend trail onto field
  for (let o = 0; o < R.length; o++) {
    if (trail[o] > R[o]) R[o] = trail[o];
  }
}

interface OrbitCanvasProps {
  className?: string;
  theme?: "light" | "dark";
  satellites?: number;
  height?: number;
  globeRadius?: number;
  globeCenterY?: number;
}

export function OrbitCanvas({
  className,
  satellites = 6,
  globeRadius,
  globeCenterY,
}: OrbitCanvasProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<OrbitState | null>(null);

  if (!stateRef.current) {
    stateRef.current = initOrbitState(satellites);
  }

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastTime = performance.now();

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (stateRef.current) {
        resizeOrbitState(stateRef.current, w, h, globeRadius, globeCenterY);
        stateRef.current.time = 0;
        // Pre-warm 50 ticks for orbit trails
        for (let y = 0; y < 50; y++) {
          updateOrbitState(stateRef.current, 1 / 60);
        }
      }
    };

    handleResize();
    const ro = new ResizeObserver(handleResize);
    ro.observe(container);

    const loop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const state = stateRef.current;
      if (state && ctx) {
        const isDark = document.documentElement.classList.contains("dark");
        state.light = !isDark;
        updateOrbitState(state, dt);
        state.buf.flush(ctx, state.w, state.h, isDark ? PALETTE_DARK : PALETTE_LIGHT);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [globeRadius, globeCenterY]);

  return (
    <div
      ref={containerRef}
      className={`relative isolate size-full overflow-hidden ${className || ""}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block size-full"
        role="img"
        aria-label="A dithered planet with six satellites tracing visible orbit lanes and a small shaded moon"
      />
    </div>
  );
}
export default OrbitCanvas;
