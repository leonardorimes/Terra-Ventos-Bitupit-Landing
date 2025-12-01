"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../AnimatedSection";

export default function AnalysisSection() {
  return (
    <AnimatedSection
      id="analisando-oportunidade"
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-20 bg-white relative overflow-hidden"
    >
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
            Analisando a Oportunidade
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

        {/* Placeholder para análise detalhada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Localização", icon: "📍" },
            { title: "Potencial de Valorização", icon: "📈" },
            { title: "Infraestrutura", icon: "🏗️" },
            { title: "Rentabilidade", icon: "💰" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
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
              <div className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary-500 mb-4">
                  {item.title}
                </h3>
                <p className="text-secondary-500 text-sm leading-relaxed">
                  {/* Conteúdo será preenchido com informações do PDF */}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

