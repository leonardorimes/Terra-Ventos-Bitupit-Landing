"use client";

import { motion } from "framer-motion";

interface WindTurbineImageProps {
  className?: string;
  animated?: boolean;
}

export default function WindTurbineImage({
  className = "",
  animated = true,
}: WindTurbineImageProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 400 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sky gradient background */}
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#E0F6FF" />
          </linearGradient>
          <linearGradient id="towerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C0C0C0" />
            <stop offset="100%" stopColor="#A0A0A0" />
          </linearGradient>
        </defs>

        {/* Sky background */}
        <rect width="400" height="600" fill="url(#skyGradient)" />

        {/* Ground */}
        <rect x="0" y="500" width="400" height="100" fill="#90EE90" />

        {/* Wind turbine tower */}
        <rect
          x="190"
          y="200"
          width="20"
          height="300"
          fill="url(#towerGradient)"
        />

        {/* Wind turbine nacelle */}
        <rect x="180" y="200" width="40" height="30" fill="#2C3E50" rx="5" />

        {/* Wind turbine blades */}
        {animated ? (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 215px" }}
          >
            {/* Blade 1 */}
            <ellipse
              cx="200"
              cy="215"
              rx="80"
              ry="8"
              fill="#34495E"
              transform="rotate(0 200 215)"
            />
            {/* Blade 2 */}
            <ellipse
              cx="200"
              cy="215"
              rx="80"
              ry="8"
              fill="#34495E"
              transform="rotate(120 200 215)"
            />
            {/* Blade 3 */}
            <ellipse
              cx="200"
              cy="215"
              rx="80"
              ry="8"
              fill="#34495E"
              transform="rotate(240 200 215)"
            />
          </motion.g>
        ) : (
          <g>
            {/* Blade 1 */}
            <ellipse
              cx="200"
              cy="215"
              rx="80"
              ry="8"
              fill="#34495E"
              transform="rotate(0 200 215)"
            />
            {/* Blade 2 */}
            <ellipse
              cx="200"
              cy="215"
              rx="80"
              ry="8"
              fill="#34495E"
              transform="rotate(120 200 215)"
            />
            {/* Blade 3 */}
            <ellipse
              cx="200"
              cy="215"
              rx="80"
              ry="8"
              fill="#34495E"
              transform="rotate(240 200 215)"
            />
          </g>
        )}

        {/* Clouds */}
        <motion.g
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse
            cx="100"
            cy="100"
            rx="40"
            ry="20"
            fill="white"
            opacity="0.8"
          />
          <ellipse
            cx="120"
            cy="100"
            rx="30"
            ry="15"
            fill="white"
            opacity="0.8"
          />
          <ellipse
            cx="80"
            cy="100"
            rx="25"
            ry="12"
            fill="white"
            opacity="0.8"
          />
        </motion.g>

        <motion.g
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ellipse
            cx="300"
            cy="80"
            rx="35"
            ry="18"
            fill="white"
            opacity="0.7"
          />
          <ellipse
            cx="315"
            cy="80"
            rx="25"
            ry="12"
            fill="white"
            opacity="0.7"
          />
          <ellipse
            cx="285"
            cy="80"
            rx="20"
            ry="10"
            fill="white"
            opacity="0.7"
          />
        </motion.g>

        {/* Sun */}
        <circle cx="320" cy="80" r="25" fill="#FFD700" />

        {/* Hills in background */}
        <path
          d="M0,400 Q100,350 200,380 T400,400 L400,500 L0,500 Z"
          fill="#8FBC8F"
          opacity="0.6"
        />
        <path
          d="M0,450 Q150,400 300,430 T400,450 L400,500 L0,500 Z"
          fill="#9ACD32"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
