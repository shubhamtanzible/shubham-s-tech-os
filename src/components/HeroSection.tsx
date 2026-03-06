import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ChevronDown } from "lucide-react";

const DRIVE_LINK =
  "https://drive.google.com/file/d/12oySRTQqykP3eprBKg4mTb01N_Rm7UtL/view?usp=sharing";
const LINKEDIN = "https://www.linkedin.com/in/shubhampathak1/";

const titles = [
  "Full-Stack Developer",
  "AI Integration Engineer",
  "MERN Stack Specialist",
  "Building what's next",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < current.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setDeleting(true), 1500);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setDeleting(false);
            setTitleIndex((titleIndex + 1) % titles.length);
          }
        }
      },
      deleting ? 30 : 60,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-extrabold text-foreground glitch-text mb-6"
        >
          Shubham Pathak
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-xl sm:text-2xl text-primary font-heading font-semibold mb-6 h-10"
        >
          {titles[titleIndex].substring(0, charIndex)}
          <span className="typewriter-cursor" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 font-body"
        >
          1.5+ years shipping production-grade web apps. I build fast, secure,
          and intelligent products — from pixel-perfect UIs to LLM-powered
          backends.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold glow-cyan pulse-ring transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-primary text-primary font-body font-semibold hover:bg-primary/10 transition-all hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-6 sm:left-10 glass-card px-4 py-2 flex items-center gap-2 text-sm font-body z-10"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-accent green-pulse inline-block" />
        <span className="text-foreground">⚡ Available for Opportunities</span>
      </motion.div>

      {/* Social icons */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-6 sm:right-10 flex items-center gap-4 z-10"
      >
        {[
          { icon: Linkedin, href: LINKEDIN },
          { icon: Github, href: "https://github.com/Shubhamp9693" },
          { icon: Mail, href: "mailto:rajp9693759948@gmail.com" },
        ].map(({ icon: Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_hsl(190,100%,50%)] transition-all"
          >
            <Icon size={20} />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-down text-muted-foreground z-10">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
