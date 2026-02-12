import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-navy opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 mb-8">
            <Shield size={16} className="text-crimson" />
            <span className="text-sm font-medium text-white/80">
              Referência no Vale do Ribeira
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Sua Carreira em{" "}
            <span className="gradient-text-crimson">Alto Nível</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            A maior referência do Vale do Ribeira em especializações DETRAN, Saúde e Formação Cidadã.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cursos"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground btn-primary-glow transition-all duration-300 hover:scale-105"
            >
              Explorar Cursos
              <ArrowRight size={18} />
            </a>
            <a
              href="#bombeiro-mirim"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-base font-semibold text-primary-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Conhecer Bombeiro Mirim
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
