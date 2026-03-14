import { motion } from "framer-motion";
import { PaintRoller, HousePlus, Grid2x2, Sparkles } from "lucide-react";

const services = [
  {
    icon: PaintRoller,
    title: "Pintura Profissional",
    desc: "Pintura interna, externa e aplicacao de cimento queimado com acabamento uniforme.",
  },
  {
    icon: HousePlus,
    title: "Reformas em Geral",
    desc: "Do rustico ao acabamento, cuidamos de cada detalhe da sua casa ou comercio.",
  },
  {
    icon: Grid2x2,
    title: "Pisos e Revestimentos",
    desc: "Instalacao rapida e precisa de pisos, azulejos e porcelanatos.",
  },
  {
    icon: Sparkles,
    title: "Acabamentos Finos",
    desc: "Retirada de texturas, massa corrida e reparos que exigem capricho.",
  },
];

const ServicosSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos <span className="text-gradient">Serviços</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Solucoes completas em obra, reforma e pintura para residencias e comercios
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border card-hover work-accent relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 relative">
              <service.icon className="w-6 h-6 text-accent relative z-10" />
              <div className="absolute inset-0 bg-accent/20 blur-md rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
