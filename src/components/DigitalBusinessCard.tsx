import {
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Hammer,
  Paintbrush,
  House,
  Building2,
} from "lucide-react";

const PROFISSIONAL = {
  nome: "CR Construções",
  cargo: "Construtor de Sonhos",

  fraseDestaque: "Construindo confiança em cada projeto.",

  servicos: [
    {
      titulo: "Construção Residencial",
      icon: House,
    },
    {
      titulo: "Reformas em Geral",
      icon: Hammer,
    },
    {
      titulo: "Acabamentos",
      icon: Paintbrush,
    },
    {
      titulo: "Construção Comercial",
      icon: Building2,
    },
  ],

  telefone: "5511996939636",
  email: "contato@crconstrucoes.com",
  whatsappMensagem: "Olá! Gostaria de solicitar um orçamento com a CR Construções.",

  instagram: "https://www.instagram.com/_cr_construcoes/",
  facebook: "https://facebook.com/crconstrucoes",

  regiao: "São Paulo e região",
};

function getWhatsAppLink(telefone: string, mensagem: string): string {
  return `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
}

function getPhoneLink(telefone: string): string {
  return `tel:+${telefone}`;
}

function getEmailLink(email: string): string {
  return `mailto:${email}`;
}

export default function DigitalBusinessCard() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#071120] to-[#0b1220] flex items-center justify-center px-4 py-4 text-white">
      <article className="relative w-full max-w-[350px] h-[650px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#071326] shadow-2xl shadow-blue-950/60">
        <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-cyan-300 to-blue-500" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed8_0%,transparent_34%)] opacity-35" />
        <div className="absolute -top-20 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative h-13 border-b border-white/10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:58px_44px]">
          <div className="absolute right-4 top-3 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-blue-200">
            Obras & Reformas
          </div>
        </div>

        <section className="relative -mt-9 px-5 pb-5">
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="CR Construções"
              className="w-28 h-auto mx-auto object-contain drop-shadow-[0_0_22px_rgba(59,130,246,0.35)]"
            />
          </div>

          <div className="mt-3 text-center">
            <h1 className="text-[1.55rem] font-black tracking-tight leading-tight">
              CR <span className="text-blue-300">Construções</span>
            </h1>

            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              {PROFISSIONAL.cargo}
            </p>

            <div className="mt-2 flex items-center justify-center gap-1.5 text-[12px] text-slate-300">
              <MapPin className="h-4 w-4 text-blue-300" />
              <span>{PROFISSIONAL.regiao}</span>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur">
            <p className="text-center text-[15px] font-semibold leading-snug text-white">
              {PROFISSIONAL.fraseDestaque}
            </p>
          </div>

          {/* ESPECIALIDADES */}
          <div className="mt-5">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Especialidades
            </p>

            <div className="grid grid-cols-2 gap-2">
              {PROFISSIONAL.servicos.map((servico) => {
                const Icon = servico.icon;

                return (
                  <div
                    key={servico.titulo}
                    className="
            flex
            flex-col
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-white/[0.04]
            py-3
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-400/30
            hover:bg-blue-500/10
          "
                  >
                    <Icon className="mb-2 h-5 w-5 text-cyan-300" />

                    <span className="text-[11px] font-medium text-center leading-tight text-white">
                      {servico.titulo}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 space-y-2.5">
            <a
              href={getWhatsAppLink(PROFISSIONAL.telefone, PROFISSIONAL.whatsappMensagem)}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 text-sm font-black text-[#020817] shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-400/35 active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <MessageCircle className="relative h-5 w-5" />
              <span className="relative">Solicitar orçamento</span>
            </a>

            <a
              href={getPhoneLink(PROFISSIONAL.telefone)}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-[#102447] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/25 hover:bg-white/[0.1] active:scale-[0.98] "
            >
              <Phone className="h-4 w-4 text-blue-300" />
              Ligar agora
            </a>
          </div>

          <div className="mt-4 flex justify-center gap-3">
            <a
              href={PROFISSIONAL.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-300/40 hover:text-cyan-300 active:scale-95"
              aria-label="Instagram"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>

            <a
              href={PROFISSIONAL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-blue-300/40 hover:text-cyan-300 active:scale-95"
              aria-label="Facebook"
            >
              <Facebook className="h-4.5 w-4.5" />
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
