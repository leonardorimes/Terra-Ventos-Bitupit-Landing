"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function BenefitsSection() {
  return (
    <AnimatedSection
      background="gradient"
      color="blue"
      direction="left"
      delay={0.3}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-neutral-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-accent-200"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(14, 165, 233, 0.2)",
            }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary-500 mb-6"
              whileInView={{
                scale: [1, 1.1, 1],
                color: ["#111827", "#0ea5e9", "#111827"],
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Oportunidades Exclusivas
            </motion.h3>
            <p className="text-lg text-secondary-500 leading-relaxed font-body">
              Acesso antecipado a investimentos imobiliários premium no litoral
              nordestino, com curadoria jurídica especializada e análise de
              mercado detalhada.
            </p>
          </motion.div>

          <motion.div
            className="bg-neutral-50/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-primary-200"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotateY: -5,
              boxShadow: "0 20px 40px rgba(100, 116, 139, 0.2)",
            }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-primary-500 mb-6"
              whileInView={{
                scale: [1, 1.1, 1],
                color: ["#111827", "#64748b", "#111827"],
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Lifestyle Conectado
            </motion.h3>
            <p className="text-lg text-secondary-500 leading-relaxed mb-6">
              Comunidade de kitesurfistas, investidores e amantes do mar,
              conectando pessoas com interesses similares e paixão pelo litoral.
            </p>
            <motion.a
              href="#oportunidades"
              className="text-accent-500 font-semibold hover:text-accent-600 transition-colors"
              whileHover={{ x: 10, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              Ver Oportunidades →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
