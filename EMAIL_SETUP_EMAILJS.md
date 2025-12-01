# 📧 Configuração de Email - Terra Ventos (EmailJS)

## 🎯 **Muito Mais Simples!**

Agora usamos **EmailJS** - sem necessidade de API routes, sem configuração de servidor, sem senhas de app do Gmail!

## 📋 **Passo a Passo:**

### 1. **Criar Conta no EmailJS**

1. Acesse: https://www.emailjs.com/
2. Crie uma conta gratuita
3. Confirme seu email

### 2. **Configurar Serviço de Email**

1. Vá em **"Email Services"** no dashboard
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"**
4. Conecte sua conta Gmail (rimesleo@gmail.com)
5. **Copie o Service ID** (ex: `service_abc123`)

### 3. **Criar Template de Email**

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

```html
Subject: Nova Inscrição - Terra Ventos - {{from_name}} Olá! Você recebeu uma
nova inscrição através do site Terra Ventos: DADOS PESSOAIS: - Nome:
{{from_name}} - Email: {{from_email}} - Telefone: {{phone}} - País/Estado:
{{country}} INFORMAÇÕES DE INVESTIMENTO: - Faixa de Investimento:
{{investment_range}} - Interesse Principal: {{main_interest}} {{message}} ---
Este email foi enviado automaticamente através do formulário de inscrição da
Terra Ventos.
```

4. **Salve e copie o Template ID** (ex: `template_xyz789`)

### 4. **Obter Public Key**

1. Vá em **"Account"** no dashboard EmailJS
2. **Copie sua "Public Key"** (ex: `user_abc123def456`)

### 5. **Configurar Variáveis de Ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
```

## 🚀 **Vantagens do EmailJS:**

- ✅ **Sem servidor** - funciona direto do frontend
- ✅ **Sem API routes** - não precisa configurar backend
- ✅ **Sem senhas de app** - autenticação automática
- ✅ **Gratuito** - 200 emails/mês gratuitos
- ✅ **Fácil configuração** - interface visual
- ✅ **Templates personalizáveis** - HTML/CSS
- ✅ **Analytics** - dashboard com estatísticas

## 🧪 **Testar o Sistema:**

1. **Configure as variáveis** no `.env.local`
2. **Reinicie o servidor**: `npm run dev`
3. **Acesse**: http://localhost:3001
4. **Preencha o formulário**
5. **Verifique** se o email chega em `rimesleo@gmail.com`

## 📊 **Limites Gratuitos:**

- **200 emails/mês** gratuitos
- **Rate limit**: 200 emails/hora
- **Templates**: ilimitados
- **Serviços**: 1 Gmail conectado

## 🔧 **Troubleshooting:**

### Email não chega:

- Verifique se as variáveis estão corretas
- Confirme se o template está salvo
- Verifique a pasta de spam

### Erro "Service not found":

- Confirme se o Service ID está correto
- Verifique se o serviço está ativo

### Erro "Template not found":

- Confirme se o Template ID está correto
- Verifique se o template está publicado

## 📞 **Suporte:**

- **Documentação**: https://www.emailjs.com/docs/
- **Dashboard**: https://dashboard.emailjs.com/
- **Status**: https://status.emailjs.com/
