"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import Navbar from "@/components/Navbar"; // Mantido comentado para uso futuro
import SignupModal from "@/components/SignupModal";
import DynamicMeta from "@/components/DynamicMeta";
import WhatsAppButton from "@/components/WhatsAppButton";
import FixedLanguageSelector from "@/components/FixedLanguageSelector";
import Hero from "@/components/Hero";
import PromoBanner from "@/components/PromoBanner";
import ProblemSection from "@/components/ProblemSection";
// import InvestmentOptionsSection from "@/components/InvestmentOptionsSection";
// import TechnicalSpecsSection from "@/components/TechnicalSpecsSection";
import LotesBitupitaSection from "@/components/LotesBitupitaSection";
import NextFrontierSection from "@/components/NextFrontierSection";
import AnalyzingOpportunitySection from "@/components/AnalyzingOpportunitySection";
import KnowBitupitaSection from "@/components/KnowBitupitaSection";
import ParadiseAwaitsSection from "@/components/ParadiseAwaitsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.main
      className="w-full max-w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DynamicMeta />
      <FixedLanguageSelector />
      {/* <Navbar onContactClick={openModal} /> */}
      <Hero onContactClick={openModal} />
      <PromoBanner />
      <ProblemSection />
      {/* <InvestmentOptionsSection /> */}
      {/* <TechnicalSpecsSection /> */}
      <LotesBitupitaSection />
      <KnowBitupitaSection />
      <NextFrontierSection />
      <AnalyzingOpportunitySection />
      <ParadiseAwaitsSection />
      <Footer />

      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
      <WhatsAppButton />
    </motion.main>
  );
}
