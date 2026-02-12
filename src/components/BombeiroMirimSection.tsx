import { Flame, Heart, Award, Users } from "lucide-react";
import bombeiroMirimBg from "@/assets/bombeiro-mirim-bg.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  { icon: Flame, label: "Coragem" },
  { icon: Heart, label: "Ética" },
  { icon: Award, label: "Disciplina" },
  { icon: Users, label: "Trabalho em Equipe" },
];

export default function BombeiroMirimSection() {
  const ref = useScrollReveal();

  return (
    <section id="bombeiro-mirim" className="relative py-24 overflow-hidden" ref={ref}>
      {/* BG image */}
      <div className="absolute inset-0">
        <img src={bombeiroMirimBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Large year text */}
      <div className="absolute right-8 bottom-8 font-display text-[12rem] sm:text-[16rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
        2025
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-crimson mb-6">
            Projeto Social
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Transformando o Futuro:{" "}
            <span className="gradient-text-crimson">7 a 14 anos</span>
          </h2>
          <p className="text-xl text-white/70 mb-4 leading-relaxed">
            Projeto Bombeiro Mirim 2025
          </p>
          <p className="text-white/50 text-lg mb-10 max-w-xl">
            Muito além do ensino: disciplina, ética e coragem. Formando cidadãos preparados para o futuro através de valores sólidos e experiências transformadoras.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 animate-fade-in-up">
            {values.map((v) => (
              <div key={v.label} className="glass-card-light rounded-xl p-4 text-center hover:border-primary/30 transition-all">
                <v.icon size={28} className="mx-auto mb-2 text-crimson" />
                <span className="text-sm font-medium text-primary-foreground">{v.label}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5500000000000?text=Quero%20saber%20sobre%20o%20Bombeiro%20Mirim%202025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground btn-primary-glow transition-all duration-300 hover:scale-105 animate-fade-in-up"
          >
            Inscrever Agora
          </a>
        </div>
      </div>
    </section>
  );
}
