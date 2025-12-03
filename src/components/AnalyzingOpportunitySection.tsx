"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ImageSlider from "./ImageSlider";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AnalyzingOpportunitySection() {
  const { t } = useLanguage();
  const opportunities = [
    t("analyzing.item1"),
    t("analyzing.item2"),
    t("analyzing.item3"),
    t("analyzing.item4"),
    t("analyzing.item5"),
    t("analyzing.item6"),
    t("analyzing.item7"),
    t("analyzing.item8"),
  ];

  return (
    <AnimatedSection
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-20 bg-[#F9F6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo - Slider de Fotos */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <ImageSlider
                images={[
                  "/images/bitupita/01.jpeg",
                  "/images/bitupita/DJI_20251019210520_0107_D.jpg",
                  "/images/bitupita/DJI_20251019210747_0114_D.jpg",
                  "/images/bitupita/DSC06843.jpg",
                ]}
                alt="Bitupitá - Paisagem costeira"
                autoPlay={true}
                autoPlayInterval={50000}
              />
            </div>
          </motion.div>

          {/* Lado Direito - Conteúdo */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-8 lg:mb-12 font-breathing text-center lg:text-left">
              {t("analyzing.title")}
            </h2>

            {/* Lista de Oportunidades */}
            <div className="space-y-4 mb-8">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                >
                  {/* Checkmark verde em caixa */}
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded border-2 border-green-600 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-base md:text-lg text-secondary-600 leading-relaxed font-body flex-1">
                    {opportunity}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Box de Valorização */}
            <motion.div
              className="bg-amber-50/80 border-2 border-amber-200/50 rounded-2xl p-6 md:p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="flex items-start gap-4">
                {/* Ícone de gráfico */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-amber-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-base md:text-lg text-secondary-700 leading-relaxed font-body">
                  {t("analyzing.highlight")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

