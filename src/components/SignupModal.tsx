"use client";

import { motion, AnimatePresence } from "framer-motion";
import SignupForm from "./SignupForm";

// Interface para as props do modal de cadastro
interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Modal de cadastro para a Comunidade Terra Ventos
// Este componente é um modal que aparece quando o usuário clica para se cadastrar
export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header com botão de fechar */}
            <div className="relative p-6 border-b border-gray-200">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Usar o componente SignupForm */}
            <SignupForm onSubmit={onClose} className="p-8" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
