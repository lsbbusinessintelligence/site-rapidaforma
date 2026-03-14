import { motion } from "framer-motion";

const feedbackImages = [
  { src: "/images/rapidaforma/obra-01.jpeg", alt: "Feedback visual 1 da RapidaForma" },
  { src: "/images/rapidaforma/obra-02.jpeg", alt: "Feedback visual 2 da RapidaForma" },
  { src: "/images/rapidaforma/obra-03.jpeg", alt: "Feedback visual 3 da RapidaForma" },
];

const FeedbacksSection = () => (
  <section id="feedbacks" className="py-20 md:py-28 bg-background scroll-mt-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Feedbacks <span className="text-gradient">dos Clientes</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Registros compartilhados por clientes e materiais de divulgacao da RapidaForma reunidos em um so lugar.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {feedbackImages.map((image, index) => (
          <motion.figure
            key={image.src}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default FeedbacksSection;
