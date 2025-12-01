import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "white";
}

export default function Logo({
  className = "",
  size = "md",
  color = "default",
}: LogoProps) {
  const sizeClasses = {
    sm: "h-8 md:h-12 w-auto max-w-[120px]",
    md: "h-12 md:h-16 w-auto max-w-[140px]",
    lg: "h-16 md:h-20 w-auto max-w-[160px]",
  };

  // Nome do arquivo da logo - ajuste conforme necessário
  const logoSrc =
    color === "white" ? "/images/logo-white.png" : "/images/logo.png";

  return (
    <Link href="/" className="flex items-center">
      <motion.div
        className={`flex items-center ${sizeClasses[size]} ${className} cursor-pointer`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={logoSrc}
          alt="Logo"
          width={120}
          height={40}
          className="h-full w-auto object-contain"
          priority
        />
      </motion.div>
    </Link>
  );
}
