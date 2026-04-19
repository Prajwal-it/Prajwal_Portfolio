
import { useState, useEffect } from "react";
import { personalInfo } from "../lib/data";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer
        className="relative py-16 px-6 md:px-12 mt-16"
        style={{ borderTop: "1px solid rgba(99,102,241,0.1)" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-px"
          style={{ background: "linear-gradient(90deg, transparent, var(--indigo), var(--cyan), transparent)" }}
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div>
              <div
                className="text-3xl font-black tracking-tighter gradient-text mb-3"
                style={{ fontFamily: "monospace" }}
              >
                {personalInfo.initials}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                MERN Stack Developer passionate about building beautiful, performant web applications.
              </p>
              <div className="flex gap-3 mt-4">
                {[
                  { icon: <Github size={16} />, href: personalInfo.github, label: "GitHub" },
                  { icon: <Linkedin size={16} />, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: <Twitter size={16} />, href: personalInfo.twitter, label: "Twitter" },
                  { icon: <Mail size={16} />, href: `mailto:${personalInfo.email}`, label: "Email" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="glass w-9 h-9 rounded-xl flex items-center justify-center hover:text-indigo-400 transition-colors"
                    style={{ color: "var(--muted)", cursor: "none" }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--indigo)" }}>
                Navigation
              </h4>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: "var(--muted)", background: "none", border: "none", cursor: "none", fontFamily: "inherit" }}
                      aria-label={`Go to ${link.label}`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--indigo)" }}>
                Contact
              </h4>
              <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <span>{personalInfo.email}</span>
                <span>{personalInfo.location}</span>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
                  <span style={{ color: "#22c55e" }}>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs"
            style={{ borderTop: "1px solid rgba(99,102,241,0.1)", color: "var(--muted)" }}
          >
            <span>
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </span>
            <span>
              Built with ❤️ using{" "}
              <span style={{ color: "var(--indigo)" }}>Next.js</span> &{" "}
              <span style={{ color: "var(--cyan)" }}>Tailwind CSS</span>
            </span>
          </div>
        </div>
      </footer>

      {showTop && (
        <button
          type="button"
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl flex items-center justify-center hover:opacity-90 transition-opacity"
          style={{
            background: "linear-gradient(135deg, var(--indigo), var(--cyan))",
            cursor: "none",
            border: "none",
            boxShadow: "0 0 20px rgba(99,102,241,0.4)",
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={18} color="white" />
        </button>
      )}
    </>
  );
}
