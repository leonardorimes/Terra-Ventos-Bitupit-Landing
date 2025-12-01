const fs = require("fs");
const path = require("path");

// Configurações de compressão
const compressionSettings = {
  // Reduz qualidade para diminuir tamanho
  quality: "medium", // low, medium, high
  // Reduz resolução
  scale: "1280:720", // HD 720p
  // Reduz bitrate
  bitrate: "1000k", // 1Mbps
  // Remove áudio (economiza espaço)
  removeAudio: true,
  // Otimiza para web
  webOptimized: true,
};

// Lista de vídeos para comprimir
const videoFiles = ["video.mp4", "video2.MP4", "video4.MP4"];

// Função para comprimir vídeo usando FFmpeg
function compressVideo(inputPath, outputPath) {
  const { spawn } = require("child_process");

  const ffmpegArgs = [
    "-i",
    inputPath,
    "-c:v",
    "libx264", // Codec H.264
    "-preset",
    "fast", // Preset rápido
    "-crf",
    "28", // Qualidade (18-28, maior = menor qualidade)
    "-maxrate",
    "1000k", // Bitrate máximo
    "-bufsize",
    "2000k", // Buffer size
    "-vf",
    "scale=1280:720", // Reduz resolução
    "-an", // Remove áudio
    "-movflags",
    "+faststart", // Otimiza para web
    "-y", // Sobrescreve arquivo existente
    outputPath,
  ];

  return new Promise((resolve, reject) => {
    const ffmpeg = spawn("ffmpeg", ffmpegArgs);

    ffmpeg.on("close", (code) => {
      if (code === 0) {
        console.log(`✅ Vídeo comprimido: ${outputPath}`);
        resolve();
      } else {
        console.error(`❌ Erro ao comprimir: ${inputPath}`);
        reject(new Error(`FFmpeg exited with code ${code}`));
      }
    });

    ffmpeg.on("error", (err) => {
      console.error(`❌ Erro FFmpeg: ${err.message}`);
      reject(err);
    });
  });
}

// Função principal
async function compressAllVideos() {
  console.log("🎬 Iniciando compressão de vídeos...");

  const videoDir = path.join(__dirname, "../public/video");

  for (const videoFile of videoFiles) {
    const inputPath = path.join(videoDir, videoFile);
    const outputPath = path.join(
      videoDir,
      videoFile.replace(/\.[^/.]+$/, "_compressed.mp4")
    );

    if (fs.existsSync(inputPath)) {
      try {
        await compressVideo(inputPath, outputPath);
      } catch (error) {
        console.error(`❌ Falha ao comprimir ${videoFile}:`, error.message);
      }
    } else {
      console.warn(`⚠️  Arquivo não encontrado: ${inputPath}`);
    }
  }

  console.log("✅ Compressão concluída!");
}

// Executar se chamado diretamente
if (require.main === module) {
  compressAllVideos().catch(console.error);
}

module.exports = { compressAllVideos, compressionSettings };
