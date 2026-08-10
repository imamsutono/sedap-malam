"use client";

import { MotionConfig } from "framer-motion";

/** Honours prefers-reduced-motion for every animation on the page. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
