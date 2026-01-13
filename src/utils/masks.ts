// Funções de máscara para campos do formulário

export const maskCPF = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, "");
  
  // Aplica a máscara 000.000.000-00
  if (numbers.length <= 11) {
    return numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  
  return value;
};

export const maskRG = (value: string): string => {
  // Remove tudo que não é número ou letra
  const alphanumeric = value.replace(/[^0-9A-Za-z]/g, "");
  
  // Limita a 12 caracteres e aplica máscara básica
  if (alphanumeric.length <= 12) {
    return alphanumeric;
  }
  
  return value;
};

export const maskCEP = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, "");
  
  // Aplica a máscara 00000-000
  if (numbers.length <= 8) {
    return numbers.replace(/(\d{5})(\d)/, "$1-$2");
  }
  
  return value;
};

export const maskPhone = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, "");
  
  // Aplica a máscara (00) 00000-0000 ou (00) 0000-0000
  if (numbers.length <= 11) {
    if (numbers.length <= 10) {
      // Telefone fixo: (00) 0000-0000
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      // Celular: (00) 00000-0000
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
  }
  
  return value;
};

export const maskCurrency = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, "");
  
  // Converte para formato de moeda brasileira
  if (numbers.length === 0) return "";
  
  const amount = parseInt(numbers, 10) / 100;
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
};
