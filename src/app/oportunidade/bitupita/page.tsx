"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
import SignupModal from "@/components/SignupModal";
import DynamicMeta from "@/components/DynamicMeta";
import WhatsAppButton from "@/components/WhatsAppButton";
// import OpportunityHero from "@/components/opportunity/OpportunityHero";
// import BalanceSection from "@/components/opportunity/BalanceSection";
// import InvestmentOptionsSection from "@/components/opportunity/InvestmentOptionsSection";
// import ValuationSection from "@/components/opportunity/ValuationSection";
// import AnalysisSection from "@/components/opportunity/AnalysisSection";
// import AboutBitupitaSection from "@/components/opportunity/AboutBitupitaSection";
// import SignupSection from "@/components/SignupSection";

export default function BitupitaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.main
      className="min-h-screen w-full max-w-full overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DynamicMeta />
      {/* <Navbar onContactClick={openModal} /> */}
      {/* <OpportunityHero onContactClick={openModal} /> */}
      {/* <BalanceSection /> */}
      {/* <InvestmentOptionsSection /> */}
      {/* <ValuationSection /> */}
      {/* <AnalysisSection /> */}
      {/* <AboutBitupitaSection /> */}
      {/* <SignupSection /> */}
      {/* <Footer /> */}

      <SignupModal isOpen={isModalOpen} onClose={closeModal} />
      <WhatsAppButton />
    </motion.main>
  );
}




