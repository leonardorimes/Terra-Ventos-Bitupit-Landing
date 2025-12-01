"use client";

import { motion, Transition } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  effect?: "typewriter" | "slide" | "fade" | "bounce" | "glow";
  direction?: "left" | "right" | "up" | "down";
  duration?: number;
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  effect = "fade",
  direction = "up",
  duration = 0.6,
}: AnimatedTextProps) {
  const effectVariants = {
    typewriter: {
      initial: { width: 0, opacity: 0 },
      animate: { width: "auto", opacity: 1 },
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay,
      } as Transition,
    },
    slide: {
      initial: {
        x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
        y: direction === "up" ? -50 : direction === "down" ? 50 : 0,
        opacity: 0,
      },
      animate: { x: 0, y: 0, opacity: 1 },
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      } as Transition,
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        duration: duration * 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      } as Transition,
    },
    bounce: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        delay,
      } as Transition,
    },
    glow: {
      initial: { opacity: 0, textShadow: "0 0 0px rgba(0,0,0,0)" },
      animate: {
        opacity: 1,
        textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
      },
      transition: {
        duration: 1,
        ease: "easeOut",
        delay,
      } as Transition,
    },
  };

  return (
    <motion.div
      className={className}
      initial={effectVariants[effect].initial}
      whileInView={effectVariants[effect].animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={effectVariants[effect].transition}
    >
      {children}
    </motion.div>
  );
}
