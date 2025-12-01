# 📧 Template Simples - Terra Ventos (EmailJS)

## 🎯 **Templates Criados (Versão Simples):**

✅ **email-template-simple.html** - Template HTML limpo e direto
✅ **email-template-text-simple.txt** - Versão texto puro

## 📋 **Como Configurar no EmailJS:**

### **1. Acessar Dashboard:**

- Vá para: https://dashboard.emailjs.com/
- Faça login na sua conta

### **2. Criar Novo Template:**

1. Clique em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Escolha **"Blank Template"**

### **3. Configurar o Template:**

#### **Subject (Assunto):**

```
🎯 Nova Inscrição Terra Ventos - {{from_name}}
```

#### **Content (Conteúdo):**

- **Para versão HTML:** Copie todo o conteúdo de `email-template-simple.html`
- **Para versão texto:** Copie todo o conteúdo de `email-template-text-simple.txt`
- Cole no editor do EmailJS
- Clique em **"Save"**

## 🔧 **Variáveis Utilizadas:**

```javascript
{
  from_name: "Nome do usuário",
  from_email: "email@usuario.com",
  phone: "+55 11 99999-9999",
  country: "Brasil - São Paulo",
  investment_range: "R$ 100.000 - R$ 500.000",
  main_interest: "Imóveis",
  message: "Data/Hora + detalhes da inscrição"
}
```

## 📝 **Formato Seguindo o Padrão EmailJS:**

### **Estrutura do Template:**

```
Olá Leo,

Você tem uma nova inscrição de {{from_name}}:

[DADOS DO LEAD]

🎯 PRÓXIMO PASSO:
Entre em contato via WhatsApp em até 24 horas

Best wishes,
Terra Ventos Team
```

### **Características:**

- ✅ **Formato simples** e direto
- ✅ **Fácil de ler** em qualquer cliente de email
- ✅ **Call-to-action claro** para WhatsApp
- ✅ **Todas as informações** essenciais
- ✅ **Compatível** com o padrão EmailJS

## 🚀 **Testando:**

### **1. Preview no EmailJS:**

- Use dados de teste:
  - `from_name`: "João Silva"
  - `from_email`: "joao@email.com"
  - `phone`: "+55 11 99999-9999"
  - `country`: "Brasil - São Paulo"
  - `investment_range`: "R$ 100.000 - R$ 500.000"
  - `main_interest`: "Imóveis"
  - `message`: "Inscrição realizada em 15/01/2024 às 14:30"

### **2. Teste Real:**

- Preencha o formulário no site
- Verifique se o email chega formatado
- Confirme se o link do WhatsApp funciona

## 📱 **Vantagens do Template Simples:**

- ✅ **Carregamento rápido** - HTML leve
- ✅ **Compatibilidade máxima** - funciona em todos os clientes
- ✅ **Fácil manutenção** - código simples
- ✅ **Mobile-friendly** - responsivo
- ✅ **Foco na informação** - sem distrações visuais

## 🔧 **Personalizações Possíveis:**

### **Para Diferentes Idiomas:**

```
// Português
Olá Leo, você tem uma nova inscrição de {{from_name}}

// Inglês
Hello Leo, you have a new signup from {{from_name}}

// Espanhol
Hola Leo, tienes una nueva inscripción de {{from_name}}
```

### **Para Diferentes Tipos de Lead:**

```
// Lead Premium
🚀 LEAD PREMIUM - Alto Valor: {{from_name}}
Faixa: {{investment_range}}

// Lead Internacional
🌍 LEAD INTERNACIONAL: {{from_name}}
País: {{country}}
```

## 📞 **Próximos Passos:**

1. **Configure o template** no EmailJS
2. **Teste com dados fictícios**
3. **Configure as variáveis** no `.env.local`
4. **Teste o formulário real**

---

**🎯 Este template é mais simples e direto, seguindo o padrão que você mostrou!**
