"use client";

import { useEffect, useRef } from "react";

/*
 * Organic mesh-gradient background rendered with a raw WebGL fragment shader.
 * Three layers of 2D simplex noise (Ashima Arts) at different scales/speeds
 * are combined and mixed between three palette colors, then softened with a
 * CSS blur so it reads as a smooth, irregular mesh gradient rather than
 * distinct noise cells.
 *
 * Palette: #030303 (base, dominant) -> #1E4A63 (mid) -> #4399CE (accent).
 */

const COLOR_A = [0.012, 0.012, 0.012]; // #030303
const COLOR_B = [0.118, 0.29, 0.388]; // #1E4A63
const COLOR_C = [0.263, 0.6, 0.808]; // #4399CE

const FALLBACK_GRADIENT =
  "radial-gradient(120% 120% at 30% 20%, #1E4A63 0%, #030303 55%, #030303 100%)";

const VERTEX_SHADER = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform float u_time;
  uniform vec2 u_resolution;
  uniform vec3 u_colorA;
  uniform vec3 u_colorB;
  uniform vec3 u_colorC;
  uniform vec2 u_mouse;
  uniform vec2 u_mouseDir;
  uniform float u_mouseStr;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                         -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
            + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = uv * 3.0;
    float t = u_time * 0.05;

    float n1 = snoise(p + t);
    float n2 = snoise(p * 1.5 - t * 0.7);
    float n3 = snoise(p * 0.7 + t * 1.3);

    float mixA = smoothstep(-0.6, 0.6, n1 + 0.1);
    float mixB = smoothstep(-0.4, 0.5, n2 * n3);

    vec3 color = mix(u_colorA, u_colorB, mixA);
    color = mix(color, u_colorC, mixB * 0.45);

    if (u_mouseStr > 0.001) {
      float aspect = u_resolution.x / u_resolution.y;
      vec2 m = u_mouse * 3.0;
      vec2 rel = (p - m) * vec2(aspect, 1.0);
      vec2 rawDir = u_mouseDir;
      vec2 dir = length(rawDir) > 0.0001
        ? normalize(rawDir * vec2(aspect, 1.0))
        : vec2(1.0, 0.0);
      float along = dot(rel, dir);
      float behind = -along;
      vec2 perpAxis = vec2(-dir.y, dir.x);
      float perp = dot(rel, perpAxis);
      perp += snoise(p * 2.0 + t * 2.0) * 0.06;

      float behindMask = smoothstep(0.0, 0.05, behind) * (1.0 - smoothstep(0.06, 0.5, behind));
      float widthMask = 1.0 - smoothstep(0.0, 0.16, abs(perp));
      float arc = behindMask * widthMask * u_mouseStr;

      vec3 arcCore = mix(u_colorC, vec3(1.0), 0.75);
      vec3 arcColor = mix(arcCore, u_colorC, smoothstep(0.0, 1.0, behind / 0.5));
      color = mix(color, arcColor, clamp(arc * 1.8, 0.0, 1.0));
    }

    gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(
      "AnimatedShaderBackground shader compile error:",
      gl.getShaderInfoLog(shader),
    );
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function AnimatedShaderBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", { antialias: false, alpha: false }) ||
      canvas.getContext("experimental-webgl", {
        antialias: false,
        alpha: false,
      });
    if (!gl) {
      // No WebGL: CSS fallback shows through (see JSX below).
      canvas.style.display = "none";
      return;
    }

    // --- program setup ---------------------------------------------------
    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(
        "AnimatedShaderBackground program link error:",
        gl.getProgramInfoLog(program),
      );
      return;
    }
    gl.useProgram(program);

    // Full-screen quad (two triangles).
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );
    const aPosition = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uColorA = gl.getUniformLocation(program, "u_colorA");
    const uColorB = gl.getUniformLocation(program, "u_colorB");
    const uColorC = gl.getUniformLocation(program, "u_colorC");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uMouseDir = gl.getUniformLocation(program, "u_mouseDir");
    const uMouseStr = gl.getUniformLocation(program, "u_mouseStr");

    // --- state -----------------------------------------------------------
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    function resize() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const bw = Math.max(1, Math.floor(w * dpr));
      const bh = Math.max(1, Math.floor(h * dpr));
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener("resize", resize);
    resize();

    // --- cursor arc state --------------------------------------------------
    const target = { x: 0.5, y: 0.5 };
    const mouse = { x: 0.5, y: 0.5 };
    const prevMouse = { x: 0.5, y: 0.5 };
    const dir = { x: 0, y: 0 };
    let dirTarget = { x: 0, y: 0 };
    let targetStr = 0;
    let mouseStr = 0;

    function onPointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (inside) {
        target.x = (e.clientX - rect.left) / rect.width;
        target.y = 1 - (e.clientY - rect.top) / rect.height;
        targetStr = 1;
      } else {
        targetStr = 0;
      }
    }
    if (!reduceMotion) window.addEventListener("pointermove", onPointerMove);

    // Pause the loop when the hero is off-screen to save GPU/battery.
    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = visible;
        visible = entry.isIntersecting;
        if (visible && !wasVisible && !reduceMotion) {
          rafId = requestAnimationFrame(render);
        }
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    // --- render loop -----------------------------------------------------
    let rafId = null;
    const start = performance.now();

    function draw(timeSeconds) {
      gl.uniform2f(uResolution, canvas.width, canvas.height);
      gl.uniform1f(uTime, timeSeconds);
      gl.uniform3f(uColorA, COLOR_A[0], COLOR_A[1], COLOR_A[2]);
      gl.uniform3f(uColorB, COLOR_B[0], COLOR_B[1], COLOR_B[2]);
      gl.uniform3f(uColorC, COLOR_C[0], COLOR_C[1], COLOR_C[2]);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform2f(uMouseDir, dir.x, dir.y);
      gl.uniform1f(uMouseStr, mouseStr);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    function render(now) {
      mouse.x += (target.x - mouse.x) * 0.08;
      mouse.y += (target.y - mouse.y) * 0.08;
      mouseStr += (targetStr - mouseStr) * 0.035;

      const dx = mouse.x - prevMouse.x;
      const dy = mouse.y - prevMouse.y;
      if (dx * dx + dy * dy > 0.0000005) {
        const invLen = 1 / Math.sqrt(dx * dx + dy * dy);
        dirTarget = { x: dx * invLen, y: dy * invLen };
      }
      dir.x += (dirTarget.x - dir.x) * 0.15;
      dir.y += (dirTarget.y - dir.y) * 0.15;
      prevMouse.x = mouse.x;
      prevMouse.y = mouse.y;

      draw((now - start) / 1000);
      if (visible) rafId = requestAnimationFrame(render);
    }

    if (reduceMotion) {
      // Static single frame, no animation.
      draw(0);
    } else {
      rafId = requestAnimationFrame(render);
    }

    // --- cleanup ---------------------------------------------------------
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      io.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full scale-110 blur-[40px] pointer-events-none"
        style={{ background: FALLBACK_GRADIENT }}
      />
    </div>
  );
}
