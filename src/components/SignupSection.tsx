"use client";

import { motion } from "framer-motion";
import SignupForm from "./SignupForm";

// Componente de seção de cadastro para a Comunidade Terra Ventos
// Este componente contém um formulário completo para novos membros se inscreverem
export default function SignupSection() {
  return (
    <section
      id="signup-section"
      className="py-20 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Usar o componente SignupForm com header */}
        <SignupForm showHeader={true} />
      </div>
    </section>
  );
}
