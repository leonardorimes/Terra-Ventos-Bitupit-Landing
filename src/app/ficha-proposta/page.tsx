"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import FixedLanguageSelector from "@/components/FixedLanguageSelector";
import Footer from "@/components/Footer";
import FichaPropostaForm from "@/components/FichaPropostaForm";

export default function FichaPropostaPage() {
  useEffect(() => {
    // Atualizar metadata da página
    document.title = "Ficha de Proposta - Bitupitá Villas | Terra Ventos";
    
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute(
        "content",
        "Preencha a ficha de proposta para Bitupitá Villas. Terra Ventos - Investimento imobiliário no litoral do Ceará."
      );
    }
  }, []);

  return (
    <motion.main
      className="min-h-screen w-full max-w-full overflow-x-hidden bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FixedLanguageSelector />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-500 to-primary-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Ficha de Proposta
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Bitupitá Villas - Terra Ventos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FichaPropostaForm />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </motion.main>
  );
}
