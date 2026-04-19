
import { experiences } from "../lib/data";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs tracking-widest uppercase font-mono" style={{ color: "var(--indigo)" }}>
          Where I&apos;ve worked
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "monospace" }}>
          <span className="gradient-text">Experience</span>
        </h2>
      </div>

      <div className="relative">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
          style={{ background: "linear-gradient(to bottom, transparent, var(--indigo), var(--cyan), transparent)" }}
        />

        <div className="flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
            >
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full hidden md:block z-10"
                style={{
                  background: exp.badgeColor,
                  boxShadow: `0 0 16px ${exp.badgeColor}80`,
                }}
              />

              <div className={`md:[direction:ltr] ${i % 2 !== 0 ? "md:col-start-2" : ""}`}>
                <div
                  className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/20 transition-colors"
                  style={{ cursor: "none" }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(90deg, transparent, ${exp.badgeColor}, transparent)` }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-2"
                        style={{ background: `${exp.badgeColor}20`, color: exp.badgeColor }}
                      >
                        <Briefcase size={10} />
                        {exp.type}
                      </div>
                      <h3 className="text-lg font-bold">{exp.company}</h3>
                      <p className="font-medium" style={{ color: exp.badgeColor }}>{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-xs" style={{ color: "var(--muted)" }}>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: exp.badgeColor }} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} style={{ color: exp.badgeColor }} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.badgeColor }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
