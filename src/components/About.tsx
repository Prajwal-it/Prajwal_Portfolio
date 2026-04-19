import { personalInfo, stats } from "../lib/data";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";

function StatCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  return (
    <div
      className="glass rounded-2xl p-5 text-center group hover:border-indigo-500 transition-colors"
      style={{ borderColor: "rgba(99,102,241,0.2)" }}
    >
      <div
        className="text-3xl font-black gradient-text"
        style={{ fontFamily: "monospace" }}
      >
        {value}
        {suffix}
      </div>
      <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span
          className="text-xs tracking-widest uppercase font-mono"
          style={{ color: "var(--indigo)" }}
        >
          Get to know me
        </span>
        <h2
          className="text-4xl md:text-5xl font-black mt-2 glitch"
          style={{ fontFamily: "monospace" }}
        >
          About <span className="gradient-text">Me</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Profile — circular like Instagram / Facebook */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative w-56 h-56 md:w-64 md:h-64 shrink-0">
            <div
              className="absolute inset-0 rounded-full p-[3px]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(99,102,241,0.9), rgba(6,182,212,0.55))",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-full h-full rounded-full overflow-hidden relative"
                style={{ background: "var(--card)" }}
              >
                <img
                  src={personalInfo.profileAvatarUrl}
                  alt={`${personalInfo.name} profile photo`}
                  width={256}
                  height={256}
                  className="object-cover w-full h-full object-top"
                  loading="eager"
                />
              </div>
            </div>
            <div
              className="absolute -bottom-1 -right-1 glass px-3 py-1.5 rounded-full flex items-center gap-2 text-xs shadow-lg"
              style={{ borderColor: "rgba(99,102,241,0.25)" }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "#22c55e" }}
              />
              <span style={{ color: "#22c55e" }}>Available</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 order-1 md:order-2">
          <p
            className="text-base md:text-[1.05rem] leading-[1.75] tracking-wide"
            style={{ color: "var(--muted)" }}
          >
            {personalInfo.bio}
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
              <MapPin size={16} style={{ color: "var(--indigo)" }} />
              {personalInfo.location}
            </div>
            <div className="flex items-center gap-3 text-sm" style={{ color: "var(--muted)" }}>
              <Mail size={16} style={{ color: "var(--indigo)" }} />
              {personalInfo.email}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass p-3 rounded-xl hover:border-indigo-500/50 transition-colors"
              style={{ color: "var(--text)", cursor: "none" }}
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass p-3 rounded-xl hover:border-indigo-500/50 transition-colors"
              style={{ color: "var(--text)", cursor: "none" }}
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}
