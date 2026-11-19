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

