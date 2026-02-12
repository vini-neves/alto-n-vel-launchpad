import {
  HeartPulse,
  Brain,
  Waves,
  Bone,
  Clock,
  ShieldCheck,
  Siren,
  Stethoscope,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const topics = [
  { icon: HeartPulse, title: "Protocolos PCR", desc: "Adulto e Infantil", badge: "40h" },
  { icon: Brain, title: "Escala de Glasgow", desc: "Avaliação Neurológica", badge: "10h" },
  { icon: Waves, title: "Atendimento a Afogados", desc: "Resgate Aquático", badge: "20h" },
  { icon: Bone, title: "Traumas Críticos", desc: "Imobilização e Transporte", badge: "30h" },
  { icon: Siren, title: "Emergências Clínicas", desc: "Crise Convulsiva e AVC", badge: "15h" },
  { icon: Stethoscope, title: "Avaliação Primária", desc: "ABCDE do Trauma", badge: "12h" },
];

export default function AphSection() {
  const ref = useScrollReveal();

  return (
    <section id="aph" className="py-24 gradient-navy relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, hsl(350,89%,50%) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 mb-6">
            <ShieldCheck size={16} className="text-crimson" />
            <span className="text-sm font-medium text-white/80">Especialização Completa</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">
            Especialização em <span className="gradient-text-crimson">APH</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Da Legislação ao Salvamento Crítico. Formação completa de 10h a 120h com certificação reconhecida.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topics.map((topic, i) => (
            <div
              key={topic.title}
              className="animate-fade-in-up glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <topic.icon size={24} className="text-crimson" />
                </div>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-crimson">
                  {topic.badge}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">
                {topic.title}
              </h3>
              <p className="text-sm text-white/50">{topic.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3">
            <Clock size={16} className="text-crimson" />
            <span className="text-sm text-white/70">Carga horária total: até <strong className="text-primary-foreground">120h</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
