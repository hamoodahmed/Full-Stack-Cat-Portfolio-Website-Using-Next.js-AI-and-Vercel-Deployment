import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const techLinks = [
    { label: "React.js", href: "#" },
    { label: "Next.js", href: "#" },
    { label: "TypeScript", href: "#" },
    { label: "Nest.js", href: "#" },
    { label: "Supabase", href: "#" },
  ];

  const socialLinks = [
    { icon: "bi-instagram", href: "#", label: "Instagram" },
    { icon: "bi-linkedin", href: "#", label: "LinkedIn" },
    { icon: "bi-github", href: "#", label: "GitHub" },
    { icon: "bi-twitter-x", href: "#", label: "Twitter" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span>🐾</span> Whiskers
            </Link>
            <p>
              A premium full-stack cat portfolio built with love using React,
              Next.js, TypeScript, Nest.js and Supabase. A little corner of
              the internet made with lots of love for cats. 😻
            </p>
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  <i className={`bi ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="footer-col">
            <h4>Tech Stack</h4>
            <ul>
              {techLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Get In Touch</h4>
            <ul>
              <li><a href="mailto:hello@whiskers.dev">📧 hello@whiskers.dev</a></li>
              <li><a href="#">📍 Pakistan 🇵🇰</a></li>
              <li><a href="#">🐾 Cat Lover Since Always</a></li>
            </ul>
            <div style={{ marginTop: "20px" }}>
              <Link href="/contact" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: "13px" }}>
                Contact Us <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © {year} Whiskers. Made with ❤️ for cats. Built with Next.js & TypeScript.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
