const fs = require("fs");
const path = require("path");

console.log("🎬 Testando vídeos disponíveis...");

const videoDir = path.join(__dirname, "../public/video");
const videoFiles = ["video2.MP4", "video3.MP4", "video4.MP4"];

console.log("\n📁 Verificando arquivos:");
videoFiles.forEach((videoFile) => {
  const filePath = path.join(videoDir, videoFile);
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;

  console.log(
    `  ${exists ? "✅" : "❌"} ${videoFile}: ${
      exists ? `${(size / 1024 / 1024).toFixed(1)}MB` : "Não encontrado"
    }`
  );
});

console.log("\n🌐 URLs de teste:");
videoFiles.forEach((videoFile) => {
  console.log(`  http://localhost:3000/video/${videoFile}`);
});

console.log("\n💡 Para testar manualmente:");
console.log("  1. Abra o console do navegador");
console.log("  2. Verifique se há erros de carregamento");
console.log("  3. Teste as URLs diretamente no navegador");
