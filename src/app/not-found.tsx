import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Whiskers",
};

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
        background:
          "radial-gradient(circle at 50% 50%, rgba(255,240,231,0.6) 0%, transparent 60%)",
      }}
    >
      <div>
        <div style={{ fontSize: "100px", marginBottom: "24px" }}>🐾</div>
        <h1
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "clamp(60px, 10vw, 120px)",
            fontWeight: 800,
            color: "var(--primary)",
            lineHeight: 1,
            marginBottom: "8px",
          }}
        >
          404
        </h1>
        <h2
          style={{
            fontFamily: "'Baloo 2', cursive",
            fontSize: "28px",
            color: "var(--dark)",
            marginBottom: "16px",
          }}
        >
          Oops! The cat ran away with this page.
        </h2>
        <p
          style={{
            color: "var(--text)",
            fontSize: "15px",
            maxWidth: "480px",
            margin: "0 auto 36px",
            lineHeight: "1.8",
          }}
        >
          Looks like this page has gone on a cat adventure and can&apos;t be found.
          Let&apos;s get you back home! 😸
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            🏠 Go Home
          </Link>
          <Link href="/blog" className="btn btn-outline">
            📝 Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
