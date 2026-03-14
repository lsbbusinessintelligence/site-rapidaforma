import { motion } from "framer-motion";

const photos = [
  { src: "/images/rapidaforma/obra-05.jpeg", alt: "Estrutura de obra em construção" },
  { src: "/images/rapidaforma/obra-06.jpeg", alt: "Assentamento de piso porcelanato" },
  { src: "/images/rapidaforma/obra-07.jpeg", alt: "Cimento queimado e acabamento" },
  { src: "/images/rapidaforma/obra-08.jpeg", alt: "Instalação de revestimento cerâmico" },
  { src: "/images/rapidaforma/obra-09.jpeg", alt: "Reforma com acabamento em piso" },
  { src: "/images/rapidaforma/obra-11.jpeg", alt: "Execução de obra estrutural" },
  { src: "/images/rapidaforma/obra-12.jpeg", alt: "Piso finalizado com brilho" },
  { src: "/images/rapidaforma/obra-13.jpeg", alt: "Ambiente finalizado com pintura" },
  { src: "/images/rapidaforma/obra-14.jpeg", alt: "Parede com acabamento profissional" },
];

const GaleriaSection = () => (
  <section id="obras" className="py-20 md:py-28 bg-secondary/40 scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Obras e Resultados <span className="text-gradient">RápidaForma</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Registro real de serviços de pintura, reforma, pisos e revestimentos executados pela equipe.
        </p>
      </motion.div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.03 }}
            className="mb-4 overflow-hidden rounded-2xl bg-card border border-border shadow-sm break-inside-avoid"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default GaleriaSection;
