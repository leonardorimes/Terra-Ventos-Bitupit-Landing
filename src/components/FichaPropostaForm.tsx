"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Logo from "./Logo";

interface FichaPropostaFormProps {
  onSubmit?: () => void;
  className?: string;
}

export default function FichaPropostaForm({
  onSubmit,
  className = "",
}: FichaPropostaFormProps) {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    // Cabeçalho
    lote: "",
    valor: "",
    
    // Dados do Proponente
    proponente: "",
    nacionalidade: "",
    estadoCivil: "",
    cpf: "",
    rg: "",
    profissao: "",
    endereco: "",
    bairro: "",
    cidadeUf: "",
    cep: "",
    telefone: "",
    email: "",
    
    // Dados do Comprador
    compradorNome: "",
    compradorCpf: "",
  });

  // Estados para controlar o envio do formulário
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  
  // Estados para validação
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Funções de máscara
  const maskCPF = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return value;
  };

  const maskCEP = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 8) {
      return numbers.replace(/(\d{5})(\d{1,3})$/, "$1-$2");
    }
    return value;
  };

  const maskTelefone = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length === 0) return "";
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 6) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 10) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    }
    return value;
  };

  const maskValor = (value: string): string => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, "");
    
    if (numbers === "") return "";
    
    // Converte para número e divide por 100 para ter centavos
    const amount = parseInt(numbers, 10) / 100;
    
    // Formata como moeda brasileira
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const maskRG = (value: string): string => {
    // Remove tudo que não é número ou letra
    const alphanumeric = value.replace(/[^0-9A-Za-z]/g, "");
    // Limita a 9 caracteres (formato comum: 00000000-0 ou 00.000.000-0)
    if (alphanumeric.length <= 9) {
      if (alphanumeric.length <= 2) {
        return alphanumeric;
      } else if (alphanumeric.length <= 5) {
        return alphanumeric.replace(/(\d{2})(\d)/, "$1.$2");
      } else if (alphanumeric.length <= 8) {
        return alphanumeric.replace(/(\d{2})(\d{3})(\d)/, "$1.$2.$3");
      } else {
        return alphanumeric.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
      }
    }
    return value;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    let maskedValue = value;

    // Aplicar máscaras conforme o campo
    switch (name) {
      case "cpf":
      case "compradorCpf":
        maskedValue = maskCPF(value);
        break;
      case "cep":
        maskedValue = maskCEP(value);
        break;
      case "telefone":
        maskedValue = maskTelefone(value);
        break;
      case "valor":
        maskedValue = maskValor(value);
        break;
      case "rg":
        maskedValue = maskRG(value);
        break;
      default:
        maskedValue = value;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: maskedValue,
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Funções de validação
  const validateCPF = (cpf: string): boolean => {
    const numbers = cpf.replace(/\D/g, "");
    
    // Verifica se tem 11 dígitos
    if (numbers.length !== 11) return false;
    
    // Verifica se todos os dígitos são iguais (CPFs inválidos conhecidos)
    if (/^(\d)\1{10}$/.test(numbers)) return false;
    
    // Validação dos dígitos verificadores
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(numbers.charAt(i)) * (10 - i);
    }
    let remainder = sum % 11;
    let digit = remainder < 2 ? 0 : 11 - remainder;
    if (digit !== parseInt(numbers.charAt(9))) return false;
    
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(numbers.charAt(i)) * (11 - i);
    }
    remainder = sum % 11;
    digit = remainder < 2 ? 0 : 11 - remainder;
    if (digit !== parseInt(numbers.charAt(10))) return false;
    
    return true;
  };

  const validateCEP = (cep: string): boolean => {
    const numbers = cep.replace(/\D/g, "");
    return numbers.length === 8;
  };

  const validateTelefone = (telefone: string): boolean => {
    const numbers = telefone.replace(/\D/g, "");
    return numbers.length >= 10 && numbers.length <= 11;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos
    const newErrors: { [key: string]: string } = {};
    
    // Validar CPF do proponente (apenas se preenchido)
    if (formData.cpf.trim() && !validateCPF(formData.cpf)) {
      newErrors.cpf = "CPF inválido. Verifique os dígitos.";
    }
    
    // Validar CPF do comprador (apenas se preenchido)
    if (formData.compradorCpf.trim() && !validateCPF(formData.compradorCpf)) {
      newErrors.compradorCpf = "CPF inválido. Verifique os dígitos.";
    }
    
    // Validar CEP (apenas se preenchido)
    if (formData.cep.trim() && !validateCEP(formData.cep)) {
      newErrors.cep = "CEP inválido. Use o formato: 00000-000";
    }
    
    // Validar Telefone (apenas se preenchido)
    if (formData.telefone.trim() && !validateTelefone(formData.telefone)) {
      newErrors.telefone = "Telefone inválido. Use o formato: (00) 00000-0000";
    }
    
    // Se houver erros, não enviar
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitStatus("error");
      return;
    }
    
    // Limpar erros
    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Configurar EmailJS
    const serviceId = "gmailMessage";
    const templateId = "template_n6gdvi8";
    const publicKey = "qBifyS-ncgTggC0Co";

    // Preparar dados para o template - campos individuais para facilitar formatação
    const templateParams = {
      to_email: "rimesleo@gmail.com",
      from_name: formData.proponente || formData.compradorNome || "Não informado",
      from_email: formData.email || "Não informado",
      
      // Cabeçalho
      lote: formData.lote || "Não informado",
      valor: formData.valor || "Não informado",
      
      // Dados do Proponente
      proponente_nome: formData.proponente || "Não informado",
      proponente_nacionalidade: formData.nacionalidade || "Não informado",
      proponente_estado_civil: formData.estadoCivil || "Não informado",
      proponente_cpf: formData.cpf || "Não informado",
      proponente_rg: formData.rg || "Não informado",
      proponente_profissao: formData.profissao || "Não informado",
      proponente_endereco: formData.endereco || "Não informado",
      proponente_bairro: formData.bairro || "Não informado",
      proponente_cidade_uf: formData.cidadeUf || "Não informado",
      proponente_cep: formData.cep || "Não informado",
      proponente_telefone: formData.telefone || "Não informado",
      proponente_email: formData.email || "Não informado",
      
      // Dados do Comprador
      comprador_nome: formData.compradorNome || "Não informado",
      comprador_cpf: formData.compradorCpf || "Não informado",
      
      // Data/Hora
      data_hora: new Date().toLocaleString("pt-BR"),
      
      // Mensagem formatada completa (para compatibilidade)
      message: `
FICHA PROPOSTA - BITUPITÁ VILLAS

CABEÇALHO:
- Lote: ${formData.lote || "Não informado"}
- Valor: ${formData.valor || "Não informado"}

DADOS DO PROPONENTE:
- Nome: ${formData.proponente || "Não informado"}
- Nacionalidade: ${formData.nacionalidade || "Não informado"}
- Estado Civil: ${formData.estadoCivil || "Não informado"}
- CPF: ${formData.cpf || "Não informado"}
- RG: ${formData.rg || "Não informado"}
- Profissão: ${formData.profissao || "Não informado"}
- Endereço: ${formData.endereco || "Não informado"}
- Bairro: ${formData.bairro || "Não informado"}
- Cidade/UF: ${formData.cidadeUf || "Não informado"}
- CEP: ${formData.cep || "Não informado"}
- Telefone: ${formData.telefone || "Não informado"}
- Email: ${formData.email || "Não informado"}

DADOS DO COMPRADOR:
- Nome: ${formData.compradorNome || "Não informado"}
- CPF/MF: ${formData.compradorCpf || "Não informado"}

Data/Hora: ${new Date().toLocaleString("pt-BR")}
      `.trim(),
    };

    try {
      // Enviar email usando EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");

      // Scroll suave para a mensagem de sucesso
      setTimeout(() => {
        const successMessage = document.querySelector('[data-success-message]');
        if (successMessage) {
          successMessage.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 300);

      // Limpar formulário após sucesso (mensagem fica visível por 8 segundos)
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrors({});
        setFormData({
          lote: "",
          valor: "",
          proponente: "",
          nacionalidade: "",
          estadoCivil: "",
          cpf: "",
          rg: "",
          profissao: "",
          endereco: "",
          bairro: "",
          cidadeUf: "",
          cep: "",
          telefone: "",
          email: "",
          compradorNome: "",
          compradorCpf: "",
        });

        // Chamar callback se fornecido
        if (onSubmit) {
          onSubmit();
        }
      }, 8000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <motion.div
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        {/* Cabeçalho com Logo */}
        <div className="text-center mb-8 pb-6 border-b-2 border-gray-200">
          {/* Logo Terra Ventos */}
          <div className="flex justify-center mb-6">
            <Logo size="lg" color="default" />
          </div>
          
          {/* Imagem FormImage */}
          <div className="relative w-full max-w-3xl mx-auto mb-6 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/formImage.jpg"
              alt="Bitupitá Villas"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm md:text-base text-gray-700">
            <div>
              <span className="font-semibold">CIDADE:</span> BITUPITÁ
            </div>
            <div>
              <span className="font-semibold">EMPREENDIMENTO:</span> BITUPITÁ VILLAS
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
          FICHA PROPOSTA
        </h2>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            data-success-message
            className="mb-8 p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.6
            }}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.2
                }}
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
                ✓ Proposta Enviada com Sucesso!
              </h3>
              <p className="text-lg text-green-700 font-medium">
                Nossa equipe entrará em contato em breve.
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
              <p className="text-red-700 font-medium">
                Erro ao enviar formulário. Por favor, tente novamente.
              </p>
            </div>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cabeçalho - Lote e Valor */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg">
            <div>
              <label
                htmlFor="lote"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                LOTE
              </label>
              <input
                type="text"
                id="lote"
                name="lote"
                value={formData.lote}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
              />
            </div>
            <div>
              <label
                htmlFor="valor"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                VALOR
              </label>
              <input
                type="text"
                id="valor"
                name="valor"
                value={formData.valor}
                onChange={handleInputChange}
                placeholder="R$ 0,00"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
              />
            </div>
          </div>

          {/* Dados do Proponente */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              PROPONENTE:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="proponente"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="proponente"
                  name="proponente"
                  value={formData.proponente}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="nacionalidade"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nacionalidade
                </label>
                <input
                  type="text"
                  id="nacionalidade"
                  name="nacionalidade"
                  value={formData.nacionalidade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="estadoCivil"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Estado Civil
                </label>
                <select
                  id="estadoCivil"
                  name="estadoCivil"
                  value={formData.estadoCivil}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                >
                  <option value="">Selecione</option>
                  <option value="Solteiro(a)">Solteiro(a)</option>
                  <option value="Casado(a)">Casado(a)</option>
                  <option value="Divorciado(a)">Divorciado(a)</option>
                  <option value="Viúvo(a)">Viúvo(a)</option>
                  <option value="União Estável">União Estável</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="cpf"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  CPF *
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  required
                  placeholder="000.000.000-00"
                  maxLength={14}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black ${
                    errors.cpf ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.cpf && (
                  <p className="mt-1 text-sm text-red-600">{errors.cpf}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="rg"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  RG
                </label>
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  value={formData.rg}
                  onChange={handleInputChange}
                  placeholder="00.000.000-0"
                  maxLength={12}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="profissao"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Profissão
                </label>
                <input
                  type="text"
                  id="profissao"
                  name="profissao"
                  value={formData.profissao}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="endereco"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Endereço
                </label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="bairro"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Bairro
                </label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="cidadeUf"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Cidade/UF
                </label>
                <input
                  type="text"
                  id="cidadeUf"
                  name="cidadeUf"
                  value={formData.cidadeUf}
                  onChange={handleInputChange}
                  placeholder="Ex: Fortaleza/CE"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="cep"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  CEP
                </label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleInputChange}
                  placeholder="00000-000"
                  maxLength={9}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black ${
                    errors.cep ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.cep && (
                  <p className="mt-1 text-sm text-red-600">{errors.cep}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  required
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black ${
                    errors.telefone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.telefone && (
                  <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Endereço Eletrônico (Email) *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>
            </div>
          </div>

          {/* Texto Informativo */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-sm text-gray-700 leading-relaxed">
              A presente proposta vincula as partes a todos os seus termos, ficando desde já ajustado que em caso de desistência, será retido o valor integral do sinal pago como princípio de pagamento nos termos da legislação aplicável à espécie.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              Serão definidos em instrumento particular de contrato de compromisso de compra e venda as condições contratuais definitivas da transação.
            </p>
          </div>

          {/* Dados do Comprador */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              COMPRADOR(A):
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="compradorNome"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nome *
                </label>
                <input
                  type="text"
                  id="compradorNome"
                  name="compradorNome"
                  value={formData.compradorNome}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="compradorCpf"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  CPF/MF n° *
                </label>
                <input
                  type="text"
                  id="compradorCpf"
                  name="compradorCpf"
                  value={formData.compradorCpf}
                  onChange={handleInputChange}
                  required
                  placeholder="000.000.000-00"
                  maxLength={14}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-black ${
                    errors.compradorCpf ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.compradorCpf && (
                  <p className="mt-1 text-sm text-red-600">{errors.compradorCpf}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
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
                  Enviando...
                </div>
              ) : (
                "Enviar Proposta"
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
