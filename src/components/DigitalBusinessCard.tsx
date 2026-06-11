import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  HardHat,
  ChevronRight,
} from "lucide-react";

/* ============================================
   DADOS DO PROFISSIONAL — EDITE AQUI
   ============================================ */
const PROFISSIONAL = {
  // Informações básicas
  nome: "João Silva",
  cargo: "Construtor Civil",
  fraseDestaque: "Não sou apenas pedreiro, sou construtor de sonhos.",
  descricao:
    "Mais de 15 anos transformando projetos em realidade. Especialista em construção residencial, reformas e acabamentos de alta qualidade.",

  // Contato — substitua pelos seus dados
  telefone: "5511999999999", // formato: 5511...
  email: "contato@joaosilva.com",
  whatsappMensagem:
    "Olá! Gostaria de solicitar um orçamento para construção.",

  // Redes sociais — deixe vazio "" para ocultar o botão
  instagram: "https://instagram.com/joaosilva",
  facebook: "https://facebook.com/joaosilva",

  // Localização
  regiao: "Atende em São Paulo e Grande ABC",
  enderecoMaps: "https://maps.google.com",
};

/* ============================================
   LINKS DE AÇÃO
   ============================================ */
function getWhatsAppLink(telefone: string, mensagem: string): string {
  const encodedMsg = encodeURIComponent(mensagem);
  return `https://wa.me/${telefone}?text=${encodedMsg}`;
}

function getPhoneLink(telefone: string): string {
  return `tel:+${telefone}`;
}

function getEmailLink(email: string): string {
  return `mailto:${email}`;
}

/* ============================================
   COMPONENTES AUXILIARES
   ============================================ */
interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  variant?: "primary" | "secondary" | "outline" | "social";
}

function ActionButton({
  href,
  icon,
  label,
  variant = "primary",
}: ActionButtonProps) {
  const baseClasses =
    "flex items-center gap-3 w-full px-5 py-4 rounded-2xl font-semibold text-sm transition-all duration-200 active:scale-[0.98]";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-0.5",
    secondary:
      "bg-gradient-to-r from-[#059669] to-[#10b981] text-white shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-0.5",
    outline:
      "bg-white border-2 border-[#e2e8f0] text-[#1e293b] hover:border-[#3b82f6] hover:text-[#1e3a8a] hover:bg-[#eff6ff]",
    social:
      "bg-white border border-[#e2e8f0] text-[#475569] hover:border-[#3b82f6] hover:text-[#1e3a8a] hover:bg-[#eff6ff]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex-1">{label}</span>
      <ChevronRight className="shrink-0 w-4 h-4 opacity-50" />
    </a>
  );
}

/* ============================================
   COMPONENTE PRINCIPAL
   ============================================ */
export default function DigitalBusinessCard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f5ff] via-[#f8fafc] to-[#f0f5ff] flex items-center justify-center p-4 sm:p-6">
      <article className="w-full max-w-[420px] bg-white rounded-[2rem] shadow-2xl shadow-blue-900/10 overflow-hidden border border-[#e2e8f0]/60">
        {/* Faixa decorativa superior */}
        <div className="h-2 bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa]" />

        {/* Conteúdo */}
        <div className="px-7 pt-8 pb-8 sm:px-9">
          {/* Logo / Ícone */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] flex items-center justify-center shadow-lg shadow-blue-900/20">
              <HardHat className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* Nome e Cargo */}
          <div className="text-center mb-5">
            <h1 className="text-[1.6rem] font-bold text-[#0f172a] tracking-tight leading-tight">
              {PROFISSIONAL.nome}
            </h1>
            <p className="text-[#3b82f6] font-semibold text-sm mt-1 uppercase tracking-wide">
              {PROFISSIONAL.cargo}
            </p>
          </div>

          {/* Frase de destaque */}
          <div className="relative mb-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3b82f6] to-[#60a5fa] rounded-full" />
            <p className="pl-4 text-[#1e3a8a] font-medium text-[0.95rem] leading-relaxed italic">
              "{PROFISSIONAL.fraseDestaque}"
            </p>
          </div>

          {/* Descrição profissional */}
          <p className="text-[#475569] text-sm leading-relaxed text-center mb-8">
            {PROFISSIONAL.descricao}
          </p>

          {/* Botões de contato principais */}
          <div className="space-y-3 mb-6">
            <ActionButton
              href={getWhatsAppLink(
                PROFISSIONAL.telefone,
                PROFISSIONAL.whatsappMensagem,
              )}
              icon={<MessageCircle className="w-5 h-5" />}
              label="Conversar no WhatsApp"
              variant="secondary"
            />
            <ActionButton
              href={getPhoneLink(PROFISSIONAL.telefone)}
              icon={<Phone className="w-5 h-5" />}
              label="Ligar Agora"
              variant="primary"
            />
            <ActionButton
              href={getEmailLink(PROFISSIONAL.email)}
              icon={<Mail className="w-5 h-5" />}
              label="Enviar E-mail"
              variant="outline"
            />
          </div>

          {/* Redes sociais */}
          {(PROFISSIONAL.instagram || PROFISSIONAL.facebook) && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {PROFISSIONAL.instagram && (
                <a
                  href={PROFISSIONAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              )}
              {PROFISSIONAL.facebook && (
                <a
                  href={PROFISSIONAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-gradient-to-br from-[#1877f2] to-[#166fe5] text-white font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              )}
            </div>
          )}

          {/* Região de atendimento */}
          <a
            href={PROFISSIONAL.enderecoMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 px-5 rounded-2xl bg-[#f1f5f9] text-[#475569] text-sm font-medium transition-all duration-200 hover:bg-[#e2e8f0] hover:text-[#1e293b] mb-6"
          >
            <MapPin className="w-4 h-4 text-[#3b82f6]" />
            {PROFISSIONAL.regiao}
          </a>

          {/* Divisor */}
          <div className="border-t border-[#e2e8f0] mb-5" />

          {/* Rodapé */}
          <footer className="text-center">
            <p className="text-[#94a3b8] text-xs leading-relaxed">
              Profissional qualificado e comprometido
              <br />
              com a excelência em cada projeto.
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
}
