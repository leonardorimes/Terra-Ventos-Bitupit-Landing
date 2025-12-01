# 🔍 Como Capturar os Logs de Debug

## 📋 **Passo a Passo:**

### **1. Abrir o Console do Navegador:**

- Pressione **F12** (ou Ctrl+Shift+I)
- Clique na aba **"Console"**
- Limpe o console (clique no ícone de lixeira 🗑️)

### **2. Testar o Formulário:**

- Preencha o formulário com dados de teste
- Clique em "Enviar"
- **IMEDIATAMENTE** copie todos os logs que aparecem

### **3. Logs que devem aparecer:**

```
🔧 Configurações EmailJS:
📧 Service ID: gmailMessage
📝 Template ID: template_4m13d9p
🔑 Public Key: ✅ Configurada
📤 Enviando email...
📧 Para: rimesleo@gmail.com
👤 De: [Nome do usuário]
❌ Erro ao enviar formulário: [DETALHES DO ERRO]
❌ Service ID: gmailMessage
❌ Template ID: template_4m13d9p
❌ Public Key: qBifyS-ncgTggC0Co
❌ Template Params: [objeto com os dados]
❌ Error message: [MENSAGEM ESPECÍFICA DO ERRO]
❌ Error stack: [STACK TRACE COMPLETO]
```

---

## 🎯 **O que preciso que você me envie:**

### **Copie e cole TODOS os logs que aparecem no console, especialmente:**

1. **A mensagem de erro completa** (linha que começa com "❌ Erro ao enviar formulário:")
2. **A mensagem específica do erro** (linha que começa com "❌ Error message:")
3. **O stack trace** (linha que começa com "❌ Error stack:")

### **Exemplo do que espero receber:**

```
❌ Erro ao enviar formulário: Error: Failed to send email
❌ Error message: Template not found: template_4m13d9p
❌ Error stack: Error: Template not found: template_4m13d9p
    at emailjs.send (emailjs.js:123:45)
    at handleSubmit (SignupForm.tsx:100:15)
```

---

## 🔧 **Possíveis Problemas Comuns:**

### **1. Template não encontrado:**

```
❌ Error message: Template not found: template_4m13d9p
```

**Solução:** Verificar se o template está publicado no EmailJS

### **2. Service não encontrado:**

```
❌ Error message: Service not found: gmailMessage
```

**Solução:** Verificar se o serviço Gmail está ativo

### **3. Public Key inválida:**

```
❌ Error message: Invalid public key
```

**Solução:** Verificar se a chave está correta

### **4. Problema de CORS:**

```
❌ Error message: CORS policy error
```

**Solução:** Verificar configurações do EmailJS

---

## 📱 **Dados para Teste:**

Use estes dados para testar:

- **Nome:** João Silva
- **Email:** joao@teste.com
- **WhatsApp:** +55 11 99999-9999
- **País/Estado:** Brasil - São Paulo
- **Faixa de Investimento:** R$ 100.000 - R$ 500.000
- **Interesse Principal:** Imóveis

---

**🎯 Agora teste o formulário e me envie TODOS os logs que aparecem no console!**
