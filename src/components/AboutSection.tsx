import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const stats = [
  { value: 2, label: "Years Experience", suffix: "" },
  { value: 4, label: "Products Shipped", suffix: "+" },
  { value: 10, label: "Modules Built", suffix: "+" },
  { value: null, label: "Lines of Code", suffix: "", display: "∞" },
];

const CountUp = ({
  target,
  suffix,
}: {
  target: number | null;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / 40;
          const tick = () => {
            start += step;
            if (start >= target) {
              setCount(target);
              return;
            }
            setCount(Math.round(start * 10) / 10);
            requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  if (target === null)
    return (
      <span className="text-3xl sm:text-4xl font-heading font-bold text-primary">
        ∞
      </span>
    );
  return (
    <span
      ref={ref}
      className="text-3xl sm:text-4xl font-heading font-bold text-primary"
    >
      {count}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-body uppercase tracking-widest mb-3"
        ></motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative levitate">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-muted/30 border border-primary/20 overflow-hidden relative">
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary z-10" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary z-10" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary z-10" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary z-10" />
                <img
                  src={profilePhoto}
                  alt="Shubham Pathak"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_hsl(190,100%,50%,0.15)] pointer-events-none" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed">
              I'm Shubham, a full-stack developer based in Bangalore. I spent 2
              years at Synccipher Innovations (TechAvtar) shipping end-to-end
              production features — from Figma designs to deployed APIs. I
              specialize in MERN/Next.js, AI/LLM integrations, and building
              systems that scale. I turn complex requirements into clean,
              performant code.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0,212,255,0.15)" }}
              className="glass-card p-6 text-center"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground text-sm font-body mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
