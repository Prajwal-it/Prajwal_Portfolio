
import { achievements } from "../lib/data";

const typeColors: Record<string, string> = {
  Award: "#f59e0b",
  Recognition: "#8b5cf6",
  Certification: "#FF9900",
  Hackathon: "#06b6d4",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs tracking-widest uppercase font-mono" style={{ color: "var(--indigo)" }}>
          Recognition & milestones
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "monospace" }}>
          My <span className="gradient-text">Achievements</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((achievement) => {
          const color = typeColors[achievement.type] || "var(--indigo)";
          return (
            <div
              key={achievement.id}
              className="glass rounded-2xl p-6 relative overflow-hidden flex flex-col gap-4 hover:border-indigo-500/20 transition-colors"
              style={{ cursor: "none" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                {achievement.icon}
              </div>

              <div
                className="inline-flex w-fit items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                style={{ background: `${color}20`, color }}
              >
                {achievement.type}
              </div>

              <div>
                <h3 className="font-bold text-base mb-2 leading-snug">{achievement.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                  {achievement.description}
                </p>
              </div>

              {achievement.highlight && (
                <div
                  className="absolute top-4 right-4 text-xs"
                  style={{ color }}
                  aria-label="Highlighted achievement"
                >
                  ★
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
