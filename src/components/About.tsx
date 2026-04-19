import { personalInfo, stats } from "../lib/data";
import { MapPin, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <motion.div
      whileHover={{ y: -5, borderColor: "rgba(99,102,241,0.5)" }}
      className="glass rounded-2xl p-5 text-center group transition-colors"
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
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span
          className="text-xs tracking-widest uppercase font-mono"
          style={{ color: "var(--indigo)" }}
        >
          Get to know me
        </span>
        <h2
          className="text-4xl md:text-5xl font-black mt-2"
          style={{ fontFamily: "monospace" }}
        >
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64 shrink-0 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="absolute inset-0 rounded-full p-[3px] transition-transform"
              style={{
                background:
                  "linear-gradient(145deg, rgba(99,102,241,0.9), rgba(6,182,212,0.55))",
                boxShadow: "0 0 30px rgba(99,102,241,0.3)",
              }}
            >
              <div
                className="w-full h-full rounded-full overflow-hidden relative"
                style={{ background: "var(--card)" }}
              >
                <img
                  src={personalInfo.profileAvatarUrl}
                  alt={`${personalInfo.name} profile photo`}
                  className="object-cover w-full h-full object-top group-hover:scale-110 transition-transform duration-500"
                  loading="eager"
                />
              </div>
            </motion.div>
            <div
              className="absolute -bottom-1 -right-1 glass px-3 py-1.5 rounded-full flex items-center gap-2 text-xs shadow-lg"
              style={{ borderColor: "rgba(99,102,241,0.25)" }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                style={{ background: "#22c55e" }}
              />
              <span style={{ color: "#22c55e" }}>Available</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <p
            className="text-base leading-[1.6] tracking-wide"
            style={{ color: "var(--muted)" }}
          >
            {personalInfo.bio}
          </p>

          <div className="flex flex-col gap-2">
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
            <motion.a
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass p-3 rounded-xl hover:border-indigo-500/50 transition-colors"
              style={{ color: "var(--text)", cursor: "none" }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass p-3 rounded-xl hover:border-indigo-500/50 transition-colors"
              style={{ color: "var(--text)", cursor: "none" }}
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <StatCard
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
