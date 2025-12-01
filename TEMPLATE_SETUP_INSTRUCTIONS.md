# 📧 Configuração do Template de Email - Terra Ventos

## 🎯 **Templates Criados:**

✅ **email-template.html** - Template HTML completo com design profissional
✅ **email-template-text.txt** - Versão em texto puro (fallback)

## 📋 **Como Configurar no EmailJS:**

### **1. Acessar Dashboard EmailJS:**

- Vá para: https://dashboard.emailjs.com/
- Faça login na sua conta

### **2. Criar Novo Template:**

1. Clique em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Escolha **"Blank Template"**

### **3. Configurar o Template HTML:**

#### **Subject (Assunto):**

```
🎯 Nova Inscrição Terra Ventos - {{from_name}}
```

#### **Content (Conteúdo):**

- Copie todo o conteúdo do arquivo `email-template.html`
- Cole no editor HTML do EmailJS
- Clique em **"Save"**

### **4. Configurar o Template de Texto (Opcional):**

1. Crie um segundo template
2. Use o conteúdo de `email-template-text.txt`
3. Marque como **"Text Version"**

## 🔧 **Variáveis do Template:**

O template usa estas variáveis que são enviadas pelo formulário:

```javascript
{
  from_name: "Nome do usuário",
  from_email: "email@usuario.com",
  phone: "+55 11 99999-9999",
  country: "Brasil - São Paulo",
  investment_range: "R$ 100.000 - R$ 500.000",
  main_interest: "Imóveis",
  message: "Data/Hora da inscrição + detalhes"
}
```

## 🎨 **Características do Template:**

### **Design Profissional:**

- ✅ Cores da marca Terra Ventos
- ✅ Layout responsivo
- ✅ Ícones e emojis para melhor visual
- ✅ Seções bem organizadas

### **Informações Incluídas:**

- ✅ Dados pessoais completos
- ✅ Perfil de investimento
- ✅ Call-to-action para WhatsApp
- ✅ Timestamp da inscrição
- ✅ Footer com informações da empresa

### **Funcionalidades:**

- ✅ Link direto para WhatsApp
- ✅ Destaque visual para informações importantes
- ✅ Design mobile-friendly
- ✅ Fallback para texto puro

## 🚀 **Testando o Template:**

### **1. Preview no EmailJS:**

- Use a função **"Preview"** no dashboard
- Teste com dados fictícios

### **2. Teste Real:**

- Preencha o formulário no site
- Verifique se o email chega formatado
- Confirme se todos os dados aparecem

### **3. Checklist de Verificação:**

- ✅ Assunto personalizado com nome
- ✅ Dados pessoais completos
- ✅ Informações de investimento
- ✅ Link do WhatsApp funcional
- ✅ Design responsivo
- ✅ Footer com informações da empresa

## 📱 **Personalizações Sugeridas:**

### **Para Diferentes Idiomas:**

- Crie templates separados para PT, EN, ES
- Use as traduções do `LanguageContext.tsx`

### **Para Diferentes Tipos de Lead:**

- Template para investidores de alto valor
- Template para interessados em lifestyle
- Template para leads internacionais

## 🔧 **Troubleshooting:**

### **Template não aparece:**

- Verifique se está salvo e publicado
- Confirme se o Template ID está correto

### **Variáveis não funcionam:**

- Verifique se os nomes das variáveis estão corretos
- Confirme se estão sendo enviadas pelo formulário

### **Design quebrado:**

- Teste em diferentes clientes de email
- Use versão texto como fallback

## 📞 **Suporte:**

- **EmailJS Docs:** https://www.emailjs.com/docs/
- **Template Editor:** https://dashboard.emailjs.com/templates
- **Testing Tools:** https://www.emailjs.com/docs/sdk/email/

---

**🎯 Próximo Passo:** Configure as variáveis de ambiente no `.env.local` com os IDs do template criado!
