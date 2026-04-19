
import { education } from "../lib/data";
import { GraduationCap, MapPin, Calendar, CheckCircle, Clock } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs tracking-widest uppercase font-mono" style={{ color: "var(--indigo)" }}>
          Academic background
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "monospace" }}>
          My <span className="gradient-text">Education</span>
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="glass rounded-2xl p-7 relative overflow-hidden group hover:border-indigo-500/20 transition-colors"
            style={{ cursor: "none" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${edu.color}, transparent)` }}
            />

            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
              style={{ background: edu.color }}
            />

            <div className="pl-4">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap size={18} style={{ color: edu.color }} />
                    <h3 className="text-lg font-bold">{edu.degree}</h3>
                  </div>
                  <p className="font-semibold text-base" style={{ color: edu.color }}>
                    {edu.institution}
                  </p>
                </div>

                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: edu.status === "Pursuing" ? "rgba(34,197,94,0.15)" : "rgba(99,102,241,0.15)",
                    color: edu.status === "Pursuing" ? "#22c55e" : edu.color,
                    border: `1px solid ${edu.status === "Pursuing" ? "rgba(34,197,94,0.3)" : `${edu.color}40`}`,
                  }}
                >
                  {edu.status === "Pursuing" ? <Clock size={10} /> : <CheckCircle size={10} />}
                  {edu.status}
                </div>
              </div>

              <div className="flex flex-wrap gap-5 mb-5 text-xs" style={{ color: "var(--muted)" }}>
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} style={{ color: edu.color }} />
                  {edu.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={12} style={{ color: edu.color }} />
                  {edu.location}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: edu.color }} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
