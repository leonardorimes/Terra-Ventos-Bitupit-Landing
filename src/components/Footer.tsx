import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seção do logo - mais proeminente */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Logo size="lg" color="white" className="h-40 w-auto" />
            </motion.div>
          </div>
        </motion.div>

        {/* Seção principal com navegação */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
          {/* Navegação - apenas texto, sem links */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 lg:mb-0">
            <div className="flex flex-wrap gap-4 md:gap-8">
              <span className="text-gray-300">{t("footer.about")}</span>
              <span className="text-gray-300">{t("footer.opportunities")}</span>
              <span className="text-gray-300">{t("footer.lifestyle")}</span>
            </div>
          </div>

          {/* Endereços */}
          <div className="text-gray-300 text-sm space-y-2">
            <div>
              <p className="font-semibold text-white mb-1">Preá - Cruz</p>
              <p>{t("footer.address.preá")}</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-1">Fortaleza</p>
              <p>{t("footer.address.fortaleza")}</p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-400 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-300">{t("footer.company")} © 2025</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <a
                href="#politica-privacidade"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t("footer.privacy")}
              </a>
              <a
                href="#acessibilidade"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t("footer.accessibility")}
              </a>
              <p className="text-gray-300">{t("footer.rights")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
