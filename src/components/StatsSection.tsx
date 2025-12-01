"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedCounter from "./AnimatedCounter";
import Logo from "./Logo";

export default function StatsSection() {
  const stats = [
    {
      number: "500+",
      label: "Investidores na comunidade",
      isPercentage: false,
    },
    {
      number: "R$ 50M",
      label: "Volume de investimentos",
      isCurrency: true,
    },
    {
      number: "15",
      label: "Projetos imobiliários",
      suffix: "+ projetos",
    },
    {
      number: "100%",
      label: "Curadoria jurídica especializada",
      isPercentage: true,
    },
  ];

  return (
    <AnimatedSection
      background="gradient"
      color="blue"
      direction="scale"
      delay={0.4}
      className="py-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white relative overflow-hidden"
    >
      {/* Logo como sombra de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-8 scale-[2.5]">
          <Logo size="lg" color="white" />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1 + 0.2,
                type: "spring" as const,
                stiffness: 200,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  rotate: [0, 5, -5, 0],
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number === "15" ? (
                    <AnimatedCounter
                      value={15}
                      suffix={stat.suffix}
                      className="text-3xl md:text-4xl font-bold"
                    />
                  ) : (
                    <motion.span
                      whileInView={{
                        textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    >
                      {stat.number}
                    </motion.span>
                  )}
                </div>
                <motion.div
                  className="text-sm md:text-base opacity-90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="bg-white text-primary-500 rounded-2xl p-8 max-w-md mx-auto shadow-xl border-2 border-primary-200"
            whileHover={{
              scale: 1.05,
              y: -10,
              rotate: [0, 2, -2, 0],
              boxShadow: "0 25px 50px rgba(100, 116, 139, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-4xl font-bold mb-2"
              initial={{ scale: 0, rotate: -90 }}
              whileInView={{
                scale: 1,
                rotate: 0,
                textShadow: "0 0 20px rgba(20, 36, 49, 0.3)",
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                type: "spring" as const,
                stiffness: 200,
              }}
            >
              R$ 2.5M
            </motion.div>
            <div className="space-y-2 text-sm">
              <p>Ticket médio de investimento</p>
              <p>Retorno acima de 15% ao ano</p>
              <p>Investimento seguro e rentável</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
