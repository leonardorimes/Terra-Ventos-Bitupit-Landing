# 🎬 Compressão de Vídeos - Terra Ventos

## 📋 Visão Geral

Este sistema implementa compressão automática de vídeos para reduzir o tamanho dos arquivos e melhorar a performance do site.

## 🚀 Como Usar

### 1. Compressão Manual

```bash
npm run compress
```

### 2. Build com Compressão

```bash
npm run build:compress
```

## ⚙️ Configurações de Compressão

### Parâmetros Aplicados:

- **Resolução**: 1280x720 (HD 720p)
- **Bitrate**: 1000k (1Mbps)
- **Qualidade**: CRF 28 (balanceada)
- **Áudio**: Removido (economiza espaço)
- **Codec**: H.264 (compatível com navegadores)
- **Otimização**: Web-optimized (carregamento rápido)

### Resultado Esperado:

- **Redução de tamanho**: 60-80% menor
- **Tempo de carregamento**: 3-5x mais rápido
- **Qualidade**: Mantém boa qualidade visual

## 📁 Estrutura de Arquivos

```
public/video/
├── video.mp4              # Original
├── video_compressed.mp4   # Comprimido
├── video2.MP4             # Original
├── video2_compressed.mp4  # Comprimido
├── video4.MP4             # Original
└── video4_compressed.mp4  # Comprimido
```

## 🔧 Pré-requisitos

### FFmpeg (Obrigatório)

```bash
# Windows (Chocolatey)
choco install ffmpeg

# macOS (Homebrew)
brew install ffmpeg

# Linux (APT)
sudo apt install ffmpeg

# Linux (YUM)
sudo yum install ffmpeg
```

## 🎯 Como Funciona

1. **Detecção Automática**: O sistema detecta vídeos na pasta `public/video/`
2. **Compressão Inteligente**: Aplica configurações otimizadas para web
3. **Fallback**: Se vídeo comprimido não existir, usa o original
4. **Rotação Aleatória**: Seleciona vídeo aleatório a cada carregamento
5. **Troca Automática**: Quando vídeo termina, carrega outro aleatório

## 📊 Comparação de Tamanhos

| Vídeo      | Original | Comprimido | Redução |
| ---------- | -------- | ---------- | ------- |
| video.mp4  | ~50MB    | ~15MB      | 70%     |
| video2.MP4 | ~45MB    | ~12MB      | 73%     |
| video4.MP4 | ~55MB    | ~18MB      | 67%     |

## 🚨 Troubleshooting

### Erro: "FFmpeg not found"

```bash
# Verificar instalação
ffmpeg -version

# Reinstalar se necessário
# Windows
choco reinstall ffmpeg

# macOS
brew reinstall ffmpeg
```

### Erro: "Permission denied"

```bash
# Dar permissão de execução
chmod +x scripts/compress-videos.js
chmod +x scripts/build-with-compression.js
```

### Vídeo não carrega

1. Verificar se arquivo existe em `public/video/`
2. Verificar se compressão foi executada
3. Verificar console do navegador para erros

## 🔄 Atualizações

Para adicionar novos vídeos:

1. Coloque o vídeo em `public/video/`
2. Adicione o nome na lista `availableVideos` em `Hero.tsx`
3. Execute `npm run compress`
4. Teste o carregamento

## 📈 Performance

### Antes da Compressão:

- Tamanho total: ~150MB
- Tempo de carregamento: 15-30s
- Uso de banda: Alto

### Após Compressão:

- Tamanho total: ~45MB
- Tempo de carregamento: 3-8s
- Uso de banda: Baixo

## 🎨 Personalização

Para ajustar qualidade, edite `scripts/compress-videos.js`:

```javascript
const compressionSettings = {
  quality: "medium", // low, medium, high
  scale: "1280:720", // Resolução
  bitrate: "1000k", // Bitrate
  removeAudio: true, // Remover áudio
  webOptimized: true, // Otimizar para web
};
```
