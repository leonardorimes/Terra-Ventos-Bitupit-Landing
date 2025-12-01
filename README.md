# 🌬️ TerraVentos - Landing Page

Landing page moderna e responsiva para a **Comunidade TerraVentos**, uma plataforma de investimentos em energia eólica e turismo sustentável.

## ✨ Características

- 🚀 **Next.js 15** com App Router
- ⚡ **TypeScript** para segurança de tipos
- 🎨 **Tailwind CSS** para estilização
- 🎬 **Framer Motion** para animações fluidas
- 📱 **Design Responsivo** otimizado para todos os dispositivos
- 🌍 **Multi-idioma** (Português/Inglês)
- 📧 **EmailJS** para formulários de contato
- 🎥 **Vídeo Background** com YouTube embed otimizado
- 🖼️ **Compressão de Vídeos** com scripts automatizados
- ♿ **Acessibilidade** com padrões WCAG

## 🛠️ Tecnologias

### Core

- **Next.js** 15.5.3
- **React** 18
- **TypeScript** 5
- **Tailwind CSS** 3.4.1

### Bibliotecas

- **Framer Motion** 12.23.16 - Animações e transições
- **EmailJS Browser** 4.4.1 - Envio de emails

### Ferramentas de Desenvolvimento

- **ESLint** - Linting de código
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Compatibilidade de CSS

## 📦 Instalação

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta no [EmailJS](https://www.emailjs.com/) (para formulários de contato)

### Passos

1. **Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd landing-terraventos
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env.local` na raiz do projeto baseado no `EXEMPLO_CONFIGURACAO.env`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

> 📖 Consulte `GUIA_EMAILJS_PASSO_A_PASSO.md` para instruções detalhadas de configuração do EmailJS.

4. **Execute o servidor de desenvolvimento:**

```bash
npm run dev
```

5. **Acesse no navegador:**

Abra [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
landing-terraventos/
├── public/
│   ├── images/
│   │   ├── conections/      # Imagens de conexões/comunidade
│   │   └── ...
│   └── videos/              # Vídeos (comprimidos)
├── scripts/
│   ├── build-with-compression.js
│   ├── compress-videos.js
│   ├── setup-compression.js
│   └── test-videos.js
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx                 # Seção principal com vídeo
│   │   ├── Navbar.tsx               # Navegação responsiva
│   │   ├── ProblemSection.tsx       # Por que fazer parte
│   │   ├── SolutionSection.tsx      # Nossa missão
│   │   ├── FounderSection.tsx       # Fundador/equipe
│   │   ├── FAQSection.tsx           # Perguntas frequentes
│   │   ├── SignupSection.tsx        # Formulário de cadastro
│   │   ├── SignupModal.tsx          # Modal de cadastro
│   │   ├── Footer.tsx               # Rodapé
│   │   ├── WhatsAppButton.tsx       # Botão flutuante WhatsApp
│   │   ├── DynamicMeta.tsx          # Meta tags dinâmicas
│   │   ├── Logo.tsx                 # Logo da TerraVentos
│   │   ├── AnimatedSection.tsx      # Wrapper de animações
│   │   ├── AnimatedText.tsx         # Texto animado
│   │   ├── AnimatedCounter.tsx      # Contador animado
│   │   ├── AnimatedImage.tsx        # Imagem com animação
│   │   ├── LoadingScreen.tsx        # Tela de carregamento
│   │   ├── ResizeLoading.tsx        # Loading ao redimensionar
│   │   └── ...
│   ├── contexts/
│   │   └── LanguageContext.tsx      # Contexto de idiomas
│   ├── hooks/
│   │   └── useResizeLoading.tsx     # Hook de redimensionamento
│   └── lib/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## 🎨 Componentes Principais

### Seções da Landing Page

| Componente          | Descrição                          | Funcionalidade                                             |
| ------------------- | ---------------------------------- | ---------------------------------------------------------- |
| **Hero**            | Seção principal com vídeo de fundo | Vídeo do YouTube, CTAs principais, estatísticas flutuantes |
| **ProblemSection**  | Por que fazer parte                | Grid de benefícios com ícones animados                     |
| **SolutionSection** | Nossa missão                       | Carrossel de imagens de fundo, CTA para formulário         |
| **FounderSection**  | Fundador/Equipe                    | Apresentação do time e visão                               |
| **FAQSection**      | Perguntas Frequentes               | Accordion com perguntas e respostas                        |
| **SignupSection**   | Cadastro                           | Formulário completo com EmailJS                            |
| **Footer**          | Rodapé                             | Links, informações de contato                              |

### Componentes Utilitários

- **LoadingScreen**: Tela de carregamento inicial com animação
- **ResizeLoading**: Loading ao redimensionar a janela
- **WhatsAppButton**: Botão flutuante para contato via WhatsApp
- **DynamicMeta**: Meta tags para SEO
- **Logo**: Logo da TerraVentos com variações de tamanho e cor
- **AnimatedSection**: Wrapper para seções com animações de entrada

## 🎬 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia servidor de desenvolvimento

# Build & Deploy
npm run build            # Build para produção
npm run build:compress   # Build com compressão de vídeos
npm run start            # Inicia servidor de produção

# Utilitários
npm run lint             # Executa ESLint
npm run compress         # Comprime vídeos manualmente
npm run setup:compress   # Configura ferramentas de compressão
npm run test:videos      # Testa vídeos comprimidos
```

## 🎥 Compressão de Vídeos

O projeto inclui scripts para otimizar vídeos:

```bash
npm run setup:compress   # Instala FFmpeg (necessário apenas uma vez)
npm run compress         # Comprime todos os vídeos em /public/videos
npm run test:videos      # Verifica se os vídeos estão funcionando
```

> 📖 Consulte `VIDEO_COMPRESSION.md` e `COMPRESS_QUICK_START.md` para mais detalhes.

## 📧 Configuração do EmailJS

1. Crie uma conta em [EmailJS](https://www.emailjs.com/)
2. Crie um novo serviço de email
3. Crie um template de email
4. Configure as variáveis de ambiente no `.env.local`

Documentação completa:

- `GUIA_EMAILJS_PASSO_A_PASSO.md` - Guia passo a passo
- `EMAIL_SETUP_EMAILJS.md` - Configuração técnica
- `SIMPLE_TEMPLATE_SETUP.md` - Templates simples

## 🌍 Multi-idioma

O projeto suporta múltiplos idiomas através do `LanguageContext`:

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

function Component() {
  const { t, language, setLanguage } = useLanguage();

  return <h1>{t("hero.title")}</h1>;
}
```

Idiomas disponíveis:

- 🇧🇷 Português (padrão)
- 🇺🇸 Inglês

## 🎨 Paleta de Cores

```css
/* Cores Primárias */
--primary-500: #142431    /* Azul escuro */
--accent-500: #f0741a      /* Laranja */
--secondary-500: #6b7280   /* Cinza */

/* Fontes */
--font-breathing: "Breathing", sans-serif  /* Títulos */
--font-avenir: "Avenir", sans-serif        /* Corpo */
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub/GitLab/Bitbucket
2. Importe o projeto no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático!

### Outras Plataformas

- **Netlify**: Compatível com Next.js
- **AWS Amplify**: Suporte completo
- **Railway**: Deploy simples
- **DigitalOcean App Platform**: Suporte a Next.js

### Variáveis de Ambiente de Produção

Não esqueça de configurar:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## 📊 Performance

- ✅ Lazy loading de imagens
- ✅ Vídeos otimizados e comprimidos
- ✅ Code splitting automático (Next.js)
- ✅ Animações otimizadas com Framer Motion
- ✅ Loading states para melhor UX
- ✅ Responsive design otimizado

## 🐛 Troubleshooting

### Vídeo não carrega

- Verifique a conexão com YouTube
- Use o botão de reload no Hero
- Consulte `DIAGNOSTICO_ERRO_EMAILJS.md`

### Formulário não envia

- Verifique as variáveis de ambiente
- Confirme configuração do EmailJS
- Consulte logs no console
- Veja `TESTE_FINAL_EMAILJS.md`

### Erros de build

- Limpe cache: `rm -rf .next`
- Reinstale dependências: `rm -rf node_modules && npm install`
- Verifique versão do Node.js (18+)

## 📚 Documentação Adicional

O projeto inclui documentação detalhada em arquivos `.md`:

- `GUIA_EMAILJS_PASSO_A_PASSO.md` - Setup completo do EmailJS
- `VIDEO_COMPRESSION.md` - Compressão de vídeos
- `COMPRESS_QUICK_START.md` - Início rápido de compressão
- `SISTEMA_EMAIL_FUNCIONANDO.md` - Sistema de email
- `TEMPLATE_SETUP_INSTRUCTIONS.md` - Templates de email
- `DIAGNOSTICO_ERRO_EMAILJS.md` - Diagnóstico de erros
- `TESTE_FINAL_EMAILJS.md` - Testes finais

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é proprietário da **TerraVentos**. Todos os direitos reservados.

## 📞 Contato

**TerraVentos Community**

- Website: [em breve]
- Email: contato@terraventos.com.br
- WhatsApp: [número]

---

**Desenvolvido com 💚 para a Comunidade TerraVentos**

_Conectando investidores a oportunidades sustentáveis em energia eólica e turismo._
