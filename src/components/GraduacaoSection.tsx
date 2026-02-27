import { useState } from "react"; // Adicionado o useState
import { TvMinimalPlay, FlaskConical, Accessibility, Monitor, BookOpen, HeartPulse, HardHat, Compass, Scale } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const graduationCourses = [
  "Engenharia Civil", "Engenharia de Produção", "Engenharia Elétrica",
  "Biomedicina", "Nutrição", "Enfermagem", "Farmácia",
  "Administração", "Contabilidade", "Pedagogia", "Direito",
];

const categories = [
  { id: "todos", label: "Todos", icon: BookOpen },
  { id: "saude", label: "Saúde e Bem-Estar", icon: HeartPulse },
  { id: "engenharias", label: "Engenharias", icon: HardHat },
  { id: "arquitetura", label: "Arquitetura e Design", icon: Compass },
  { id: "humanas", label: "Sociais e Humanas", icon: Scale },
];

const courses = [
  // Saúde e Bem-Estar
  { title: "Biomedicina", category: "saude"},
  { title: "Farmácia", category: "saude"},
  { title: "Fisioterapia", category: "saude"},
  { title: "Nutrição", category: "saude"},
  { title: "Radiologia", category: "saude"},
  { title: "Educação Física (Bacharel)", category: "saude"},

  // Engenharias
  { title: "Engenharia Agronômica", category: "engenharias"},
  { title: "Engenharia Ambiental e Sanitária", category: "engenharias"},
  { title: "Engenharia Civil", category: "engenharias"},
  { title: "Engenharia de Produção", category: "engenharias"},
  { title: "Engenharia Elétrica", category: "engenharias"},
  { title: "Engenharia Mecânica", category: "engenharias"},
  { title: "Engenharia Química", category: "engenharias"},

  // Arquitetura e Design
  { title: "Arquitetura e Urbanismo", category: "arquitetura"},
  { title: "Design de Interiores", category: "arquitetura"},

  // Sociais e Humanas
  { title: "Ciências Jurídicas e Sociais", category: "humanas"},
  { title: "Psicopedagogia", category: "humanas"},
];

const infra = [
  { icon: TvMinimalPlay, title: "Plataforma LMS integrada", desc: "EAD + videoaulas síncronas" },
  { icon: FlaskConical, title: "Laboratórios Ativos", desc: "Metodologias ativas" },
  { icon: Accessibility, title: "Acessibilidade", desc: "Inclusão total" },
  { icon: Monitor, title: "Salas Tech", desc: "Equipamentos modernos" },
];

export default function GraduacaoSection() {
  const [active, setActive] = useState("todos");
  const ref = useScrollReveal();

  const filtered = active === "todos" ? courses : courses.filter((c) => c.category === active);

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

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${active === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg btn-primary-glow"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filtered.map((course, i) => (
            <div
              key={course.title}
              className="animate-fade-in-up group relative rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              
              <h3 className="font-display text-lg font-semibold text-card-foreground mt-2 mb-4 pr-16">
                {course.title}
              </h3>
            </div>
          ))}
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