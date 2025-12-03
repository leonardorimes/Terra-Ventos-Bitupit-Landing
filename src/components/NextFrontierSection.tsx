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
      className="py-20 bg-[#F9F6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo - Texto */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-500 mb-8 lg:mb-12 font-breathing leading-tight text-center lg:text-left">
              {t("frontier.title")}
            </h2>

            <div className="space-y-6 text-base md:text-lg lg:text-xl text-secondary-600 leading-relaxed font-body">
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
            className="relative order-1 lg:order-2 mt-8 md:mt-12 lg:mt-0"
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
                  "/images/bitupita/DJI_20251019214527_0135_D.jpg",
                  "/images/bitupita/DJI_20251019214529_0136_D.jpg",
                  "/images/bitupita/DSC06845.jpg",
                  "/images/bitupita/DSC06869.jpg",
                ]}
                alt="Bitupitá - Praia paradisíaca"
                autoPlay={true}
                autoPlayInterval={50000}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

