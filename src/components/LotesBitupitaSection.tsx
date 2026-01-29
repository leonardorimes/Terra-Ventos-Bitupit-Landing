"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LotesBitupitaSection() {
  const { t } = useLanguage();
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const investmentOptions = [
    {
      lotSize: "Lote 250m²",
      investment: "R$ 80.000,00",
      description: "Perfeito para um bangalô ou chalé de praia.",
    },
    {
      lotSize: "Lote 500m²",
      investment: "R$ 150.000,00",
      description: "Ideal para casas maiores com área de lazer privativa.",
    },
  ];

  const specs = [
    { label: t("technical.total-area"), value: "4.300 m²", note: "(incluso marinha)" },
    { label: t("technical.beach-front"), value: "14,32 m", note: "(Pé na areia)" },
    { label: t("technical.street-front"), value: "10,00 m", note: "" },
    { label: t("technical.depth"), value: "> 146 m", note: "" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#1A202C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            style={{
              fontFamily: '"Avenir Light", "Avenir", sans-serif',
              fontWeight: 300,
            }}
          >
            Lotes Bitupitá
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-avenir">
            {t("technical.ideal-space") || "O espaço ideal para um projeto de vida, uma pousada de charme ou simplesmente para ver seu patrimônio crescer com frente mar livre."}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image (The "Planta") */}
          <div className="w-full lg:w-1/2">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group border border-gray-700/50 shadow-2xl bg-[#111D29]"
              onClick={openImageModal}
            >
              <Image
                src="/images/bitupita/lotes-bitupita2.jpg"
                alt="Lotes Bitupitá - Planta Geral"
                fill
                className="object-contain lg:object-cover transition-transform duration-500 group-hover:scale-105"
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg transform translate-y-4 group-hover:translate-y-0 text-[#142431]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              
               <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
                <span className="inline-block bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-sm border border-white/10">
                  Clique para ampliar
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Pricing Table */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl text-white font-diodrum mb-6 border-b border-gray-700 pb-2">
              Tabela de Preços
            </h3>
            
            <div className="overflow-hidden rounded-lg border border-gray-700/50 shadow-lg">
              <table className="w-full text-center border-collapse">
                <thead>
                  <tr className="bg-[#111D29] text-[#B2A28E]">
                    <th className="py-4 px-2 font-bold uppercase tracking-wider text-sm border-b border-gray-700">LOT</th>
                    <th className="py-4 px-2 font-bold uppercase tracking-wider text-sm border-b border-gray-700">Tamanho m²</th>
                    <th className="py-4 px-2 font-bold uppercase tracking-wider text-sm border-b border-gray-700">Valor R$</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {[
                    { lot: "1", size: "280", price: "120.000" },
                    { lot: "2", size: "286", price: "150.000" },
                    { lot: "3", size: "288", price: "150.000" },
                    { lot: "4", size: "288", price: "200.000" },
                    { lot: "5", size: "280", price: "250.000" },
                    { lot: "6", size: "270", price: "300.000" },
                    { lot: "7", size: "280", price: "300.000" },
                    { lot: "8", size: "320", price: "450.000" },
                    { lot: "9", size: "360", price: "450.000" },
                    { lot: "10", size: "300", price: "500.000" },
                  ].map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`
                        ${idx % 2 === 0 ? "bg-[#252A35]" : "bg-[#2A303C]"}
                        hover:bg-[#323846] transition-colors duration-150 border-b border-gray-700/30 last:border-0
                      `}
                    >
                      <td className="py-3 px-2 font-medium text-lg text-white">{row.lot}</td>
                      <td className="py-3 px-2 font-medium text-lg">{row.size}</td>
                      <td className="py-3 px-2 font-bold text-lg text-[#B2A28E]">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="text-gray-400 text-sm mt-4 text-center italic">
              * Valores sujeitos a alteração sem aviso prévio.
            </p>
          </div>
        </div>
      </div>

      {/* Modal Expansion */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-[110] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors backdrop-blur-sm border border-white/10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <motion.div
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full max-w-[95vw] max-h-[90vh] pointer-events-auto">
                <Image
                  src="/images/bitupita/lotes-bitupita2.jpg"
                  alt="Lotes Bitupitá Ampliado"
                  fill
                  className="object-contain"
                  quality={100}
                  priority
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
