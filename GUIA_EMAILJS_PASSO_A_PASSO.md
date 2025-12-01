# 📧 Guia Completo - Onde Encontrar as Informações no EmailJS

## 🎯 **Informações que você precisa:**

1. **Service ID** (ID do Serviço)
2. **Template ID** (ID do Template)
3. **Public Key** (Chave Pública)

---

## 📋 **PASSO A PASSO:**

### **1. SERVICE ID (ID do Serviço)**

#### **Onde encontrar:**

1. Acesse: https://dashboard.emailjs.com/
2. Faça login na sua conta
3. No menu lateral, clique em **"Email Services"**
4. Você verá uma lista dos seus serviços
5. **Clique no serviço** (provavelmente "Gmail" ou similar)
6. Na página do serviço, você verá:
   ```
   Service ID: service_xxxxxxxxx
   ```
   **Copie este ID!**

#### **Se você ainda não tem um serviço:**

1. Clique em **"Add New Service"**
2. Escolha **"Gmail"**
3. Conecte sua conta Gmail (`rimesleo@gmail.com`)
4. Após conectar, você verá o Service ID

---

### **2. TEMPLATE ID (ID do Template)**

#### **Onde encontrar:**

1. No menu lateral, clique em **"Email Templates"**
2. Você verá uma lista dos seus templates
3. **Clique no template** que você criou
4. Na página do template, você verá:
   ```
   Template ID: template_xxxxxxxxx
   ```
   **Copie este ID!**

#### **Se você ainda não criou um template:**

1. Clique em **"Create New Template"**
2. Escolha **"Blank Template"**
3. Configure o template (copie o conteúdo do `email-template-simple.html`)
4. Clique em **"Save"**
5. Após salvar, você verá o Template ID

---

### **3. PUBLIC KEY (Chave Pública)**

#### **Onde encontrar:**

1. No menu lateral, clique em **"Account"**
2. Na página da conta, procure por **"API Keys"** ou **"Public Key"**
3. Você verá algo como:
   ```
   Public Key: user_xxxxxxxxxxxxxxxxx
   ```
   **Copie esta chave!**

#### **Alternativa:**

- Às vezes aparece na parte superior do dashboard
- Procure por um campo chamado **"Public Key"** ou **"User ID"**

---

## 🔧 **Configuração no Projeto:**

### **Criar arquivo `.env.local`:**

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123def456
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789abc
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_123456789abcdef
```

### **Exemplo com dados reais:**

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_terravventos
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abcdef123456789
```

---

## 📱 **Visualização das Telas:**

### **Dashboard Principal:**

```
┌─────────────────────────────────────┐
│ EmailJS Dashboard                   │
├─────────────────────────────────────┤
│ 📧 Email Services    [2 services]   │
│ 📝 Email Templates   [1 template]   │
│ ⚙️  Account          [Settings]     │
│ 📊 Analytics         [Reports]      │
└─────────────────────────────────────┘
```

### **Página Email Services:**

```
┌─────────────────────────────────────┐
│ Email Services                      │
├─────────────────────────────────────┤
│ Gmail Service                       │
│ Service ID: service_gmail123        │
│ Status: ✅ Active                   │
│ [Edit] [Delete]                     │
└─────────────────────────────────────┘
```

### **Página Email Templates:**

```
┌─────────────────────────────────────┐
│ Email Templates                     │
├─────────────────────────────────────┤
│ Terra Ventos Template               │
│ Template ID: template_terravventos  │
│ Status: ✅ Published                │
│ [Edit] [Delete] [Preview]           │
└─────────────────────────────────────┘
```

### **Página Account:**

```
┌─────────────────────────────────────┐
│ Account Settings                    │
├─────────────────────────────────────┤
│ Public Key: user_abcdef123456789    │
│ Email: rimesleo@gmail.com           │
│ Plan: Free (200 emails/month)       │
└─────────────────────────────────────┘
```

---

## 🚨 **Possíveis Problemas:**

### **"Service not found":**

- Verifique se o Service ID está correto
- Confirme se o serviço está ativo
- Re-crie o serviço se necessário

### **"Template not found":**

- Verifique se o Template ID está correto
- Confirme se o template está publicado
- Re-crie o template se necessário

### **"Invalid public key":**

- Verifique se a Public Key está correta
- Confirme se não há espaços extras
- Re-copie da página Account

---

## ✅ **Checklist Final:**

- [ ] Service ID copiado e configurado
- [ ] Template ID copiado e configurado
- [ ] Public Key copiada e configurada
- [ ] Arquivo `.env.local` criado
- [ ] Servidor reiniciado (`npm run dev`)
- [ ] Formulário testado

---

## 🎯 **Links Úteis:**

- **Dashboard:** https://dashboard.emailjs.com/
- **Email Services:** https://dashboard.emailjs.com/admin/integration
- **Email Templates:** https://dashboard.emailjs.com/admin/templates
- **Account:** https://dashboard.emailjs.com/admin/account
- **Documentação:** https://www.emailjs.com/docs/

---

**🎯 Agora você sabe exatamente onde encontrar cada informação no EmailJS!**
