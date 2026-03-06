// import { motion } from "framer-motion";
// import { useState } from "react";
// import ProjectModal, { type ProjectData } from "./ProjectModal";

// const DRIVE_LINK =
//   "https://drive.google.com/drive/folders/1Zz2MRHZvY0XeFsM_mG0h7nQFaXV4Em7V";

// const projects: ProjectData[] = [
//   {
//     tag: "E-Commerce · Next.js",
//     tagColor: "primary",
//     title: "Print On Demand",
//     desc: "Custom apparel commerce platform — design upload/preview flows, live mockups, variant selection, order tracking, vendor integrations & dashboard widgets.",
//     skills: ["Next.js", "Node.js", "REST APIs", "MongoDB", "Code Splitting"],
//     fullDescription:
//       "A full-featured custom apparel e-commerce platform enabling users to upload their own designs, preview them on products in real-time with live mockups, select variants (size, color, material), and track orders end-to-end. The platform includes vendor management dashboards, analytics widgets, and integrates with third-party printing services for seamless order fulfillment.",
//     features: [
//       "Design upload & real-time product preview with live mockups",
//       "Variant selection system (size, color, material) with dynamic pricing",
//       "Order tracking with status updates and notification system",
//       "Vendor integration dashboard with analytics widgets",
//       "Code-split architecture for optimized loading performance",
//       "Responsive UI built from Figma designs with pixel-perfect accuracy",
//     ],
//     challenges: [
//       "Optimized large image processing on the client using canvas APIs and lazy loading",
//       "Implemented complex state management for real-time mockup previews across variants",
//       "Built a scalable order pipeline with webhook-based vendor notifications",
//       "Achieved 40%+ improvement in page load via code splitting and dynamic imports",
//     ],
//     siteLink: "",
//     driveLink:
//       "https://drive.google.com/file/d/1G_vC21gTBUnj8e-b0EvFsYhtgwLR7BEH/view?usp=sharing",
//   },
//   {
//     tag: "AI · SaaS · Coaching",
//     tagColor: "accent",
//     title: "CoociCoach",
//     desc: "AI-enhanced coaching & video analysis platform with LLM-based session insights, drill tracking, video previews, Redux global state & role-based routing.",
//     skills: [
//       "React",
//       "Redux Toolkit",
//       "LLM APIs",
//       "OpenAI",
//       "REST APIs",
//       "RBAC",
//     ],
//     fullDescription:
//       "An AI-powered coaching and video analysis SaaS platform designed for sports coaches and athletes. The platform leverages LLM APIs to generate session insights, analyze performance trends, and provide AI-driven drill recommendations. Features include video upload & preview, drill tracking dashboards, Redux-powered global state, and role-based access control for coaches, athletes, and admins.",
//     features: [
//       "AI-powered session analysis using OpenAI LLM APIs for coaching insights",
//       "Video upload, preview, and annotation system for performance review",
//       "Drill tracking dashboard with progress analytics and trend charts",
//       "Redux Toolkit global state management for complex data flows",
//       "Role-based routing and access control (Coach / Athlete / Admin)",
//       "Real-time notifications for session updates and AI-generated reports",
//     ],
//     challenges: [
//       "Designed iterative prompt engineering pipeline to improve LLM output quality by 35%",
//       "Handled large video file uploads with chunked processing and progress indicators",
//       "Built role-based routing with protected routes and permission-aware UI rendering",
//       "Optimized Redux store structure for minimal re-renders across deeply nested components",
//     ],
//     // siteLink: DRIVE_LINK,
//     driveLink: DRIVE_LINK,
//   },
//   {
//     tag: "B2B · Hotel Ops",
//     tagColor: "primary",
//     title: "KnectHotel",
//     desc: "Full hotel management suite — onboarding, room/facility management, RBAC, coupons, real-time chat (Socket.IO), webhook notifications & complex form validation.",
//     skills: ["React Hook Form", "Zod", "Socket.IO", "JWT", "RBAC", "Webhooks"],
//     fullDescription:
//       "A comprehensive B2B hotel management platform covering the entire operations lifecycle — from hotel onboarding and room/facility management to coupon systems, real-time guest-staff chat via Socket.IO, webhook-based notifications, and complex multi-step form validation. The system supports multiple user roles with granular permissions and JWT-secured API endpoints.",
//     features: [
//       "Multi-step hotel onboarding flow with complex form validation (React Hook Form + Zod)",
//       "Room & facility management with availability calendars and pricing rules",
//       "Real-time chat between guests and staff using Socket.IO",
//       "Coupon and promotion management system with usage tracking",
//       "Webhook-based notification pipeline for booking events and alerts",
//       "RBAC with granular permissions for Admin, Manager, Staff, and Guest roles",
//     ],
//     challenges: [
//       "Built complex multi-step forms with cross-field validation and conditional logic using Zod schemas",
//       "Implemented real-time bidirectional chat with typing indicators and message persistence",
//       "Designed webhook infrastructure for reliable event delivery with retry mechanisms",
//       "Handled concurrent booking conflicts with optimistic locking and real-time UI updates",
//     ],
//     siteLink: DRIVE_LINK,
//     driveLink: DRIVE_LINK,
//   },
//   {
//     tag: "E-Commerce · AI Search",
//     tagColor: "accent",
//     title: "Naturally Good",
//     desc: "E-commerce storefront with AI-powered product search & recommendations using LLM prompt-driven logic, cart/checkout, order tracking & SEO optimization.",
//     skills: [
//       "Next.js",
//       "OpenAI API",
//       "Prompt Engineering",
//       "Node.js",
//       "MongoDB",
//       "SEO",
//     ],
//     fullDescription:
//       "A modern e-commerce storefront featuring AI-powered product search and personalized recommendations using LLM prompt-driven logic. The platform includes a full cart/checkout flow, order tracking, and comprehensive SEO optimization with meta tags, sitemaps, and structured data. The AI search understands natural language queries and maps them to relevant products using prompt engineering techniques.",
//     features: [
//       "AI-powered natural language product search using OpenAI API",
//       "Personalized product recommendations with LLM prompt-driven logic",
//       "Full cart management and multi-step checkout flow",
//       "Order tracking with status updates and email notifications",
//       "Comprehensive SEO: meta tags, sitemaps, JSON-LD structured data",
//       "Server-side rendering with Next.js for optimal Core Web Vitals",
//     ],
//     challenges: [
//       "Engineered prompts to accurately map natural language queries to product attributes",
//       "Built recommendation engine with contextual awareness of user browsing history",
//       "Optimized MongoDB aggregation pipelines for fast product filtering and search",
//       "Achieved 95+ Lighthouse SEO score with SSR, meta tags, and structured data",
//     ],
//     siteLink: DRIVE_LINK,
//     driveLink: DRIVE_LINK,
//   },
// ];

// const ProjectsSection = () => {
//   const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
//     null,
//   );

//   return (
//     <section id="projects" className="relative py-24 px-6 z-10">
//       <div className="container mx-auto max-w-6xl">
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-primary text-sm font-body uppercase tracking-widest mb-3"
//         >
//           // PROJECTS
//         </motion.p>
//         <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
//           Featured Projects
//         </h2>
//         <p className="text-muted-foreground font-body mb-12">
//           Production-grade apps, AI integrations & full-stack systems
//         </p>

//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map((project, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1, duration: 0.5 }}
//               whileHover={{ y: -8, boxShadow: "0 0 30px rgba(0,212,255,0.15)" }}
//               className="glass-card p-6 sm:p-8 group transition-all duration-300 cursor-pointer"
//               onClick={() => setSelectedProject(project)}
//             >
//               <span
//                 className={`inline-block px-3 py-1 text-xs font-body rounded-full mb-4 ${
//                   project.tagColor === "accent"
//                     ? "bg-accent/10 text-accent border border-accent/20"
//                     : "bg-primary/10 text-primary border border-primary/20"
//                 }`}
//               >
//                 {project.tag}
//               </span>

//               <h3 className="font-heading text-xl font-bold text-foreground mb-3">
//                 {project.title}
//               </h3>
//               <p className="text-muted-foreground text-sm font-body mb-6 leading-relaxed">
//                 {project.desc}
//               </p>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 {project.skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className="px-2 py-1 text-xs font-body rounded bg-muted/50 text-muted-foreground border border-primary/10"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setSelectedProject(project);
//                   }}
//                   className="px-4 py-2 text-sm font-body rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
//                 >
//                   View Project →
//                 </button>
//                 <a
//                   href={DRIVE_LINK}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={(e) => e.stopPropagation()}
//                   className="px-4 py-2 text-sm font-body rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors"
//                 >
//                   View Docs →
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Drive banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mt-12 glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
//         >
//           <p className="text-foreground font-body text-sm">
//             📂 All project docs, test cases & requirement specs
//           </p>
//           <a
//             href={DRIVE_LINK}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold glow-cyan hover:scale-105 transition-transform"
//           >
//             Open Google Drive Folder →
//           </a>
//         </motion.div>
//       </div>

//       <ProjectModal
//         project={selectedProject}
//         onClose={() => setSelectedProject(null)}
//       />
//     </section>
//   );
// };

// export default ProjectsSection;
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal, { type ProjectData } from "./ProjectModal";

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1Zz2MRHZvY0XeFsM_mG0h7nQFaXV4Em7V";

/**
 * UI-only flags for this section.
 * - hideProjectButton: hides the "View Project →" button for that card
 */
type ProjectDataWithUI = ProjectData & {
  hideProjectButton?: boolean;
};

const projects: ProjectDataWithUI[] = [
  {
    tag: "E-Commerce · Next.js",
    tagColor: "primary",
    title: "Print On Demand",
    desc: "Custom apparel commerce platform — design upload/preview flows, live mockups, variant selection, order tracking, vendor integrations & dashboard widgets.",
    skills: ["Next.js", "Node.js", "REST APIs", "MongoDB", "Code Splitting"],
    fullDescription:
      "A full-featured custom apparel e-commerce platform enabling users to upload their own designs, preview them on products in real-time with live mockups, select variants (size, color, material), and track orders end-to-end. The platform includes vendor management dashboards, analytics widgets, and integrates with third-party printing services for seamless order fulfillment.",
    features: [
      "Design upload & real-time product preview with live mockups",
      "Variant selection system (size, color, material) with dynamic pricing",
      "Order tracking with status updates and notification system",
      "Vendor integration dashboard with analytics widgets",
      "Code-split architecture for optimized loading performance",
      "Responsive UI built from Figma designs with pixel-perfect accuracy",
    ],
    challenges: [
      "Optimized large image processing on the client using canvas APIs and lazy loading",
      "Implemented complex state management for real-time mockup previews across variants",
      "Built a scalable order pipeline with webhook-based vendor notifications",
      "Achieved 40%+ improvement in page load via code splitting and dynamic imports",
    ],
    siteLink: "",
    driveLink:
      "https://drive.google.com/file/d/1G_vC21gTBUnj8e-b0EvFsYhtgwLR7BEH/view?usp=sharing",
    hideProjectButton: true, // ✅ hide View Project for this item
    thumb: "/projects/pod/pod.png",
    bg: "/projects/pod/pod.png",
  },
  {
    tag: "B2B · Hotel Ops",
    tagColor: "primary",
    title: "KnectHotel",
    desc: "Full hotel management suite — onboarding, room/facility management, RBAC, coupons, real-time chat (Socket.IO), webhook notifications & complex form validation.",
    skills: ["React Hook Form", "Zod", "Socket.IO", "JWT", "RBAC", "Webhooks"],
    fullDescription:
      "A comprehensive B2B hotel management platform covering the entire operations lifecycle — from hotel onboarding and room/facility management to coupon systems, real-time guest-staff chat via Socket.IO, webhook-based notifications, and complex multi-step form validation. The system supports multiple user roles with granular permissions and JWT-secured API endpoints.",
    features: [
      "Multi-step hotel onboarding flow with complex form validation (React Hook Form + Zod)",
      "Room & facility management with availability calendars and pricing rules",
      "Real-time chat between guests and staff using Socket.IO",
      "Coupon and promotion management system with usage tracking",
      "Webhook-based notification pipeline for booking events and alerts",
      "RBAC with granular permissions for Admin, Manager, Staff, and Guest roles",
    ],
    challenges: [
      "Built complex multi-step forms with cross-field validation and conditional logic using Zod schemas",
      "Implemented real-time bidirectional chat with typing indicators and message persistence",
      "Designed webhook infrastructure for reliable event delivery with retry mechanisms",
      "Handled concurrent booking conflicts with optimistic locking and real-time UI updates",
    ],
    siteLink: "https://www.knecthotel.com/",
    driveLink: "",
    thumb: "/projects/knecthotel/knecthotel.png",
    bg: "/projects/knecthotel/knecthotel.png",
  },
  {
    tag: "AI · SaaS · Coaching",
    tagColor: "accent",
    title: "CoociCoach",
    desc: "AI-enhanced coaching & video analysis platform with LLM-based session insights, drill tracking, video previews, Redux global state & role-based routing.",
    skills: [
      "React",
      "Redux Toolkit",
      "LLM APIs",
      "OpenAI",
      "REST APIs",
      "RBAC",
    ],
    fullDescription:
      "An AI-powered coaching and video analysis SaaS platform designed for sports coaches and athletes. The platform leverages LLM APIs to generate session insights, analyze performance trends, and provide AI-driven drill recommendations. Features include video upload & preview, drill tracking dashboards, Redux-powered global state, and role-based access control for coaches, athletes, and admins.",
    features: [
      "AI-powered session analysis using OpenAI LLM APIs for coaching insights",
      "Video upload, preview, and annotation system for performance review",
      "Drill tracking dashboard with progress analytics and trend charts",
      "Redux Toolkit global state management for complex data flows",
      "Role-based routing and access control (Coach / Athlete / Admin)",
      "Real-time notifications for session updates and AI-generated reports",
    ],
    challenges: [
      "Designed iterative prompt engineering pipeline to improve LLM output quality by 35%",
      "Handled large video file uploads with chunked processing and progress indicators",
      "Built role-based routing with protected routes and permission-aware UI rendering",
      "Optimized Redux store structure for minimal re-renders across deeply nested components",
    ],
    driveLink:
      "https://drive.google.com/file/d/1VX4tV7TtBZTyvBqX358I7H7OL08NlIDS/view?usp=sharing",
    hideProjectButton: true, // ✅ hide View Project for this item
    thumb: "/projects/cc/cc.png",
    bg: "/projects/cc/cc.png",
  },
  {
    tag: "E-Commerce · AI Search",
    tagColor: "accent",
    title: "Naturally Good",
    desc: "E-commerce storefront with AI-powered product search & recommendations using LLM prompt-driven logic, cart/checkout, order tracking & SEO optimization.",
    skills: [
      "Next.js",
      "OpenAI API",
      "Prompt Engineering",
      "Node.js",
      "MongoDB",
      "SEO",
    ],
    fullDescription:
      "A modern e-commerce storefront featuring AI-powered product search and personalized recommendations using LLM prompt-driven logic. The platform includes a full cart/checkout flow, order tracking, and comprehensive SEO optimization with meta tags, sitemaps, and structured data. The AI search understands natural language queries and maps them to relevant products using prompt engineering techniques.",
    features: [
      "AI-powered natural language product search using OpenAI API",
      "Personalized product recommendations with LLM prompt-driven logic",
      "Full cart management and multi-step checkout flow",
      "Order tracking with status updates and email notifications",
      "Comprehensive SEO: meta tags, sitemaps, JSON-LD structured data",
      "Server-side rendering with Next.js for optimal Core Web Vitals",
    ],
    challenges: [
      "Engineered prompts to accurately map natural language queries to product attributes",
      "Built recommendation engine with contextual awareness of user browsing history",
      "Optimized MongoDB aggregation pipelines for fast product filtering and search",
      "Achieved 95+ Lighthouse SEO score with SSR, meta tags, and structured data",
    ],
    siteLink: "https://www.naturallygood.in/",
    driveLink: DRIVE_LINK,
    thumb: "/projects/ng/ng.png",
    bg: "/projects/ng/ng.png",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] =
    useState<ProjectDataWithUI | null>(null);

  return (
    <section id="projects" className="relative py-24 px-6 z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-primary text-sm font-body uppercase tracking-widest mb-3"
        ></motion.p>

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
              whileHover={{
                y: -8,
                boxShadow: "0 0 30px rgba(0,212,255,0.15)",
              }}
              className="glass-card p-6 sm:p-8 group transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {project.thumb && (
                <div className="w-full h-44 mb-4 rounded-xl overflow-hidden border border-primary/10 bg-muted/20">
                  <img
                    src={project.thumb}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.log("Image failed to load:", project.thumb);
                    }}
                  />
                </div>
              )}
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
                {/* ✅ Hide "View Project" for specific items */}
                {!project.hideProjectButton && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="px-4 py-2 text-sm font-body rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    View Project →
                  </button>
                )}

                {/* Docs button uses project.driveLink if present, else default DRIVE_LINK */}
                <a
                  href={project.driveLink || DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="px-4 py-2 text-sm font-body rounded-lg border border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors"
                >
                  View Docs →
                </a>
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
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold glow-cyan hover:scale-105 transition-transform"
          >
            Open Google Drive Folder →
          </a>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
