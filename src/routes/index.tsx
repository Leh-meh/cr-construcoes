import { createFileRoute } from "@tanstack/react-router";
import DigitalBusinessCard from "@/components/DigitalBusinessCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "João Silva — Construtor Civil" },
      {
        name: "description",
        content:
          "Cartão de visita digital de João Silva, construtor civil. Entre em contato via WhatsApp, telefone ou e-mail.",
      },
      { property: "og:title", content: "João Silva — Construtor Civil" },
      {
        property: "og:description",
        content:
          "Não sou apenas pedreiro, sou construtor de sonhos. Entre em contato!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return <DigitalBusinessCard />;
}
