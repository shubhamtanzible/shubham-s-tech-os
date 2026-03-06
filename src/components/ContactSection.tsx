import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Code, Send } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/shubhampathak1/";

const contacts = [
  { icon: Mail, label: "rajp9693759948@gmail.com", href: "mailto:rajp9693759948@gmail.com" },
  { icon: Phone, label: "+91-9693759948", href: "tel:+919693759948" },
  { icon: Linkedin, label: "LinkedIn", href: LINKEDIN },
  { icon: Github, label: "GitHub", href: "https://github.com/Shubhamp9693" },
  { icon: Code, label: "LeetCode", href: "https://leetcode.com/rajp9693759948" },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct LinkedIn message URL with prefilled message
    const messageText = `Hi Shubham! My name is ${formData.name} (${formData.email}). ${formData.message}`;
    const linkedinMessageUrl = `https://www.linkedin.com/messaging/compose/?to=shubhampathak1&body=${encodeURIComponent(messageText)}`;
    window.open(linkedinMessageUrl, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-body uppercase tracking-widest mb-3"
        >
          // CONTACT
        </motion.p>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Let's Build Something
        </h2>
        <p className="text-muted-foreground font-body mb-12">
          Open to full-time roles, freelance projects & AI-focused product teams.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-primary/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold glow-cyan hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              {sent ? "✓ Opening LinkedIn..." : (
                <>Send via LinkedIn <Send size={16} /></>
              )}
            </button>
            <p className="text-muted-foreground text-xs font-body text-center">
              This will open LinkedIn messaging with your message pre-filled
            </p>
          </motion.form>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {contacts.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-4 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all group block"
              >
                <c.icon size={20} className="text-primary" />
                <span className="text-foreground text-sm font-body group-hover:text-primary transition-colors">
                  {c.label}
                </span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-muted-foreground text-sm font-body">
          <p>Designed & Built by Shubham Pathak · {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
