import { personalInfo } from "../lib/data";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { ChevronDown, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { displayText, isTyping } = useTypingEffect(personalInfo.roles, 85, 45, 2200);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16"
    >
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)",
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span
            className="w-2 h-2 rounded-full shrink-0 animate-pulse"
            style={{ background: "#22c55e" }}
          />
          <span className="text-sm" style={{ color: "#22c55e" }}>
            Available for Work
          </span>
        </motion.div>

        <h1
          className="text-6xl md:text-8xl font-black tracking-tighter mb-4 glitch select-none"
          style={{
            fontFamily: "monospace",
            lineHeight: 1.05,
          }}
        >
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
          <br />
          <span style={{ color: "var(--text)" }}>
            {personalInfo.name.split(" ")[1]}
          </span>
        </h1>

        <div className="flex items-center justify-center gap-1 flex-wrap mb-6 min-h-[2.75rem] md:min-h-[3.25rem]">
          <span className="text-xl md:text-2xl" style={{ color: "var(--muted)" }}>
            I&apos;m a{" "}
          </span>
          <span
            className="text-xl md:text-2xl font-bold"
            style={{ color: "var(--indigo)" }}
          >
            {displayText}
          </span>
          <span
            className="text-2xl font-thin inline-block w-2"
            style={{
              color: "var(--cyan)",
              opacity: isTyping ? 1 : 0.35,
              transition: "opacity 0.1s",
            }}
          >
            |
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg max-w-2xl mx-auto mb-10"
          style={{ color: "var(--muted)", lineHeight: 1.7 }}
        >
          Passionate about building scalable web applications with the MERN stack. AWS
          Certified • Hackathon enthusiast • Open to new opportunities.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm relative overflow-hidden transition-all hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, var(--indigo), var(--cyan))",
              color: "white",
              border: "none",
              cursor: "none",
              fontFamily: "inherit",
              boxShadow: "0 10px 20px -10px rgba(99,102,241,0.5)"
            }}
            aria-label="View my work"
          >
            <Eye size={16} className="group-hover:rotate-12 transition-transform" />
            View My Work
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1 }}
        type="button"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hover:opacity-100 transition-opacity"
        style={{ color: "var(--muted)", background: "none", border: "none", cursor: "none" }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
