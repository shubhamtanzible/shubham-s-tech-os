import { motion } from "framer-motion";

const projects = [
  {
    tag: "E-Commerce · Next.js",
    tagColor: "primary",
    title: "Print On Demand",
    desc: "Custom apparel commerce platform — design upload/preview flows, live mockups, variant selection, order tracking, vendor integrations & dashboard widgets.",
    skills: ["Next.js", "Node.js", "REST APIs", "MongoDB", "Code Splitting"],
  },
  {
    tag: "AI · SaaS · Coaching",
    tagColor: "accent",
    title: "CoociCoach",
    desc: "AI-enhanced coaching & video analysis platform with LLM-based session insights, drill tracking, video previews, Redux global state & role-based routing.",
    skills: ["React", "Redux Toolkit", "LLM APIs", "OpenAI", "REST APIs", "RBAC"],
  },
  {
    tag: "B2B · Hotel Ops",
    tagColor: "primary",
    title: "KnectHotel",
    desc: "Full hotel management suite — onboarding, room/facility management, RBAC, coupons, real-time chat (Socket.IO), webhook notifications & complex form validation.",
    skills: ["React Hook Form", "Zod", "Socket.IO", "JWT", "RBAC", "Webhooks"],
  },
  {
    tag: "E-Commerce · AI Search",
    tagColor: "accent",
    title: "Naturally Good",
    desc: "E-commerce storefront with AI-powered product search & recommendations using LLM prompt-driven logic, cart/checkout, order tracking & SEO optimization.",
    skills: ["Next.js", "OpenAI API", "Prompt Engineering", "Node.js", "MongoDB", "SEO"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-body uppercase tracking-widest mb-3"
        >
          // PROJECTS
        </motion.p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Featured Projects
        </h2>
        <p className="text-muted-foreground font-body mb-12">
          Production-grade apps, AI integrations & full-stack systems
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}
              className="glass-card p-6 sm:p-8 group transition-all duration-300"
            >
              <span
                className={`inline-block px-3 py-1 text-xs font-body rounded-full mb-4 ${
                  project.tagColor === "accent"
                    ? "bg-accent/10 text-accent border border-accent/20"
                    : "bg-primary/10 text-primary border border-primary/20"
                }`}
              >
                {project.tag}
              </span>

              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body mb-6 leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs font-body rounded bg-muted/50 text-muted-foreground border border-primary/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="px-4 py-2 text-sm font-body rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                  View Project →
                </button>
                <button className="px-4 py-2 text-sm font-body rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors">
                  View Docs →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Drive banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-foreground font-body text-sm">
            📂 All project docs, test cases & requirement specs
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold glow-cyan hover:scale-105 transition-transform"
          >
            Open Google Drive Folder →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
