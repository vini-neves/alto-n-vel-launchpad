import { Wifi, FlaskConical, Accessibility, Monitor } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const graduationCourses = [
  "Engenharia Civil", "Engenharia de Produção", "Engenharia Elétrica",
  "Biomedicina", "Nutrição", "Enfermagem", "Farmácia",
  "Administração", "Contabilidade", "Pedagogia", "Direito",
];

const infra = [
  { icon: Wifi, title: "Fibra 100Mbps", desc: "Conexão de alta velocidade" },
  { icon: FlaskConical, title: "Laboratórios Ativos", desc: "Metodologias ativas" },
  { icon: Accessibility, title: "Acessibilidade", desc: "Inclusão total" },
  { icon: Monitor, title: "Salas Tech", desc: "Equipamentos modernos" },
];

export default function GraduacaoSection() {
  const ref = useScrollReveal();

  return (
    <section id="graduacao" className="py-24 bg-muted" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Graduação <span className="gradient-text-crimson">EAD</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Engenharias, Saúde e muito mais. Estude com flexibilidade e qualidade.
          </p>
        </div>

        {/* Infinite carousel */}
        <div className="overflow-hidden mb-20 animate-fade-in-up">
          <div className="carousel-scroll flex gap-4 w-max">
            {[...graduationCourses, ...graduationCourses].map((course, i) => (
              <div
                key={`${course}-${i}`}
                className="flex-shrink-0 rounded-2xl border border-border bg-card px-8 py-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="font-display font-semibold text-card-foreground whitespace-nowrap">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure */}
        <div className="animate-fade-in-up">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-10">
            Infraestrutura
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {infra.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 text-center hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-crimson" />
                </div>
                <h4 className="font-display font-semibold text-card-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
