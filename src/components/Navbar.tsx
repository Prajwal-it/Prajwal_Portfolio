
import { useState, useEffect } from "react";
import { personalInfo } from "../lib/data";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{
          background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(99,102,241,0.1)" : "none",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-black tracking-tighter gradient-text hover:opacity-90 transition-opacity"
          style={{ fontFamily: "monospace", cursor: "none" }}
          aria-label="Go to top"
        >
          {personalInfo.initials}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="relative text-sm tracking-wide group"
                style={{
                  color: isActive ? "var(--indigo)" : "var(--muted)",
                  cursor: "none",
                  background: "none",
                  border: "none",
                  fontFamily: "inherit",
                  transition: "color 0.2s",
                }}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-200"
                  style={{
                    width: isActive ? "100%" : "0%",
                    background: "var(--indigo)",
                  }}
                />
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            style={{
              background: "transparent",
              border: "1px solid var(--indigo)",
              color: "var(--indigo)",
              cursor: "none",
              fontFamily: "inherit",
            }}
            aria-label="Hire me"
          >
            Hire Me
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          style={{ color: "var(--text)", background: "none", border: "none", cursor: "none" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            style={{ border: "none", cursor: "default" }}
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-72 z-40 glass flex flex-col pt-24 px-8 gap-6 md:hidden shadow-xl">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="text-left text-lg font-medium"
                style={{
                  color: activeSection === link.href.slice(1) ? "var(--indigo)" : "var(--text)",
                  background: "none",
                  border: "none",
                  cursor: "none",
                  fontFamily: "inherit",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="mt-4 px-5 py-3 rounded-full text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, var(--indigo), var(--cyan))",
                color: "white",
                border: "none",
                cursor: "none",
                fontFamily: "inherit",
              }}
            >
              Hire Me
            </button>
          </div>
        </>
      )}
    </>
  );
}
