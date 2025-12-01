"use client";

import { useState, useEffect, useRef } from "react";

interface RandomVideoPlayerProps {
  className?: string;
}

export default function RandomVideoPlayer({ className = "" }: RandomVideoPlayerProps) {
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [videoList, setVideoList] = useState<string[]>([]);
  const [previousVideo, setPreviousVideo] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lista de vídeos disponíveis (sem .crdownload)
  const availableVideos = [
    "/video/video.mp4",
    "/video/video2.MP4", 
    "/video/video4.MP4"
  ];

  // Função para selecionar vídeo aleatório
  const getRandomVideo = () => {
    const filteredVideos = availableVideos.filter(video => video !== previousVideo);
    const randomIndex = Math.floor(Math.random() * filteredVideos.length);
    return filteredVideos[randomIndex];
  };

  // Carregar vídeo aleatório inicial
  useEffect(() => {
    const randomVideo = getRandomVideo();
    setCurrentVideo(randomVideo);
    setPreviousVideo(randomVideo);
  }, []);

  // Função para trocar vídeo quando terminar
  const handleVideoEnd = () => {
    const newVideo = getRandomVideo();
    setPreviousVideo(currentVideo);
    setCurrentVideo(newVideo);
  };

  // Função para compressão de vídeo (reduz qualidade para diminuir tamanho)
  const getCompressedVideoProps = () => {
    return {
      autoPlay: true,
      muted: true,
      loop: false,
      playsInline: true,
      preload: "metadata", // Carrega apenas metadados inicialmente
      onEnded: handleVideoEnd,
      style: {
        // Reduz qualidade visual para diminuir processamento
        filter: "brightness(0.9) contrast(1.1)",
        transform: "scale(1.02)", // Pequeno zoom para compensar compressão
      }
    };
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {currentVideo && (
        <video
          ref={videoRef}
          key={currentVideo} // Força re-render quando vídeo muda
          className="w-full h-full object-cover"
          {...getCompressedVideoProps()}
        >
          <source src={currentVideo} type="video/mp4" />
          {/* Fallback para compressão adicional */}
          <source 
            src={currentVideo.replace('.mp4', '_compressed.mp4')} 
            type="video/mp4" 
          />
        </video>
      )}
      
      {/* Indicador de carregamento */}
      {!currentVideo && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}
