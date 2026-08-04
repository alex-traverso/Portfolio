"use client";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

// Panel padding (px-4 py-3) + 1px border, used to line the popover's text up
// with the text it replaces.
const PANEL_X = 17;
const PANEL_Y = 13;
const VIEWPORT_GUTTER = 16;

/**
 * Renders text that may be clamped by the caller (via a `line-clamp-*` class in
 * `className`). When the text is actually cut off, hovering or focusing it opens
 * a panel with the full copy, positioned so the visible lines stay exactly where
 * they were.
 *
 * The panel is portaled to `document.body` because card containers use
 * `overflow-hidden` and would clip it.
 */
export default function ClampedText({ children, className = "" }) {
  const anchorRef = useRef(null);
  const panelRef = useRef(null);
  const openRef = useRef(false);
  const [mounted, setMounted] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const [coords, setCoords] = useState(null);

  const open = coords !== null;

  useEffect(() => setMounted(true), []);

  // Measure on mount, on resize of the paragraph (grid reflow, font load) and
  // whenever the text itself changes (locale switch).
  useEffect(() => {
    const el = anchorRef.current;
    if (!el) return;

    const measure = () => setIsTruncated(el.scrollHeight > el.clientHeight + 1);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [children]);

  const close = useCallback(() => {
    openRef.current = false;
    setCoords(null);
  }, []);

  const show = useCallback(() => {
    const el = anchorRef.current;
    if (!el || openRef.current) return;

    const rect = el.getBoundingClientRect();
    openRef.current = true;
    setCoords({
      left: rect.left - PANEL_X,
      top: rect.top - PANEL_Y,
      width: rect.width + PANEL_X * 2,
    });
  }, []);

  // Nudge the panel up when a long description would run past the bottom edge.
  useLayoutEffect(() => {
    if (!coords || !panelRef.current) return;

    const height = panelRef.current.offsetHeight;
    const maxTop = window.innerHeight - height - VIEWPORT_GUTTER;
    const nextTop = Math.max(VIEWPORT_GUTTER, Math.min(coords.top, maxTop));

    if (Math.abs(nextTop - coords.top) > 0.5) {
      setCoords((prev) => (prev ? { ...prev, top: nextTop } : prev));
    }
  }, [coords]);

  // Escape works even when the panel was opened by hover, and any scroll or
  // resize invalidates the position, so close instead of chasing it.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", close, true);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", close, true);
      window.removeEventListener("resize", close);
    };
  }, [open, close]);

  return (
    <>
      <p
        ref={anchorRef}
        className={`${className}${
          isTruncated
            ? " cursor-default rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            : ""
        }`}
        tabIndex={isTruncated ? 0 : undefined}
        onMouseEnter={isTruncated ? show : undefined}
        // The panel covers the paragraph, so this fires the instant it opens.
        // Closing is the panel's job from then on.
        onMouseLeave={
          isTruncated ? () => !openRef.current && close() : undefined
        }
        onFocus={isTruncated ? show : undefined}
        onBlur={isTruncated ? close : undefined}
      >
        {children}
      </p>

      {mounted &&
        open &&
        createPortal(
          <div
            ref={panelRef}
            // `line-clamp` keeps the full text in the accessibility tree, so the
            // paragraph above already exposes it. This panel is visual only.
            aria-hidden="true"
            className="fixed z-50 max-h-[60vh] origin-top-left overflow-y-auto rounded-xl border border-borderSubtle bg-surfaceAlt px-4 py-3 text-sm text-textSecondary shadow-lg motion-safe:animate-clampedTextIn"
            style={{ left: coords.left, top: coords.top, width: coords.width }}
            onMouseLeave={close}
          >
            {children}
          </div>,
          document.body,
        )}
    </>
  );
}
