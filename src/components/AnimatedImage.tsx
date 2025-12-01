"use client";

import { motion, Transition } from "framer-motion";
import Image from "next/image";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  delay?: number;
  effect?: "grow" | "slide" | "rotate" | "bounce";
  direction?: "left" | "right" | "up" | "down";
}

export default function AnimatedImage({
  src,
  alt,
  width,
  height,
  className = "",
  delay = 0,
  effect = "grow",
  direction = "up",
}: AnimatedImageProps) {
  const effectVariants = {
    grow: {
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: {
        type: "spring" as const,
        stiffness: 60,
        damping: 25,
        delay,
      } as Transition,
    },
    slide: {
      initial: {
        x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
        y: direction === "up" ? -200 : direction === "down" ? 200 : 0,
        opacity: 0,
      },
      animate: { x: 0, y: 0, opacity: 1 },
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay,
      } as Transition,
    },
    rotate: {
      initial: { rotate: -180, scale: 0.5, opacity: 0 },
      animate: { rotate: 0, scale: 1, opacity: 1 },
      transition: {
        duration: 1,
        ease: "easeOut",
        delay,
      } as Transition,
    },
    bounce: {
      initial: { y: 100, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        delay,
      } as Transition,
    },
  };

  return (
    <motion.div
      className={className}
      initial={effectVariants[effect].initial}
      whileInView={effectVariants[effect].animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={effectVariants[effect].transition}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover rounded-lg shadow-2xl"
      />
    </motion.div>
  );
}
