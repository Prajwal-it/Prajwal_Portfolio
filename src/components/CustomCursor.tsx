
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      dot.style.transform += " scale(2)";
      ring.style.width = "40px";
      ring.style.height = "40px";
      ring.style.borderColor = "rgba(6, 182, 212, 0.8)";
    };

    const onMouseLeaveLink = () => {
      ring.style.width = "32px";
      ring.style.height = "32px";
      ring.style.borderColor = "rgba(99, 102, 241, 0.6)";
    };

    document.addEventListener("mousemove", onMouseMove);
    animate();

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width: 8,
          height: 8,
          background: "var(--indigo)",
          top: 0,
          left: 0,
          transition: "transform 0.05s ease",
          boxShadow: "0 0 8px rgba(99,102,241,0.8)",
        }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: 32,
          height: 32,
          border: "1.5px solid rgba(99, 102, 241, 0.6)",
          top: 0,
          left: 0,
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
        }}
        aria-hidden="true"
      />
    </>
  );
}
