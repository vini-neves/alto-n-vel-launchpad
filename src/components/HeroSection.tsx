import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Definimos o caminho em uma constante para garantir que seja IDÊNTICO na linha e no ponto
  const pathD = "M-50 450 Q 150 400 300 430 T 500 400 T 750 280 T 1050 50";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* 1. Background Base Navy */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] via-[#020617] to-black" />
      </div>

      {/* 2. Gráfico com Linhas e Seta Animada */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full opacity-40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Linhas de Grade Horizontais */}
          <g stroke="white" strokeWidth="0.5" strokeOpacity="0.1">
            {[...Array(10)].map((_, i) => (
              <line key={i} x1="0" y1={i * 55} x2="1000" y2={i * 55} />
            ))}
          </g>

          {/* Sombra de preenchimento */}
          <motion.path
            d={pathD}
            fill="url(#area-gradient-blue)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />

          {/* A Linha Azul Animada */}
          <motion.path
            d={pathD}
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ 
              duration: 4, 
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.5
            }}
          />

          {/* Ponto de Brilho Corrigido */}
          <motion.circle
            r="5"
            fill="#60a5fa"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: 1 }}
            style={{ 
              offsetPath: `path('${pathD}')`, // Usando a constante aqui
              filter: "drop-shadow(0 0 12px #3b82f6)"
            }}
            transition={{ 
              duration: 4, 
              ease: "easeInOut", 
              repeat: Infinity,
              repeatDelay: 0.5 // Sincronizado com a linha
            }}
          />

          <defs>
            <linearGradient id="area-gradient-blue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. Efeito de vinheta */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/50 z-15" />

      {/* 4. Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 mb-8">
            <Shield size={16} className="text-crimson animate-pulse" />
            <span className="text-sm font-medium text-blue-100/80">
              Referência no Vale do Ribeira
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Sua Carreira em<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-crimson">
              Alto Nível
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            A maior referência do Vale do Ribeira em especializações DETRAN, Saúde e Formação Cidadã.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cursos"
              className="group inline-flex items-center gap-2 rounded-xl bg-crimson px-8 py-4 text-base font-semibold text-white shadow-[0_10px_20px_-10px_rgba(220,20,60,0.5)] transition-all duration-300 hover:scale-105"
            >
              Explorar Cursos
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#bombeiro-mirim"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all duration-300"
            >
              Conhecer Bombeiro Mirim
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent z-30" />
    </section>
  );
}