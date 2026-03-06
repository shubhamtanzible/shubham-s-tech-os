import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, FolderOpen } from "lucide-react";

export interface ProjectData {
  tag: string;
  tagColor: string;
  title: string;
  desc: string;
  skills: string[];
  fullDescription: string;
  challenges: string[];
  features: string[];
  siteLink: string;
  driveLink: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative glass-card w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6 sm:p-10 z-10 border border-primary/15"
          style={{ boxShadow: "0 0 60px rgba(0,212,255,0.08)" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors z-20"
          >
            <X size={24} />
          </button>

          {/* Tag */}
          <span
            className={`inline-block px-3 py-1 text-xs font-body rounded-full mb-4 ${
              project.tagColor === "accent"
                ? "bg-accent/10 text-accent border border-accent/20"
                : "bg-primary/10 text-primary border border-primary/20"
            }`}
          >
            {project.tag}
          </span>

          {/* Title */}
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {project.title}
          </h2>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-primary text-sm font-body uppercase tracking-widest mb-3">
              // OVERVIEW
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h3 className="text-primary text-sm font-body uppercase tracking-widest mb-3">
              // KEY FEATURES
            </h3>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-muted-foreground font-body text-sm flex items-start gap-2"
                >
                  <span className="text-primary mt-1">▹</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="mb-8">
            <h3 className="text-primary text-sm font-body uppercase tracking-widest mb-3">
              // CHALLENGES & SOLUTIONS
            </h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="text-muted-foreground font-body text-sm flex items-start gap-2"
                >
                  <span className="text-secondary mt-1">⚡</span>
                  {challenge}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills Used */}
          <div className="mb-8">
            <h3 className="text-primary text-sm font-body uppercase tracking-widest mb-3">
              // TECH STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-body rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Files & Media Links */}
          <div className="mb-4">
            <h3 className="text-primary text-sm font-body uppercase tracking-widest mb-3">
              // FILES & MEDIA
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-3 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all group"
              >
                <ExternalLink size={18} className="text-primary" />
                <div>
                  <p className="text-foreground text-sm font-body font-semibold group-hover:text-primary transition-colors">
                    Live Site / Demo
                  </p>
                  <p className="text-muted-foreground text-xs font-body">View the deployed project</p>
                </div>
              </a>
              <a
                href={project.driveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-3 hover:shadow-[0_0_15px_rgba(124,58,237,0.15)] transition-all group"
              >
                <FolderOpen size={18} className="text-secondary" />
                <div>
                  <p className="text-foreground text-sm font-body font-semibold group-hover:text-secondary transition-colors">
                    Project Docs & Files
                  </p>
                  <p className="text-muted-foreground text-xs font-body">Specs, test cases & media</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
