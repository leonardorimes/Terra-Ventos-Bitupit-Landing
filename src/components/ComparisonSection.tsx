"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Energia Fóssil */}
          <AnimatedSection delay={0.1}>
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Energia Fóssil
              </h3>
              <p className="text-gray-600 mb-6">
                Combustíveis tradicionais como carvão, petróleo e gás natural.
              </p>
              <ul className="space-y-3 text-gray-600">
                {[
                  "Alto custo de produção",
                  "Emissões de CO2 e poluição",
                  "Recursos finitos e esgotáveis",
                  "Impacto ambiental negativo",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <span className="text-red-500 mr-2">✗</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>

          {/* Energia Solar */}
          <AnimatedSection delay={0.2}>
            <motion.div
              className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Energia Solar
              </h3>
              <p className="text-gray-600 mb-6">
                Energia limpa e renovável, mas com limitações.
              </p>
              <ul className="space-y-3 text-gray-600 mb-4">
                {[
                  "Dependência do clima e horário",
                  "Alto custo inicial de instalação",
                  "Necessita de baterias para armazenamento",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <span className="text-yellow-500 mr-2">⚠</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.p
                className="text-yellow-600 font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                Boa opção, mas com limitações.
              </motion.p>
            </motion.div>
          </AnimatedSection>

          {/* Terra Ventos */}
          <AnimatedSection delay={0.3}>
            <motion.div
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border-2 border-primary-200 relative"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" as const, stiffness: 200 }}
              >
                <span className="bg-accent-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  RECOMENDADO
                </span>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Terra Ventos
              </h3>
              <p className="text-gray-600 mb-6">
                Energia eólica sustentável e eficiente.
              </p>
              <ul className="space-y-3 text-gray-600 mb-4">
                {[
                  "Energia limpa e renovável",
                  "Baixo custo operacional",
                  "Funciona 24h com vento adequado",
                  "Tecnologia avançada e confiável",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <span className="text-accent-500 mr-2">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.p
                className="text-accent-600 font-bold text-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, type: "spring" as const, stiffness: 200 }}
              >
                A melhor escolha para o futuro!
              </motion.p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
