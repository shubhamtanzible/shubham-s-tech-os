import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const bullets = [
  {
    icon: "🤖",
    title: "AI Integration & Prompt Engineering",
    desc: "Integrated OpenAI and LLM APIs for content generation and workflow automation; iterated prompts to improve output quality and reduce latency.",
  },
  {
    icon: "⚡",
    title: "End-to-End Feature Delivery",
    desc: "Delivered full-stack features with Next.js/React frontend and Node.js/Express backend with JWT-secured REST APIs.",
  },
  {
    icon: "🎨",
    title: "UI Implementation",
    desc: "Converted Figma/Adobe XD designs into reusable responsive components with RBAC across modules.",
  },
  {
    icon: "🗄️",
    title: "Backend & Data Modeling",
    desc: "Modeled MongoDB collections, implemented CRUD controllers, pagination, filtering, and aggregation pipelines.",
  },
  {
    icon: "🚀",
    title: "Performance & SEO",
    desc: "Code-splitting, dynamic imports, memoization, prefetching, meta tags, sitemaps.",
  },
  {
    icon: "✅",
    title: "Code Quality",
    desc: "TypeScript, ESLint/Prettier, Git-based code reviews.",
  },
];

const techTags = ["Next.js", "Node.js", "MongoDB", "OpenAI API", "JWT", "Redux", "TypeScript"];

const ExperienceSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-body uppercase tracking-widest mb-3"
        >
          // EXPERIENCE
        </motion.p>

        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Work Experience
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-primary/30">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-[-1px] top-0 w-[2px] h-full bg-primary origin-top"
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 sm:p-8"
          >
            {/* Dot */}
            <div className="absolute -left-[13px] top-8 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <h3 className="font-heading text-xl font-bold text-foreground">
              Synccipher Innovations Pvt Ltd (TechAvtar)
            </h3>
            <p className="text-muted-foreground text-sm font-body mt-1">
              Software Developer · Full-time · Bangalore, India · Jul 2024 – Jan 2026
            </p>

            <div className="mt-6 space-y-2">
              {bullets.map((b, i) => (
                <div key={i} className="border border-primary/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-body text-sm text-foreground flex items-center gap-2">
                      <span>{b.icon}</span> {b.title}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-muted-foreground transition-transform ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-4 pb-3"
                    >
                      <p className="text-muted-foreground text-sm font-body">{b.desc}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-body rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
