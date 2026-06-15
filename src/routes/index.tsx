import { createFileRoute } from "@tanstack/react-router";
import DigitalBusinessCard from "@/components/DigitalBusinessCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CR Construções" },
      {
        name: "description",
        content:
          "Cartão de visita digital de CR Construções. Entre em contato via WhatsApp, telefone.",
      },
      { property: "og:title", content: "CR Construções" },
      {
        property: "og:description",
        content: "Não sou apenas pedreiro, sou construtor de sonhos. Entre em contato!",
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
