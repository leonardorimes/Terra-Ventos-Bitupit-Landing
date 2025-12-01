"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from "@emailjs/browser";

interface SignupFormProps {
  onSubmit?: () => void;
  showHeader?: boolean;
  className?: string;
}

export default function SignupForm({
  onSubmit,
  showHeader = false,
  className = "",
}: SignupFormProps) {
  const { t, language } = useLanguage();

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    paisEstado: "",
    faixaInvestimento: "",
    interessePrincipal: "",
    aceitoComunicacoes: false,
  });

  // Estados para controlar o envio do formulário
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Configurar EmailJS
    const serviceId = "gmailMessage";
    const templateId = "template_4m13d9p";
    const publicKey = "qBifyS-ncgTggC0Co";

    // Preparar dados para o template
    const templateParams = {
      to_email: "rimesleo@gmail.com",
      from_name: formData.nome,
      from_email: formData.email,
      phone: formData.whatsapp,
      country: formData.paisEstado || "Não informado",
      investment_range: getInvestmentRange(formData.faixaInvestimento),
      main_interest: getMainInterest(formData.interessePrincipal),
      message: `
Nova Inscrição - Terra Ventos

Informações Pessoais:
- Nome: ${formData.nome}
- Email: ${formData.email}
- Telefone/WhatsApp: ${formData.whatsapp}
- País/Estado: ${formData.paisEstado || "Não informado"}

Informações de Investimento:
- Faixa de Investimento: ${getInvestmentRange(formData.faixaInvestimento)}
- Interesse Principal: ${getMainInterest(formData.interessePrincipal)}

Data/Hora: ${new Date().toLocaleString("pt-BR")}
        `.trim(),
    };

    try {
      // Enviar email usando EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");

      // Limpar formulário após sucesso
      setTimeout(() => {
        setSubmitStatus("idle");
        setFormData({
          nome: "",
          email: "",
          whatsapp: "",
          paisEstado: "",
          faixaInvestimento: "",
          interessePrincipal: "",
          aceitoComunicacoes: false,
        });

        // Chamar callback se fornecido
        if (onSubmit) {
          onSubmit();
        }
      }, 3000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Função auxiliar para converter códigos de faixa de investimento
  const getInvestmentRange = (code: string): string => {
    const ranges: { [key: string]: string } = {
      up100k: "Até R$ 100.000",
      "100k500k": "R$ 100.000 - R$ 500.000",
      "500k1m": "R$ 500.000 - R$ 1.000.000",
      "1m5m": "R$ 1.000.000 - R$ 5.000.000",
      above5m: "Acima de R$ 5.000.000",
    };
    return ranges[code] || code;
  };

  // Função auxiliar para converter códigos de interesse principal
  const getMainInterest = (code: string): string => {
    const interests: { [key: string]: string } = {
      investment: "Investimento",
      lifestyle: "Lifestyle",
      kitesurf: "Kitesurf",
      tourism: "Turismo",
      business: "Negócios",
    };
    return interests[code] || code;
  };

  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {showHeader && (
        <div className="text-center mb-8">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-6 font-breathing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {t("signup.title")}
          </motion.h2>
          <motion.p
            className="text-lg text-black font-bold mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {t("signup.subtitle")}
          </motion.p>
        </div>
      )}

      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-green-700 font-medium">
                {t("signup.success")}
              </p>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-red-500 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-red-700 font-medium">{t("signup.error")}</p>
            </div>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Primeira linha - Nome e Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t("signup.name")} *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder={t("signup.name")}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t("signup.email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("signup.email")}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
              />
            </div>
          </div>

          {/* Segunda linha - Telefone e País/Estado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="whatsapp"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t("signup.phone")} *
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder={t("signup.phone")}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
              />
            </div>

            <div>
              <label
                htmlFor="paisEstado"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t("signup.country")}
              </label>
              <input
                type="text"
                id="paisEstado"
                name="paisEstado"
                value={formData.paisEstado}
                onChange={handleInputChange}
                placeholder={t("signup.country")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
              />
            </div>
          </div>

          {/* Terceira linha - Faixa de Investimento e Interesse Principal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="faixaInvestimento"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t("signup.budget")} *
              </label>
              <select
                id="faixaInvestimento"
                name="faixaInvestimento"
                value={formData.faixaInvestimento}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
              >
                <option value="">{t("signup.select")}</option>
                <option value="up100k">{t("signup.range.up100k")}</option>
                <option value="100k500k">{t("signup.range.100k500k")}</option>
                <option value="500k1m">{t("signup.range.500k1m")}</option>
                <option value="1m5m">{t("signup.range.1m5m")}</option>
                <option value="above5m">{t("signup.range.above5m")}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="interessePrincipal"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                {t("signup.interest")} *
              </label>
              <select
                id="interessePrincipal"
                name="interessePrincipal"
                value={formData.interessePrincipal}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
              >
                <option value="">{t("signup.select")}</option>
                <option value="investment">
                  {t("signup.option.investment")}
                </option>
                <option value="lifestyle">
                  {t("signup.option.lifestyle")}
                </option>
                <option value="kitesurf">{t("signup.option.kitesurf")}</option>
                <option value="tourism">{t("signup.option.tourism")}</option>
                <option value="business">{t("signup.option.business")}</option>
              </select>
            </div>
          </div>

          {/* Checkbox de Aceite */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="aceitoComunicacoes"
              name="aceitoComunicacoes"
              checked={formData.aceitoComunicacoes}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-accent-500 focus:ring-accent-500 border-gray-300 rounded"
            />
            <label
              htmlFor="aceitoComunicacoes"
              className="ml-3 text-sm text-secondary-500 font-body"
            >
              {t("signup.accept")}
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <motion.button
              type="submit"
              disabled={isSubmitting || !formData.aceitoComunicacoes}
              className="bg-secondary-700 hover:bg-secondary-800 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 min-w-[200px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  {t("signup.submitting")}
                </div>
              ) : (
                t("signup.join")
              )}
            </motion.button>
          </div>

          {/* Footer */}
          <motion.p
            className="text-center text-sm text-secondary-500 font-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t("signup.privacy")}{" "}
            <a
              href="#"
              className="text-accent-500 hover:text-accent-600 underline"
            >
              {t("signup.privacy.link")}
            </a>
          </motion.p>
        </form>
      </motion.div>
    </div>
  );
}
