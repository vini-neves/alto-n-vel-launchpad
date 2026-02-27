import { MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Importei os dois da react-icons

export default function Footer() {
  return (
    <footer id="contato" className="gradient-navy py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Alto Nível <span className="gradient-text-crimson">Cursos</span>
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              A maior referência do Vale do Ribeira em cursos profissionalizantes, especializações DETRAN, Saúde e Formação Cidadã.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={16} className="text-crimson flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+José+Antônio+de+Campos,+121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  R. José Antônio de Campos, 121
                </a>
              </li>
              
              {/* WhatsApp */}
              <li className="flex items-center gap-3 text-sm text-white/60">
                <FaWhatsapp size={16} className="text-crimson flex-shrink-0" />
                <a 
                  href="https://wa.me/5513997848842" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors font-medium"
                >
                  +55 13 99784-8842
                </a>
              </li>

              {/* Instagram no lugar do e-mail */}
              <li className="flex items-center gap-3 text-sm text-white/60">
                <FaInstagram size={16} className="text-crimson flex-shrink-0" />
                <a 
                  href="https://instagram.com/centroeducacional_altonivel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @centroeducacional_altonivel
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {["Cursos", "APH", "Bombeiro Mirim", "Graduação EAD"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-white/50 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-white/30">
            © 2026 Alto Nível Cursos Profissionalizantes. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30">
            CNPJ: 53.598.909/0001-50
          </p>
        </div>
      </div>
    </footer>
  );
}