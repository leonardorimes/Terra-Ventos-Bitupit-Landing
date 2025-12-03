"use client";

import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

export default function VimeoVideoSection() {
  useEffect(() => {
    // Carrega o script do Vimeo Player se ainda não estiver carregado
    if (typeof window !== "undefined") {
      const existingScript = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);
        console.log("Vimeo Player script carregado");
      }
    }
  }, []);

  return (
    <AnimatedSection className="w-full py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8" style={{ backgroundColor: '#F9F6F1' }}>
      <div className="max-w-6xl mx-auto w-full">
        <div
          className="relative w-full"
          style={{
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://player.vimeo.com/video/1142706851?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-0 left-0 w-full h-full"
            title="1202"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}

