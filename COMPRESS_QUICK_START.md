# 🚀 Compressão Rápida - Terra Ventos

## ⚡ Setup Rápido

```bash
# 1. Configurar compressão (primeira vez)
npm run setup:compress

# 2. Comprimir vídeos
npm run compress

# 3. Build com compressão
npm run build:compress
```

## 📊 Resultado Esperado

- **Tamanho original**: ~150MB
- **Tamanho comprimido**: ~45MB
- **Redução**: 70% menor
- **Carregamento**: 3-5x mais rápido

## 🎯 Vídeos Suportados

- `video.mp4` → `video_compressed.mp4`
- `video2.MP4` → `video2_compressed.mp4`
- `video4.MP4` → `video4_compressed.mp4`

## 🔧 Comandos Úteis

```bash
# Comprimir apenas
npm run compress

# Build normal (sem compressão)
npm run build

# Build com compressão automática
npm run build:compress

# Verificar se FFmpeg está instalado
ffmpeg -version
```

## ⚠️ Problemas Comuns

### FFmpeg não encontrado

```bash
# Windows
choco install ffmpeg

# macOS
brew install ffmpeg

# Linux
sudo apt install ffmpeg
```

### Vídeo não carrega

1. Verificar se arquivo existe em `public/video/`
2. Executar `npm run compress`
3. Verificar console do navegador

## 📈 Performance

| Métrica      | Antes | Depois |
| ------------ | ----- | ------ |
| Tamanho      | 150MB | 45MB   |
| Carregamento | 30s   | 8s     |
| Banda        | Alto  | Baixo  |
| Qualidade    | 100%  | 85%    |

## 🎨 Personalização

Edite `scripts/compress-videos.js` para ajustar:

```javascript
// Qualidade (18-28, menor = melhor)
'-crf', '28',

// Resolução
'-vf', 'scale=1280:720',

// Bitrate
'-maxrate', '1000k',
```
