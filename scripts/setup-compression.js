const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🔧 Configurando sistema de compressão de vídeos...");

// Verificar se estamos no Windows
const isWindows = process.platform === "win32";

// Função para verificar se comando existe
function commandExists(command) {
  try {
    execSync(`${command} --version`, { stdio: "ignore" });
    return true;
  } catch (error) {
    return false;
  }
}

// Função para instalar FFmpeg
function installFFmpeg() {
  console.log("📦 Instalando FFmpeg...");

  try {
    if (isWindows) {
      // Windows - Chocolatey
      if (commandExists("choco")) {
        execSync("choco install ffmpeg -y", { stdio: "inherit" });
      } else {
        console.log("❌ Chocolatey não encontrado. Instale manualmente:");
        console.log("   1. Instale Chocolatey: https://chocolatey.org/install");
        console.log("   2. Execute: choco install ffmpeg");
        return false;
      }
    } else {
      // macOS/Linux - Homebrew
      if (commandExists("brew")) {
        execSync("brew install ffmpeg", { stdio: "inherit" });
      } else {
        console.log("❌ Homebrew não encontrado. Instale manualmente:");
        console.log(
          '   macOS: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'
        );
        console.log("   Linux: https://brew.sh/");
        return false;
      }
    }

    console.log("✅ FFmpeg instalado com sucesso!");
    return true;
  } catch (error) {
    console.error("❌ Erro ao instalar FFmpeg:", error.message);
    return false;
  }
}

// Função principal
async function setup() {
  console.log("🚀 Iniciando configuração...");

  // Verificar se FFmpeg já está instalado
  if (commandExists("ffmpeg")) {
    console.log("✅ FFmpeg já está instalado");
    return;
  }

  // Tentar instalar FFmpeg
  const installed = installFFmpeg();

  if (installed) {
    console.log("🎉 Configuração concluída!");
    console.log("💡 Agora você pode usar:");
    console.log("   npm run compress      # Comprimir vídeos");
    console.log("   npm run build:compress # Build com compressão");
  } else {
    console.log("⚠️  Instalação automática falhou.");
    console.log("📋 Instruções manuais:");
    console.log("   Windows: choco install ffmpeg");
    console.log("   macOS: brew install ffmpeg");
    console.log("   Linux: sudo apt install ffmpeg");
  }
}

// Executar setup
setup().catch(console.error);
