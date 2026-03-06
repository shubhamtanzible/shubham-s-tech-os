import { motion } from "framer-motion";
import { FileText, TestTube, ClipboardList, Code } from "lucide-react";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1Zz2MRHZvY0XeFsM_mG0h7nQFaXV4Em7V";

const docs = [
  {
    icon: FileText,
    title: "Resume / CV",
    desc: "Full experience, skills & project history",
    cta: "Open Resume →",
    href: DRIVE_LINK,
  },
  {
    icon: TestTube,
    title: "Test Cases & QA Docs",
    desc: "Functional & edge case test suites from real projects",
    cta: "View Folder →",
    href: DRIVE_LINK,
  },
  {
    icon: ClipboardList,
    title: "Project Docs & PRDs",
    desc: "Technical specs, requirement docs & API docs",
    cta: "View Folder →",
    href: DRIVE_LINK,
  },
];

const DocumentsSection = () => {
  return (
    <section id="documents" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-body uppercase tracking-widest mb-3"
        >
          // DOCUMENTS
        </motion.p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Documents & Links
        </h2>
        <p className="text-muted-foreground font-body mb-12">
          All project artifacts, test cases & professional docs
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {docs.map((doc, i) => (
            <motion.a
              key={i}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0,212,255,0.15)" }}
              className="glass-card p-6 block group transition-all"
            >
              <doc.icon size={28} className="text-primary mb-4" />
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {doc.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body mb-4">{doc.desc}</p>
              <span className="text-primary text-sm font-body font-semibold group-hover:underline">
                {doc.cta}
              </span>
            </motion.a>
          ))}
        </div>

        {/* LeetCode */}
        <motion.a
          href="https://leetcode.com/rajp9693759948"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0,212,255,0.15)" }}
          className="glass-card p-6 flex items-center gap-4 transition-all"
        >
          <Code size={24} className="text-primary" />
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">💻 LeetCode Profile</h3>
            <p className="text-muted-foreground text-sm font-body">leetcode.com/rajp9693759948</p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default DocumentsSection;
