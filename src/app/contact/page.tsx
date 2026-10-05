import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Whiskers Cat Portfolio",
  description:
    "Get in touch with the Whiskers team. We'd love to hear from you — whether you're a cat lover, want to collaborate, or are interested in pet adoption.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "45vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "72px",
          background:
            "radial-gradient(circle at 10% 20%, rgba(255,240,231,0.8) 0%, transparent 30%), radial-gradient(circle at 90% 80%, rgba(255,241,234,0.7) 0%, transparent 30%)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto", padding: "60px 0 40px" }}>
            <span className="hero-badge">📮 Say Hello</span>

            <h1
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "clamp(40px, 6vw, 70px)",
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: "-2px",
                marginTop: "20px",
                marginBottom: "16px",
                color: "var(--dark)",
              }}
            >
              Let&apos;s <span style={{ color: "var(--primary)" }}>Connect!</span>
            </h1>

            <p style={{ fontSize: "16px", lineHeight: "1.85", color: "var(--text)" }}>
              Whether you&apos;re a cat lover, a pet enthusiast, or want to collaborate —
              we&apos;re always happy to chat. Reach out and let&apos;s talk! 🐾
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
