import { useState } from "react";
import { ArrowUpRight, HardHat, HeartPulse, Car, BookOpen, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  { id: "todos", label: "Todos", icon: BookOpen },
  { id: "nr", label: "NRs", icon: HardHat },
  { id: "saude", label: "Saúde", icon: HeartPulse },
  { id: "detran", label: "DETRAN", icon: Car },
  { id: "formacao", label: "Formação", icon: Users },
];

const courses = [
  { title: "NR-35 Trabalho em Altura", category: "nr", hours: "8h", price: "R$ 120" },
  { title: "NR-10 Segurança em Eletricidade", category: "nr", hours: "40h", price: "R$ 350" },
  { title: "NR-33 Espaço Confinado", category: "nr", hours: "16h", price: "R$ 200" },
  { title: "NR-06 EPI", category: "nr", hours: "8h", price: "R$ 100" },
  { title: "APH - Atendimento Pré-Hospitalar", category: "saude", hours: "120h", price: "R$ 890" },
  { title: "Primeiros Socorros", category: "saude", hours: "20h", price: "R$ 180" },
  { title: "Cuidador de Idosos", category: "saude", hours: "80h", price: "R$ 450" },
  { title: "Reciclagem DETRAN", category: "detran", hours: "30h", price: "R$ 250" },
  { title: "Instrutor de Trânsito", category: "detran", hours: "200h", price: "R$ 1.200" },
  { title: "Direção Defensiva", category: "detran", hours: "16h", price: "R$ 150" },
  { title: "Bombeiro Mirim 2025", category: "formacao", hours: "Anual", price: "Consulte" },
  { title: "Liderança e Cidadania", category: "formacao", hours: "40h", price: "R$ 280" },
];

export default function CoursesSection() {
  const [active, setActive] = useState("todos");
  const ref = useScrollReveal();

  const filtered = active === "todos" ? courses : courses.filter((c) => c.category === active);

  return (
    <section id="cursos" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="gradient-text-crimson">Cursos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Formações reconhecidas que impulsionam carreiras no Vale do Ribeira.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === cat.id
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((course, i) => (
            <div
              key={course.title}
              className="animate-fade-in-up group relative rounded-2xl border border-border bg-card p-6 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-4 right-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {course.hours}
              </div>
              <h3 className="font-display text-lg font-semibold text-card-foreground mt-2 mb-4 pr-16">
                {course.title}
              </h3>
              <div className="flex items-end justify-between">
                <span className="text-xl font-bold text-foreground">{course.price}</span>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={18} className="text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
