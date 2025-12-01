"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  background?: "gradient" | "solid" | "glass" | "none";
  color?: "teal" | "blue" | "green" | "purple" | "orange" | "gray";
  fullHeight?: boolean;
  stagger?: boolean;
}

export default function SectionTransition({
  children,
  className = "",
  delay = 0,
  background = "none",
  color = "blue",
  fullHeight = false,
  stagger = false,
}: SectionTransitionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const backgroundClasses = {
    gradient: {
      teal: "bg-gradient-to-br from-teal-50 via-teal-100 to-teal-200",
      blue: "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200",
      green: "bg-gradient-to-br from-green-50 via-green-100 to-green-200",
      purple: "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200",
      orange: "bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200",
      gray: "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200",
    },
    solid: {
      teal: "bg-teal-100",
      blue: "bg-blue-100",
      green: "bg-green-100",
      purple: "bg-purple-100",
      orange: "bg-orange-100",
      gray: "bg-gray-100",
    },
    glass: {
      teal: "bg-teal-50/80 backdrop-blur-md border border-teal-200/50",
      blue: "bg-blue-50/80 backdrop-blur-md border border-blue-200/50",
      green: "bg-green-50/80 backdrop-blur-md border border-green-200/50",
      purple: "bg-purple-50/80 backdrop-blur-md border border-purple-200/50",
      orange: "bg-orange-50/80 backdrop-blur-md border border-orange-200/50",
      gray: "bg-gray-50/80 backdrop-blur-md border border-gray-200/50",
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
      ref={ref}
      className={`${backgroundClass} ${heightClass} ${className}`}
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.95,
        filter: "blur(10px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {
              opacity: 0,
              y: 100,
              scale: 0.95,
              filter: "blur(10px)",
            }
      }
      transition={{
        duration: 1.2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        staggerChildren: stagger ? 0.1 : 0,
      }}
      exit={{
        opacity: 0,
        y: -100,
        scale: 0.95,
        filter: "blur(10px)",
        transition: { duration: 0.8 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.8,
          delay: delay + 0.2,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}
