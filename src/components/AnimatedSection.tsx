"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade" | "slide";
  duration?: number;
  background?: "gradient" | "solid" | "glass" | "none";
  color?: "teal" | "blue" | "green" | "purple" | "orange" | "gray";
  fullHeight?: boolean;
  id?: string;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 1,
  background = "none",
  color = "blue",
  fullHeight = false,
  id,
}: AnimatedSectionProps) {
  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
    scale: { scale: 0.95, opacity: 0 },
    fade: { opacity: 0 },
    slide: { y: 30, opacity: 0, scale: 0.98 },
  };

  const backgroundClasses = {
    gradient: {
      teal: "bg-gradient-to-br from-accent-50 via-accent-100 to-accent-200",
      blue: "bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200",
      green: "bg-gradient-to-br from-accent-50 via-accent-100 to-accent-200",
      purple:
        "bg-gradient-to-br from-secondary-50 via-secondary-100 to-secondary-200",
      orange: "bg-gradient-to-br from-accent-50 via-accent-100 to-accent-200",
      gray: "bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200",
    },
    solid: {
      teal: "bg-accent-100",
      blue: "bg-primary-100",
      green: "bg-accent-100",
      purple: "bg-secondary-100",
      orange: "bg-accent-100",
      gray: "bg-neutral-100",
    },
    glass: {
      teal: "bg-accent-50/80 backdrop-blur-md border border-accent-200/50",
      blue: "bg-primary-50/80 backdrop-blur-md border border-primary-200/50",
      green: "bg-accent-50/80 backdrop-blur-md border border-accent-200/50",
      purple:
        "bg-secondary-50/80 backdrop-blur-md border border-secondary-200/50",
      orange: "bg-accent-50/80 backdrop-blur-md border border-accent-200/50",
      gray: "bg-neutral-50/80 backdrop-blur-md border border-neutral-200/50",
    },
    none: {
      teal: "",
      blue: "",
      green: "",
      purple: "",
      orange: "",
      gray: "",
    },
  };

  const backgroundClass = backgroundClasses[background][color];
  const heightClass = fullHeight ? "min-h-screen" : "";

  return (
    <motion.section
      id={id}
      className={`${backgroundClass} ${heightClass} ${className} w-full max-w-full`}
      initial={directionVariants[direction]}
      whileInView={{
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration * 1.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring" as const,
        stiffness: 60,
        damping: 25,
      }}
      exit={{
        y: direction === "up" ? -200 : direction === "down" ? 200 : 0,
        x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
        scale: direction === "scale" ? 0.8 : 1,
        opacity: 0,
      }}
    >
      {children}
    </motion.section>
  );
}
