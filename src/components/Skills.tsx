
import { skills } from "../lib/data";

const allSkills = Object.values(skills).flat();
const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

const skillIcons: Record<string, string> = {
  "React.js": "⚛️", "HTML5": "🌐", "CSS3": "🎨", "JavaScript": "🟨",
  "TypeScript": "🔷", "Tailwind CSS": "💨", "Node.js": "🟢", "Express.js": "🚂",
  "REST APIs": "🔌", "JWT Auth": "🔐", "MongoDB": "🍃", "Mongoose": "📦",
  "MySQL": "🐬", "AWS": "☁️", "Git": "🌿", "GitHub": "🐙", "Vercel": "▲",
  "Postman": "📮", "VS Code": "💻", "Linux": "🐧", "npm": "📦",
};

function SkillPill({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="glass flex items-center gap-3 px-5 py-3 rounded-full mx-3 select-none whitespace-nowrap group border border-transparent hover:border-opacity-50 transition-colors"
      style={{ minWidth: "max-content", cursor: "none", borderColor: "transparent" }}
    >
      <span className="text-lg">{skillIcons[name] || "🔧"}</span>
      <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
        {name}
      </span>
      <span
        className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: color }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="text-center">
          <span
            className="text-xs tracking-widest uppercase font-mono"
            style={{ color: "var(--indigo)" }}
          >
            What I work with
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mt-2 glitch"
            style={{ fontFamily: "monospace" }}
          >
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>
      </div>

      <div className="marquee-container py-3">
        <div className="marquee-track">
          {[...row1, ...row1].map((skill, i) => (
            <SkillPill key={`r1-${i}`} name={skill.name} color={skill.color} />
          ))}
        </div>
      </div>

      <div className="marquee-container py-3 mt-4">
        <div className="marquee-track-reverse">
          {[...row2, ...row2].map((skill, i) => (
            <SkillPill key={`r2-${i}`} name={skill.name} color={skill.color} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="glass rounded-2xl p-5">
            <h3
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--indigo)" }}
            >
              {category}
            </h3>
            <div className="flex flex-col gap-2">
              {categorySkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--muted)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: skill.color }}
                  />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
