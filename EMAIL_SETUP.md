# 📧 Configuração de Email - Terra Ventos

## Configuração Necessária

Para que os formulários enviem emails para `rimesleo@gmail.com`, você precisa configurar as seguintes variáveis de ambiente:

### 1. Criar arquivo `.env.local`

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
# Email Configuration
EMAIL_USER=rimesleo@gmail.com
EMAIL_PASS=your_app_password_here

# Next.js Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 2. Configurar App Password no Gmail

1. **Ative a verificação em 2 etapas** na sua conta Google:

   - Acesse: https://myaccount.google.com/security
   - Vá em "Verificação em duas etapas"
   - Ative se ainda não estiver ativado

2. **Gere uma senha de app**:

   - Acesse: https://myaccount.google.com/apppasswords
   - Selecione "Aplicativo" → "Outro (nome personalizado)"
   - Digite: "Terra Ventos Website"
   - Copie a senha gerada (16 caracteres)

3. **Configure no arquivo `.env.local`**:
   ```env
   EMAIL_PASS=abcd efgh ijkl mnop
   ```
   (Substitua pela senha real gerada)

### 3. Testar o Sistema

Após configurar:

1. **Inicie o servidor**:

   ```bash
   npm run dev
   ```

2. **Teste o formulário**:
   - Acesse: http://localhost:3001
   - Preencha o formulário de cadastro
   - Verifique se o email chega em `rimesleo@gmail.com`

## 📋 Informações Enviadas por Email

Cada formulário enviado incluirá:

- ✅ **Dados Pessoais**: Nome, Email, Telefone, País/Estado
- ✅ **Informações de Investimento**: Faixa de investimento, Interesse principal
- ✅ **Metadados**: Data/hora, IP, User Agent
- ✅ **Formatação**: Email HTML bem formatado + versão texto

## 🔧 Estrutura da API

- **Endpoint**: `/api/send-email`
- **Método**: POST
- **Dados**: JSON com informações do formulário
- **Resposta**: Status de sucesso/erro

## 🚨 Troubleshooting

### Erro: "Invalid login"

- Verifique se a senha de app está correta
- Confirme se a verificação em 2 etapas está ativada

### Erro: "Connection refused"

- Verifique se as variáveis de ambiente estão configuradas
- Reinicie o servidor após configurar o `.env.local`

### Email não chega

- Verifique a pasta de spam
- Confirme se `EMAIL_USER` está correto
- Verifique os logs do servidor no console

## 📞 Suporte

Se houver problemas, verifique:

1. Console do navegador (F12)
2. Terminal do servidor
3. Configurações do Gmail
4. Arquivo `.env.local`
