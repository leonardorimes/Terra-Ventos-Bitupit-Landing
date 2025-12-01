"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";
import Logo from "../Logo";

export default function BalanceSection() {
  return (
    <AnimatedSection
      id="equilibrio-perfeito"
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Logo como sombra de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-10 scale-[3]">
          <Logo size="lg" color="default" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-6 font-breathing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            O Equilíbrio Perfeito
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-secondary-500 font-avenir leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Conteúdo será adicionado quando as informações estiverem disponíveis */}
          </motion.p>
        </div>

        {/* Placeholder para conteúdo futuro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[200px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.8 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {/* Conteúdo será preenchido com informações do PDF */}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

