
import { useState, FormEvent } from "react";
import { personalInfo } from "../lib/data";
import { Mail, Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [toast, setToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setToast(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setToast(false), 4000);
      setTimeout(() => setStatus("idle"), 5000);
    }, 1800);
  };

  const socials = [
    { icon: <Mail size={18} />, label: "Email", href: `mailto:${personalInfo.email}`, value: personalInfo.email },
    { icon: <FaGithub size={18} />, label: "GitHub", href: personalInfo.github, value: "Prajwal-it" },
    { icon: <FaLinkedin size={18} />, label: "LinkedIn", href: personalInfo.linkedin, value: "prajwalbanthiya" },
    { icon: <FaTwitter size={18} />, label: "Twitter", href: personalInfo.twitter, value: "@prajwalbanthiya" },
  ];

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs tracking-widest uppercase font-mono" style={{ color: "var(--indigo)" }}>
          Let&apos;s connect
        </span>
        <h2 className="text-4xl md:text-5xl font-black mt-2" style={{ fontFamily: "monospace" }}>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="mt-4 text-sm max-w-md mx-auto" style={{ color: "var(--muted)" }}>
          I&apos;m currently available for new opportunities. Whether you have a project in mind or just want to say hi, my inbox is open!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-5">Contact Info</h3>
            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                  style={{ color: "var(--text)", textDecoration: "none", cursor: "none" }}
                  aria-label={s.label}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(99,102,241,0.15)",
                      border: "1px solid rgba(99,102,241,0.2)",
                      color: "var(--indigo)",
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "var(--muted)" }}>{s.label}</div>
                    <div className="text-sm font-medium">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6 flex items-center gap-4">
            <span className="text-2xl">☁️</span>
            <div>
              <div className="font-semibold text-sm">AWS Certified</div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>
                Amazon Web Services — Cloud Practitioner
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Prajwal" />
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
            </div>
            <Field label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry" />
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="rounded-xl px-4 py-3 text-sm resize-none focus:outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "var(--text)",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--indigo)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.2)")}
                aria-label="Message"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background:
                  status === "success"
                    ? "rgba(34,197,94,0.2)"
                    : "linear-gradient(135deg, var(--indigo), var(--cyan))",
                color: status === "success" ? "#22c55e" : "white",
                border: status === "success" ? "1px solid rgba(34,197,94,0.4)" : "none",
                cursor: status === "loading" ? "wait" : "none",
                fontFamily: "inherit",
              }}
              aria-label="Send message"
            >
              {status === "loading" && <Loader size={16} className="animate-spin" />}
              {status === "success" && <CheckCircle size={16} />}
              {status === "error" && <AlertCircle size={16} />}
              {status === "idle" && <Send size={16} />}
              {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Try Again" : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {toast && (
        <div
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl"
          style={{
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.4)",
            backdropFilter: "blur(16px)",
          }}
        >
          <CheckCircle size={18} style={{ color: "#22c55e" }} />
          <span className="text-sm font-medium" style={{ color: "#22c55e" }}>
            Message sent successfully!
          </span>
        </div>
      )}
    </section>
  );
}

function Field({
  label, name, value, onChange, placeholder, type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
        className="rounded-xl px-4 py-3 text-sm focus:outline-none transition-all"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(99,102,241,0.2)",
          color: "var(--text)",
          fontFamily: "inherit",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--indigo)")}
        onBlur={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.2)")}
        aria-label={label}
      />
    </div>
  );
}
