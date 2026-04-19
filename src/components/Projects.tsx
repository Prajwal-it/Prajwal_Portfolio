
import { useState } from "react";
import { projects, Project } from "../lib/data";
import { Star } from "lucide-react";

const categories = ["All", "Full Stack", "Frontend"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span
          className="text-xs tracking-widest uppercase font-mono"
          style={{ color: "var(--indigo)" }}
        >
          Things I&apos;ve built
        </span>
        <h2
          className="text-4xl md:text-5xl font-black mt-2"
          style={{ fontFamily: "monospace" }}
        >
          My <span className="gradient-text">Projects</span>
        </h2>
      </div>

      <div className="flex justify-center gap-3 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors"
            style={{
              background: active === cat ? "var(--indigo)" : "transparent",
              color: active === cat ? "white" : "var(--muted)",
              border: `1px solid ${active === cat ? "var(--indigo)" : "rgba(99,102,241,0.2)"}`,
              cursor: "none",
              fontFamily: "inherit",
            }}
            aria-label={`Filter by ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {active === "All" && (
        <div className="glass rounded-3xl p-8 mb-8 relative overflow-hidden">
          <div
            className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{ background: "rgba(99,102,241,0.2)" }}
          >
            <Star size={12} style={{ color: "var(--indigo)" }} />
            <span className="text-xs" style={{ color: "var(--indigo)" }}>
              Featured
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>
                {projects[0].category}
              </div>
              <h3 className="text-2xl font-bold mb-3">{projects[0].title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: "rgba(99,102,241,0.15)",
                      color: "var(--indigo)",
                      border: "1px solid rgba(99,102,241,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="h-48 rounded-2xl flex items-center justify-center text-6xl"
              style={{
                background: `linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.2))`,
                border: "1px solid rgba(99,102,241,0.15)",
              }}
            >
              {projects[0].emoji}
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered
          .filter((p) => !(active === "All" && p.featured))
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="glass rounded-2xl overflow-hidden group relative border border-transparent hover:border-indigo-500/20 transition-colors"
      style={{ cursor: "none" }}
    >
      <div
        className="h-40 flex items-center justify-center text-5xl relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.15))`,
          borderBottom: "1px solid rgba(99,102,241,0.1)",
        }}
      >
        {project.emoji}
      </div>

      <div className="p-5">
        <div className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--muted)" }}>
          {project.category}
        </div>
        <h3 className="font-bold text-base mb-2">{project.title}</h3>
        <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs"
              style={{
                background: "rgba(99,102,241,0.1)",
                color: "var(--indigo)",
                border: "1px solid rgba(99,102,241,0.15)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
