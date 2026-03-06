import { motion } from "framer-motion";

const skillGroups = [
  {
    icon: "🧠",
    label: "AI & LLM",
    color: "accent",
    skills: ["OpenAI API", "Prompt Engineering", "LLM Integration", "RAG Concepts", "AI Workflow Automation", "Chatbot Development"],
  },
  {
    icon: "⚛️",
    label: "Frontend",
    color: "primary",
    skills: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "TypeScript"],
  },
  {
    icon: "🔧",
    label: "Backend",
    color: "primary",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "RBAC", "Zod Validation", "Socket.IO"],
  },
  {
    icon: "🗄️",
    label: "Database",
    color: "primary",
    skills: ["MongoDB", "Mongoose", "Firebase", "SQL Basics"],
  },
  {
    icon: "🛠️",
    label: "DevOps & Tools",
    color: "primary",
    skills: ["Git", "GitHub", "CI/CD", "Vite", "Webpack", "ESLint", "Prettier", "Code Reviews"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-body uppercase tracking-widest mb-3"
        >
          // SKILLS
        </motion.p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-12">
          Tech Stack
        </h2>

        <div className="space-y-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span>{group.icon}</span> {group.label}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={item}
                    whileHover={{
                      boxShadow:
                        group.color === "accent"
                          ? "0 0 15px rgba(0,255,136,0.3)"
                          : "0 0 15px rgba(0,212,255,0.3)",
                    }}
                    className={`px-4 py-2 text-sm font-body rounded-full border transition-all cursor-default ${
                      group.color === "accent"
                        ? "bg-accent/10 text-accent border-accent/20"
                        : "bg-primary/10 text-primary border-primary/20"
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
