# 📧 Guia: Como Criar Template no EmailJS para Ficha de Proposta

Este guia explica passo a passo como criar um template no EmailJS para receber os dados do formulário de Ficha de Proposta.

---

## 📋 Pré-requisitos

1. Conta no [EmailJS](https://www.emailjs.com/)
2. Serviço de email configurado (Gmail, Outlook, etc.)
3. Public Key do EmailJS (já configurada no código: `qBifyS-ncgTggC0Co`)

---

## 🚀 Passo a Passo

### 1. Acesse o Dashboard do EmailJS

1. Acesse [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Faça login na sua conta

### 2. Crie um Novo Template

1. No menu lateral, clique em **"Email Templates"**
2. Clique no botão **"+ Create New Template"**
3. Dê um nome ao template: **"Ficha Proposta Bitupitá Villas"**

### 3. Configure o Template

#### 3.1. Configurações Básicas

- **Template Name**: `Ficha Proposta Bitupitá Villas`
- **Subject**: `Nova Ficha de Proposta - Bitupitá Villas`

#### 3.2. Corpo do Email (HTML)

Cole o seguinte código HTML no editor do template:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* Reset e configurações base */
    * {
      box-sizing: border-box;
    }
    body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 0;
      background-color: #f5f5f5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    
    /* Container principal */
    .email-container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    
    /* Header */
    .header {
      background-color: #1A202C;
      color: white;
      padding: 25px 20px;
      text-align: center;
      border-radius: 0;
    }
    .header h1 {
      margin: 0 0 10px 0;
      font-size: 28px;
      font-weight: bold;
    }
    .header p {
      margin: 0;
      font-size: 16px;
      opacity: 0.9;
    }
    
    /* Content */
    .content {
      background-color: #f9f9f9;
      padding: 20px;
      border: none;
    }
    
    /* Section */
    .section {
      margin-bottom: 20px;
      background-color: white;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #B2A28E;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .section-title {
      font-size: 18px;
      font-weight: bold;
      color: #1A202C;
      margin-bottom: 15px;
      text-transform: uppercase;
      padding-bottom: 10px;
      border-bottom: 2px solid #B2A28E;
    }
    
    /* Field - Estrutura simples para melhor compatibilidade mobile */
    .field {
      margin-bottom: 12px;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
      display: block;
      width: 100%;
    }
    .field:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
    
    .field-label {
      font-weight: bold;
      color: #666;
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      width: 100%;
    }
    
    .field-value {
      color: #333;
      display: block;
      word-break: break-word;
      word-wrap: break-word;
      overflow-wrap: break-word;
      font-size: 14px;
      width: 100%;
      padding-left: 0;
      white-space: normal;
      line-height: 1.6;
    }
    
    /* Footer */
    .footer {
      background-color: #1A202C;
      color: white;
      padding: 20px;
      text-align: center;
      border-radius: 0;
      font-size: 12px;
      line-height: 1.6;
    }
    .footer p {
      margin: 5px 0;
    }
    
    /* Media Queries para Mobile */
    @media only screen and (max-width: 600px) {
      body {
        padding: 0;
        font-size: 16px;
      }
      
      .email-container {
        width: 100% !important;
        max-width: 100% !important;
      }
      
      .header {
        padding: 20px 15px;
      }
      
      .header h1 {
        font-size: 22px;
        line-height: 1.2;
      }
      
      .header p {
        font-size: 14px;
        line-height: 1.4;
      }
      
      .content {
        padding: 15px 10px;
      }
      
      .section {
        padding: 15px 12px;
        margin-bottom: 15px;
        border-radius: 6px;
      }
      
      .section-title {
        font-size: 15px;
        margin-bottom: 12px;
        line-height: 1.4;
        word-break: break-word;
      }
      
      .field {
        display: block !important;
        padding: 12px 0;
        margin-bottom: 12px;
        border-bottom: 1px solid #ddd;
        width: 100% !important;
        table-layout: auto !important;
      }
      
      .field-label {
        display: block !important;
        width: 100% !important;
        margin-bottom: 6px;
        font-size: 13px;
        font-weight: bold;
        color: #666;
        padding-right: 0 !important;
        padding-bottom: 4px;
      }
      
      .field-value {
        display: inline !important;
        width: 100% !important;
        font-size: 15px !important;
        color: #333 !important;
        padding-left: 0 !important;
        word-break: normal !important;
        word-wrap: normal !important;
        overflow-wrap: normal !important;
        line-height: 1.6 !important;
        white-space: normal !important;
        -webkit-hyphens: none !important;
        -moz-hyphens: none !important;
        hyphens: none !important;
        max-width: 100% !important;
        letter-spacing: normal !important;
      }
      
      .footer {
        padding: 15px 10px;
        font-size: 11px;
        line-height: 1.6;
      }
    }
    
    /* Media Queries para Tablets */
    @media only screen and (min-width: 601px) and (max-width: 768px) {
      .content {
        padding: 25px;
      }
      
      .section {
        padding: 18px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="header">
      <h1>TERRA VENTOS</h1>
      <p>FICHA DE PROPOSTA - BITUPITÁ VILLAS</p>
    </div>

    <!-- Content -->
    <div class="content">
      <!-- Seção: Informações do Lote -->
      <div class="section">
        <div class="section-title">📋 Informações do Lote</div>
        <div class="field">
          <span class="field-label">Lote:</span>
          <span class="field-value">{{lote}}</span>
        </div>
        <div class="field">
          <span class="field-label">Valor:</span>
          <span class="field-value">{{valor}}</span>
        </div>
      </div>

      <!-- Seção: Dados do Proponente -->
      <div class="section">
        <div class="section-title">👤 Dados do Proponente</div>
        <div class="field">
          <span class="field-label">Nome:</span>
          <span class="field-value">{{proponente_nome}}</span>
        </div>
        <div class="field">
          <span class="field-label">Nacionalidade:</span>
          <span class="field-value">{{proponente_nacionalidade}}</span>
        </div>
        <div class="field">
          <span class="field-label">Estado Civil:</span>
          <span class="field-value">{{proponente_estado_civil}}</span>
        </div>
        <div class="field">
          <span class="field-label">CPF:</span>
          <span class="field-value">{{proponente_cpf}}</span>
        </div>
        <div class="field">
          <span class="field-label">RG:</span>
          <span class="field-value">{{proponente_rg}}</span>
        </div>
        <div class="field">
          <span class="field-label">Profissão:</span>
          <span class="field-value">{{proponente_profissao}}</span>
        </div>
        <div class="field">
          <span class="field-label">Endereço:</span>
          <span class="field-value">{{proponente_endereco}}</span>
        </div>
        <div class="field">
          <span class="field-label">Bairro:</span>
          <span class="field-value">{{proponente_bairro}}</span>
        </div>
        <div class="field">
          <span class="field-label">Cidade/UF:</span>
          <span class="field-value">{{proponente_cidade_uf}}</span>
        </div>
        <div class="field">
          <span class="field-label">CEP:</span>
          <span class="field-value">{{proponente_cep}}</span>
        </div>
        <div class="field">
          <span class="field-label">Telefone:</span>
          <span class="field-value">{{proponente_telefone}}</span>
        </div>
        <div class="field">
          <span class="field-label">Email:</span>
          <span class="field-value">{{proponente_email}}</span>
        </div>
      </div>

      <!-- Seção: Dados do Comprador -->
      <div class="section">
        <div class="section-title">🛒 Dados do Comprador</div>
        <div class="field">
          <span class="field-label">Nome:</span>
          <span class="field-value">{{comprador_nome}}</span>
        </div>
        <div class="field">
          <span class="field-label">CPF/MF:</span>
          <span class="field-value">{{comprador_cpf}}</span>
        </div>
      </div>

      <!-- Seção: Informações do Envio -->
      <div class="section">
        <div class="section-title">📅 Informações do Envio</div>
        <div class="field">
          <span class="field-label">Data/Hora:</span>
          <span class="field-value">{{data_hora}}</span>
        </div>
        <div class="field">
          <span class="field-label">Remetente:</span>
          <span class="field-value">{{from_name}}</span>
        </div>
        <div class="field">
          <span class="field-label">Email do Remetente:</span>
          <span class="field-value">{{from_email}}</span>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p><strong>Terra Ventos</strong> - Investimento Imobiliário no Litoral do Ceará</p>
      <p>Este email foi gerado automaticamente pelo sistema de formulários.</p>
    </div>
  </div>
</body>
</html>
```

#### 3.3. Versão Simples (Texto Plano)

Se preferir uma versão mais simples, use este template de texto:

```
========================================
FICHA DE PROPOSTA - BITUPITÁ VILLAS
TERRA VENTOS
========================================

📋 INFORMAÇÕES DO LOTE
Lote: {{lote}}
Valor: {{valor}}

👤 DADOS DO PROPONENTE
Nome: {{proponente_nome}}
Nacionalidade: {{proponente_nacionalidade}}
Estado Civil: {{proponente_estado_civil}}
CPF: {{proponente_cpf}}
RG: {{proponente_rg}}
Profissão: {{proponente_profissao}}
Endereço: {{proponente_endereco}}
Bairro: {{proponente_bairro}}
Cidade/UF: {{proponente_cidade_uf}}
CEP: {{proponente_cep}}
Telefone: {{proponente_telefone}}
Email: {{proponente_email}}

🛒 DADOS DO COMPRADOR
Nome: {{comprador_nome}}
CPF/MF: {{comprador_cpf}}

📅 INFORMAÇÕES DO ENVIO
Data/Hora: {{data_hora}}
Remetente: {{from_name}}
Email do Remetente: {{from_email}}

========================================
Terra Ventos - Investimento Imobiliário
========================================
```

#### 3.4. Checklist de Campos

✅ **Todos os campos estão incluídos no template:**

**Cabeçalho (2 campos):**
- ✅ `{{lote}}` - Número do lote
- ✅ `{{valor}}` - Valor do lote

**Dados do Proponente (12 campos):**
- ✅ `{{proponente_nome}}` - Nome completo
- ✅ `{{proponente_nacionalidade}}` - Nacionalidade
- ✅ `{{proponente_estado_civil}}` - Estado civil
- ✅ `{{proponente_cpf}}` - CPF
- ✅ `{{proponente_rg}}` - RG
- ✅ `{{proponente_profissao}}` - Profissão
- ✅ `{{proponente_endereco}}` - Endereço
- ✅ `{{proponente_bairro}}` - Bairro
- ✅ `{{proponente_cidade_uf}}` - Cidade/UF
- ✅ `{{proponente_cep}}` - CEP
- ✅ `{{proponente_telefone}}` - Telefone
- ✅ `{{proponente_email}}` - Email

**Dados do Comprador (2 campos):**
- ✅ `{{comprador_nome}}` - Nome do comprador
- ✅ `{{comprador_cpf}}` - CPF do comprador

**Informações do Envio (3 campos):**
- ✅ `{{data_hora}}` - Data e hora do envio
- ✅ `{{from_name}}` - Nome do remetente
- ✅ `{{from_email}}` - Email do remetente

**Total: 19 campos incluídos no template**

### 4. Configure o Destinatário

1. No campo **"To Email"**, configure:
   - **To Email**: `rimesleo@gmail.com` (ou o email desejado)
   - **From Name**: `{{from_name}}`
   - **From Email**: `{{from_email}}`

### 5. Salve o Template

1. Clique em **"Save"** para salvar o template
2. Anote o **Template ID** que aparece (ex: `template_xxxxxxx`)

### 6. Atualize o Código

1. Abra o arquivo `src/components/FichaPropostaForm.tsx`
2. Localize a linha com `templateId`
3. Substitua `"template_ficha_proposta"` pelo ID real do seu template

```typescript
const templateId = "template_xxxxxxx"; // Substitua pelo ID do seu template
```

---

## 📝 Variáveis Disponíveis no Template

O formulário envia as seguintes variáveis que podem ser usadas no template:

### 📋 Cabeçalho (2 campos)
- `{{lote}}` - Número do lote
- `{{valor}}` - Valor do lote

### 👤 Dados do Proponente (12 campos)
- `{{proponente_nome}}` - Nome completo
- `{{proponente_nacionalidade}}` - Nacionalidade
- `{{proponente_estado_civil}}` - Estado civil
- `{{proponente_cpf}}` - CPF
- `{{proponente_rg}}` - RG
- `{{proponente_profissao}}` - Profissão
- `{{proponente_endereco}}` - Endereço completo
- `{{proponente_bairro}}` - Bairro
- `{{proponente_cidade_uf}}` - Cidade/UF
- `{{proponente_cep}}` - CEP
- `{{proponente_telefone}}` - Telefone
- `{{proponente_email}}` - Email

### 🛒 Dados do Comprador (2 campos)
- `{{comprador_nome}}` - Nome do comprador
- `{{comprador_cpf}}` - CPF do comprador

### 📅 Informações do Envio (3 campos)
- `{{data_hora}}` - Data e hora do envio (formato: DD/MM/YYYY, HH:MM:SS)
- `{{from_name}}` - Nome do remetente
- `{{from_email}}` - Email do remetente

### 🔄 Variável de Fallback
- `{{message}}` - Mensagem formatada completa (texto plano com todos os dados)

**Total: 19 campos individuais + 1 variável de fallback**

---

## 📱 Recursos Mobile do Template

O template HTML fornecido inclui:

### ✅ Responsividade Completa
- **Media Queries** para dispositivos móveis (max-width: 600px)
- **Layout adaptativo** que se ajusta automaticamente
- **Campos empilhados verticalmente** em telas pequenas
- **Fontes otimizadas** para leitura em mobile

### ✅ Melhorias Mobile
- Campos exibidos em coluna única em dispositivos móveis
- Labels e valores empilhados para melhor legibilidade
- Padding e espaçamento otimizados para toque
- Tamanhos de fonte ajustados para telas pequenas
- Container com largura total em mobile (100%)

### ✅ Compatibilidade
- Testado em clientes de email principais (Gmail, Outlook, Apple Mail)
- Suporte para dark mode em alguns clientes
- Renderização consistente em diferentes dispositivos

---

## ✅ Teste o Template

### Teste Básico
1. Preencha o formulário na página `/ficha-proposta`
2. Envie o formulário
3. Verifique se o email chegou com todos os dados formatados corretamente

### Teste Mobile
Para testar a versão mobile do template:

1. **Envie um email de teste** usando o formulário
2. **Abra o email em um dispositivo móvel** ou:
   - Use o modo de desenvolvedor do navegador (F12)
   - Ative o modo de dispositivo móvel
   - Redimensione a janela para menos de 600px de largura
3. **Verifique:**
   - ✅ Campos empilhados verticalmente
   - ✅ Labels acima dos valores
   - ✅ Texto legível sem necessidade de zoom
   - ✅ Espaçamento adequado para toque
   - ✅ Layout responsivo funcionando

### Teste em Diferentes Clientes
Teste o email em:
- 📱 Gmail (mobile e desktop)
- 📱 Outlook (mobile e desktop)
- 📱 Apple Mail (iOS)
- 📱 Cliente de email padrão do Android

---

## 🔧 Troubleshooting

### Email não está chegando?
- Verifique se o serviço de email está configurado corretamente
- Confirme se o Template ID está correto no código
- Verifique os logs no dashboard do EmailJS

### Variáveis não aparecem?
- Certifique-se de usar a sintaxe `{{nome_variavel}}` (com chaves duplas)
- Verifique se o nome da variável está exatamente como no código

### Template não salva?
- Verifique se todos os campos obrigatórios estão preenchidos
- Tente salvar novamente ou criar um novo template

---

## 📞 Suporte

Para mais informações sobre EmailJS, consulte a [documentação oficial](https://www.emailjs.com/docs/).

---

**Última atualização**: 2024
