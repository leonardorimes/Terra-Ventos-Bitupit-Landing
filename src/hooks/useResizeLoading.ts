import { useState, useEffect } from "react";

interface ResizeLoadingOptions {
  threshold: number; // Porcentagem de mudança para triggerar loading
  duration: number; // Duração mínima do loading em ms
}

export function useResizeLoading(
  options: ResizeLoadingOptions = { threshold: 20, duration: 1000 }
) {
  const [isResizeLoading, setIsResizeLoading] = useState(false);
  const [lastSize, setLastSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;

      // Se é a primeira vez, apenas salva o tamanho
      if (lastSize.width === 0 && lastSize.height === 0) {
        setLastSize({ width: currentWidth, height: currentHeight });
        return;
      }

      // Calcula a mudança percentual
      const widthChange =
        (Math.abs(currentWidth - lastSize.width) / lastSize.width) * 100;
      const heightChange =
        (Math.abs(currentHeight - lastSize.height) / lastSize.height) * 100;

      // Se a mudança for significativa
      if (widthChange > options.threshold || heightChange > options.threshold) {
        setIsResizeLoading(true);

        // Atualiza o tamanho atual
        setLastSize({ width: currentWidth, height: currentHeight });

        // Remove o loading após a duração especificada
        setTimeout(() => {
          setIsResizeLoading(false);
        }, options.duration);
      }
    };

    // Debounce para evitar muitos triggers
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [lastSize, options.threshold, options.duration]);

  return isResizeLoading;
}
