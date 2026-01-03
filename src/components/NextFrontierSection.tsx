"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import ImageSlider from "./ImageSlider";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NextFrontierSection() {
  const { t } = useLanguage();
  return (
    <AnimatedSection
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="py-12 sm:py-16 md:py-20 bg-[#1A202C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo - Texto */}
          <motion.div
            className="order-1 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 lg:mb-12 leading-tight text-center lg:text-left px-2 break-words"
              style={{
                fontFamily: '"Avenir Light", "Avenir", sans-serif',
                fontWeight: 300,
              }}
            >
              {t("frontier.title")}
            </h2>

            <div className="space-y-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed font-body">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {t("frontier.text1")}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                {t("frontier.text2")}
              </motion.p>
            </div>
          </motion.div>

          {/* Lado Direito - Slider de Fotos */}
          <motion.div
            className="relative order-2 lg:order-2 mt-8 md:mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <ImageSlider
                images={[
                  "/images/bitupita/DJI_20251019210747_0114_D.jpg",
                  "/images/bitupita/DJI_20251019225828_0161_D.jpg",
                  "/images/bitupita/DJI_20251019225830_0162_D.jpg",
                  "/images/bitupita/DJI_20251019214529_0136_D.jpg",
                ]}
                alt="Bitupitá - Praia paradisíaca"
                autoPlay={true}
                autoPlayInterval={50000}
                enableModal={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
