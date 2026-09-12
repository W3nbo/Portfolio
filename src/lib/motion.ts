import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Single registration point for all scroll-driven animation modules.
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/** True when the user has asked the OS to minimize motion. */
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
