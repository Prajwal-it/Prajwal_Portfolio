
import { personalInfo } from "../lib/data";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { ChevronDown, Download, Eye } from "lucide-react";

export default function Hero() {
  const { displayText, isTyping } = useTypingEffect(personalInfo.roles, 85, 45, 2200);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[1]"
        style={{
          background: "linear-gradient(to top, var(--bg), transparent)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: "#22c55e" }}
          />
          <span className="text-sm" style={{ color: "#22c55e" }}>
            Available for Work
          </span>
        </div>

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

        {/* Typing effect — rotating roles / skills */}
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

        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10"
          style={{ color: "var(--muted)", lineHeight: 1.7 }}
        >
          Passionate about building scalable web applications with the MERN stack. AWS
          Certified • Hackathon enthusiast • Open to new opportunities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm relative overflow-hidden hover:opacity-95 transition-opacity"
            style={{
              background: "linear-gradient(135deg, var(--indigo), var(--cyan))",
              color: "white",
              border: "none",
              cursor: "none",
              fontFamily: "inherit",
            }}
            aria-label="View my work"
          >
            <Eye size={16} />
            View My Work
          </button>

          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm hover:border-indigo-500 hover:text-indigo-400 transition-colors"
            style={{
              background: "transparent",
              border: "1px solid rgba(99,102,241,0.4)",
              color: "var(--text)",
              cursor: "none",
              fontFamily: "inherit",
              textDecoration: "none",
            }}
            aria-label="Download resume"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>

      <button
        type="button"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
        style={{ color: "var(--muted)", background: "none", border: "none", cursor: "none" }}
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
