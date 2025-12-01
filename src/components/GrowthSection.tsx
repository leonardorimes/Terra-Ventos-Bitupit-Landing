"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function GrowthSection() {
  const growthAreas = [
    "Expansão para novos destinos litorâneos",
    "Parcerias com desenvolvedores locais",
    "Tecnologia para análise de mercado",
    "Rede de investidores internacionais",
    "Programa de fidelidade e benefícios",
    "Educação financeira e imobiliária",
    "Eventos e networking exclusivos",
    "Plataforma de gestão de investimentos",
    "Consultoria jurídica especializada",
    "Sustentabilidade e impacto social",
  ];

  return (
    <AnimatedSection
      background="gradient"
      color="blue"
      direction="up"
      delay={0.1}
      className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary-500 mb-8 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Impulsionando o crescimento da comunidade
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-secondary-500 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            Estamos moldando o futuro dos investimentos imobiliários litorâneos,
            oferecendo aos nossos membros acesso às ferramentas, comunidade e
            conhecimento necessários para prosperar.
          </motion.p>
          <motion.h3
            className="text-2xl md:text-3xl font-semibold text-primary-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Soluções para cada etapa do seu investimento
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {growthAreas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <p className="text-secondary-500 font-medium">{area}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-primary-500 mb-4">
              Faça parte do crescimento
            </h4>
            <p className="text-secondary-500 mb-6">
              Junte-se à comunidade que está revolucionando os investimentos
              imobiliários no litoral nordestino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300">
                Entrar na Comunidade
              </button>
              <button className="border border-accent-500 text-accent-500 px-8 py-3 rounded-lg font-semibold hover:bg-accent-50 transition-colors duration-300">
                Conhecer Projetos
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
