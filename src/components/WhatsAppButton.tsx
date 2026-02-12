import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5500000000000?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Coordenadora%20Magali."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-5 py-4 text-sm font-semibold shadow-2xl whatsapp-pulse transition-all duration-300 hover:scale-110"
      style={{ backgroundColor: "hsl(142, 70%, 45%)", color: "white" }}
      aria-label="Falar com a Coordenadora Magali pelo WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline">Falar com Magali</span>
    </a>
  );
}
