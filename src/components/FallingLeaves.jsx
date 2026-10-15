import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import leafAsset from '../assets/graphite-leaf.png';
import './FallingLeaves.css';

const POOL_SIZE = 64;
const random = (min, max) => min + Math.random() * (max - min);
const smoothstep = (value) => {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
};

export default function FallingLeaves() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const elements = [...container.children];
    const root = document.getElementById('root');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let pageHeight = 0;
    let mobile = false;
    let frame = 0;
    let lastTime = null;
    let spawnIn = 0;
    let initialized = false;
    const leaves = Array(POOL_SIZE).fill(null);

    const measure = () => {
      width = document.documentElement.clientWidth;
      mobile = width <= 768;
      // Measure the app, not this decorative layer, so it cannot extend the page
      // or retain an old page height after navigating to a shorter route.
      const bounds = root.getBoundingClientRect();
      pageHeight = Math.max(window.innerHeight, bounds.bottom + window.scrollY);
      container.style.height = `${pageHeight}px`;
    };

    const createLeaf = (y = -80, delay = 0) => {
      const near = Math.random() > 0.65;
      // Mostly outer lanes, with occasional small leaves through open space.
      const lane = Math.random();
      const x = lane < 0.4 ? random(0.02, 0.17) : lane < 0.8 ? random(0.80, 0.96) : random(0.22, 0.73);
      return {
        x, y, age: -delay,
        size: mobile ? random(24, 40) : near ? random(48, 68) : random(26, 44),
        opacity: near ? random(0.48, 0.64) : random(0.30, 0.46),
        speed: mobile ? random(20, 28) : random(26, 38),
        drift: random(-2.3, 2.3),
        sway: mobile ? random(8, 15) : random(14, 28),
        phase: random(0, Math.PI * 2),
        rotation: random(-55, 55),
        period: random(9, 16),
      };
    };

    const initialize = () => {
      // Populate a sparse field once, including lower sections. These are leaves
      // already in flight, not new leaves spawned whenever the visitor scrolls.
      const count = Math.min(48, Math.ceil(pageHeight / window.innerHeight * (mobile ? 2 : 3)));
      for (let i = 0; i < count; i++) {
        leaves[i] = createLeaf((i + random(0.15, 0.85)) / count * pageHeight, random(0, 4));
      }
      initialized = true;
      spawnIn = random(3, 6);
    };

    const tick = (time) => {
      frame = 0;
      if (document.hidden || reducedMotion.matches) return;
      const dt = lastTime === null ? 0 : Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      spawnIn -= dt;
      if (spawnIn <= 0) {
        const free = leaves.findIndex(leaf => leaf === null);
        if (free !== -1) leaves[free] = createLeaf();
        // New arrivals start above the document, never above the current viewport.
        spawnIn = mobile ? random(10, 15) : random(6, 10);
      }

      leaves.forEach((leaf, index) => {
        if (!leaf) return;
        const element = elements[index];
        leaf.age += dt;
        if (leaf.age < 0) return;
        leaf.y += leaf.speed * dt;
        const angle = leaf.age / leaf.period * Math.PI * 2 + leaf.phase;
        const x = leaf.x * width + leaf.drift * leaf.age + Math.sin(angle) * leaf.sway;
        // World/document coordinates: scrolling never changes a leaf's path,
        // speed, or lifetime. The browser scrolls past it like other page content.
        const fade = smoothstep(leaf.age / 2.5)
          * smoothstep((pageHeight - leaf.y) / 120)
          * smoothstep((x + leaf.size) / (leaf.size + 16))
          * smoothstep((width - x) / (leaf.size + 16));
        element.style.width = `${leaf.size}px`;
        element.style.opacity = `${fade * leaf.opacity}`;
        element.style.transform = `translate3d(${x}px, ${leaf.y}px, 0) rotate(${leaf.rotation + Math.sin(angle) * 20}deg)`;
        // Side exits and footer arrivals retire permanently; only new top
        // arrivals reuse their slots. No wrapping or teleporting across edges.
        if (leaf.y >= pageHeight || x < -leaf.size || x > width) {
          element.style.opacity = '0';
          leaves[index] = null;
        }
      });
      frame = window.requestAnimationFrame(tick);
    };

    const syncPlayback = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      lastTime = null;
      container.hidden = reducedMotion.matches;
      if (document.hidden || reducedMotion.matches) return;
      measure();
      if (!initialized) initialize();
      frame = window.requestAnimationFrame(tick);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    window.addEventListener('resize', measure);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);
    syncPlayback();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', measure);
      document.removeEventListener('visibilitychange', syncPlayback);
      reducedMotion.removeEventListener('change', syncPlayback);
    };
  }, []);

  // A body-level absolute layer belongs to the document, not the viewport.
  // It is outside #root so observing app height never observes our own height.
  return createPortal(
    <div
      className="falling-leaves-container"
      ref={containerRef}
      aria-hidden="true"
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 3 }}
    >
      {Array.from({ length: POOL_SIZE }, (_, index) => (
        <img
          key={index}
          className="falling-leaf"
          src={leafAsset}
          alt=""
          draggable="false"
          width="48"
          height="48"
          style={{ position: 'absolute', top: 0, left: 0, opacity: 0, height: 'auto', pointerEvents: 'none' }}
        />
      ))}
    </div>,
    document.body,
  );
}
