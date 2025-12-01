const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Iniciando build com compressão de vídeos...");

// Verificar se FFmpeg está instalado
try {
  execSync("ffmpeg -version", { stdio: "ignore" });
  console.log("✅ FFmpeg encontrado");
} catch (error) {
  console.warn("⚠️  FFmpeg não encontrado. Instalando...");
  console.log("💡 Para instalar FFmpeg:");
  console.log("   Windows: choco install ffmpeg");
  console.log("   macOS: brew install ffmpeg");
  console.log("   Linux: sudo apt install ffmpeg");
  process.exit(1);
}

// Executar compressão
try {
  require("./compress-videos.js");
  console.log("✅ Vídeos comprimidos com sucesso");
} catch (error) {
  console.error("❌ Erro na compressão:", error.message);
  process.exit(1);
}

// Executar build do Next.js
try {
  console.log("🔨 Executando build do Next.js...");
  execSync("npm run build", { stdio: "inherit" });
  console.log("✅ Build concluído com sucesso!");
} catch (error) {
  console.error("❌ Erro no build:", error.message);
  process.exit(1);
}
