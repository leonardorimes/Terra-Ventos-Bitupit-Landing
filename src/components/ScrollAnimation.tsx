"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate" | "fade";
  duration?: number;
  distance?: number;
  stagger?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  distance = 100,
  stagger = 0,
}: ScrollAnimationProps) {
  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
    scale: { scale: 0.5, opacity: 0 },
    rotate: { rotate: -10, scale: 0.8, opacity: 0 },
    fade: { opacity: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: stagger,
      }}
    >
      {children}
    </motion.div>
  );
}
