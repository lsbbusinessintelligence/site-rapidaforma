import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/siteConfig";

const testimonials = [
  {
    name: "Victor Rocha",
    text: "Trabalho de excelente qualidade, capricho e o melhor, sem enrolacao.",
  },
  {
    name: "Joao Pedro",
    text: "Excelente profissional! Muito pontual, organizado e caprichoso no trabalho. Recomendo de olhos fechados!",
  },
  {
    name: "Thays Freitas",
    text: "Excelente profissional, terminou o servico antes do prazo, servico com qualidade, rapidez e preco justo. Obrigada Sr. Cicero.",
  },
  {
    name: "Alane Brito",
    text: "Profissional excelente e muito atencioso. Trabalho executado com muito capricho na pintura e cimento queimado da minha sala.",
  },
  {
    name: "Paula Vila Nova",
    text: "Atendimento rapido e explicacao clara dos materiais. Trabalho realizado com prioridade e muita agilidade.",
  },
  {
    name: "Sara Baruk",
    text: "Muito gente boa e faz um otimo servico. Trocou os pisos do meu apartamento rapidamente e com boa execucao.",
  },
];

const TestimonialsSection = () => (
  <section id="avaliacoes" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Avaliacoes Reais no <span className="text-gradient">Google Maps</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Clientes destacam capricho, rapidez e transparencia no atendimento da RapidaForma.
        </p>
        <div className="mt-5 flex flex-wrap justify-center items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/30 px-4 py-2 font-semibold text-foreground">
            <span className="text-yellow-500">★★★★★</span>
            Nota media 5.0 no Google
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2 text-muted-foreground">
            Avaliacoes reais de clientes da regiao
          </span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 card-hover"
          >
            <div className="mb-3 text-lg tracking-wide text-yellow-500">{"★★★★★"}</div>
            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
            <p className="text-muted-foreground leading-relaxed">"{item.text}"</p>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-7 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all"
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "click_whatsapp", {
                event_category: "lead",
                event_label: "botao_whatsapp_depoimentos",
              });
            }
          }}
        >
          <MessageCircle className="w-5 h-5" />
          Quero um orcamento igual aos clientes satisfeitos
        </a>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
