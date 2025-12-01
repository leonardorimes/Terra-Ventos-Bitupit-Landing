"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

interface ResizeLoadingProps {
  isVisible: boolean;
}

export default function ResizeLoading({ isVisible }: ResizeLoadingProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background pattern sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-12"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-white/10 to-transparent transform skew-y-12"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Logo size="lg" color="white" />
        </motion.div>

        {/* Spinner */}
        <motion.div
          className="relative mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <div className="w-12 h-12 border-3 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
        </motion.div>

        {/* Texto */}
        <motion.div
          className="text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <h3 className="text-lg font-bold font-diodrum mb-1">
            Ajustando Layout
          </h3>
          <p className="text-white/80 font-avenir text-sm">
            Otimizando para sua tela...
          </p>
        </motion.div>

        {/* Elementos decorativos menores */}
        <motion.div
          className="absolute -top-2 -left-2 w-4 h-4 bg-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-2 -right-2 w-3 h-3 bg-white/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </div>
    </motion.div>
  );
}
