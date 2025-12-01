"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

export default function FounderSection() {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      id="fundador"
      background="solid"
      color="gray"
      direction="up"
      delay={0.1}
      className="pt-32 pb-20 bg-neutral-950 relative overflow-hidden"
    >
      {/* Logo como sombra de fundo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="opacity-5 scale-[2]">
          <Logo size="lg" color="default" />
        </div>
      </div>

      <div
        id="sobre"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Profile */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Image */}
            <div className="relative inline-block mb-6">
              <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full overflow-hidden bg-gradient-to-br from-accent-100 to-accent-200 shadow-lg">
                <img
                  src="/images/bernardo.png"
                  alt="Bernardo Carvalho Wertheim"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <motion.h3
              className="text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("founder.name")}
            </motion.h3>
            <motion.p
              className="text-lg text-accent-950 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t("founder.title")}
            </motion.p>
          </motion.div>

          {/* Right Side - Introduction */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-breathing"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t("founder.heading")}
            </motion.h2>
            <motion.p
              className="text-xl text-white leading-relaxed mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("founder.description")}
            </motion.p>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {/* Experience Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Cortina Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-100 to-accent-200 z-10"
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-l from-accent-100 to-accent-200 z-10"
              initial={{ x: "100%" }}
              whileInView={{ x: "-100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
            />
            <div className="relative z-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-accent-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-500">
                  {t("founder.experience.title")}
                </h3>
              </div>
              <p className="text-secondary-500 text-lg leading-relaxed font-body">
                {t("founder.experience.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
