import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { galleryItems, techStack } from "@/data";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whiskers | Cat Portfolio — Home",
  description:
    "Welcome to Whiskers — a premium full-stack cat portfolio. Discover adorable cat stories, photo galleries, blog posts and more. Built with Next.js & TypeScript.",
};

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-badge">
                🐾 Welcome to my little world
              </div>

              <h1>
                Life is better
                <br />
                <span>with cats.</span>
              </h1>

              <p className="hero-desc">
                Welcome to Whiskers — a playful, premium corner dedicated to cats,
                their adventures, personalities, and all the happiness they bring
                into our lives. Built full-stack with Next.js & TypeScript.
              </p>

              <div className="hero-buttons">
                <Link href="/#about" className="btn btn-primary">
                  Discover More <i className="bi bi-arrow-right" />
                </Link>
                <Link href="/blog" className="btn btn-outline">
                  Read Our Blog
                </Link>
              </div>

              <div className="hero-stats">
                <div className="hero-stat">
                  <strong>25+</strong>
                  <span>Adventures</span>
                </div>
                <div className="hero-stat">
                  <strong>15K+</strong>
                  <span>Followers</span>
                </div>
                <div className="hero-stat">
                  <strong>100%</strong>
                  <span>Cat Love</span>
                </div>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="hero-image-area">
              <div className="hero-image-bg" />
              <div className="hero-image-wrap">
                <Image
                  src="/hero-cat.jpg"
                  alt="Beautiful tabby cat"
                  width={500}
                  height={560}
                  className="hero-cat-img"
                  priority
                />

                <div className="floating-card floating-card-1">
                  <span className="card-emoji">😻</span>
                  <span className="card-label">So cute!</span>
                </div>

                <div className="floating-card floating-card-2">
                  <span className="card-emoji">❤️</span>
                  <span className="card-label">Cat lover</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="about section-padding">
        <div className="container">
          <div className="about-grid">
            {/* Image */}
            <ScrollReveal>
              <div className="about-image-area">
                <Image
                  src="/about-cat.jpg"
                  alt="Fluffy cat at window"
                  width={500}
                  height={520}
                  className="about-img"
                />
                <div className="about-badge">
                  <strong>5+</strong>
                  <span>Years of<br />Cat Love</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={150}>
              <div className="about-content">
                <span className="small-title">OUR STORY</span>

                <h3>Every cat has a story worth telling.</h3>

                <p>
                  Whiskers started with a simple idea — create a beautiful place where
                  people can celebrate the charm, personality and curiosity of cats.
                  From funny moments to adorable photographs, our little community is
                  all about sharing happiness one paw at a time.
                </p>

                <p>
                  If you are interested in pets and want to connect with fellow cat lovers,
                  we'd love to hear from you! This full-stack portfolio showcases the power
                  of modern web technologies like React, Next.js, TypeScript, Nest.js,
                  Angular, and Supabase — all in one beautiful cat-themed package. 🐾
                </p>

                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon-wrap">
                      <i className="bi bi-heart-fill" />
                    </div>
                    <div className="feature-item-text">
                      <h5>Lots of Love</h5>
                      <p>Everything we do comes from our deep love for cats.</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon-wrap">
                      <i className="bi bi-camera-fill" />
                    </div>
                    <div className="feature-item-text">
                      <h5>Beautiful Stories</h5>
                      <p>Sharing moments and memories that deserve to be remembered.</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon-wrap">
                      <i className="bi bi-code-slash" />
                    </div>
                    <div className="feature-item-text">
                      <h5>Built Full-Stack</h5>
                      <p>Powered by Next.js, TypeScript, Nest.js & Supabase.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== WHY CATS ===== */}
      <section className="why-cats section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <span className="small-title">WHY CATS?</span>
              <h2>Things we <span>love</span></h2>
              <p>Cats bring something magical into our lives every single day.</p>
            </div>
          </ScrollReveal>

          <div className="features-grid">
            {[
              {
                icon: "😻",
                title: "Endless Cuteness",
                desc: "From tiny paws to sleepy faces, cats have a special talent for being utterly adorable.",
              },
              {
                icon: "🐾",
                title: "Unique Personalities",
                desc: "Every cat is different. Some are playful, some are lazy, and some are tiny troublemakers.",
              },
              {
                icon: "❤️",
                title: "Pure Happiness",
                desc: "A cat's presence can turn an ordinary day into something genuinely special and memorable.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="feature-card">
                  <span className="feature-card-icon">{item.icon}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section id="gallery" className="gallery section-padding">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <span className="small-title">CAT GALLERY</span>
              <h2>Little moments of <span>joy</span></h2>
              <p>A collection of our favourite furry friends in their natural habitats.</p>
            </div>
          </ScrollReveal>

          <div className="gallery-grid">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 80}>
                <div className="gallery-item">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={400}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-inner">
                      <h5>{item.title}</h5>
                      <span className="gallery-emoji">{item.emoji}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section id="tech" className="tech-stack">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading">
              <span className="small-title">TECHNOLOGIES</span>
              <h2>Built with the <span>best</span></h2>
              <p>
                This full-stack application uses cutting-edge modern technologies
                for the best performance, developer experience and user experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="tech-grid">
            {techStack.map((tech, i) => (
              <ScrollReveal key={tech.name} delay={i * 50}>
                <div className="tech-card">
                  <span className="tech-card-icon">{tech.icon}</span>
                  <h5>{tech.name}</h5>
                  <span>{tech.description}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta">
        <div className="container">
          <ScrollReveal>
            <div className="cta-box">
              <span className="cta-emoji">🐱</span>
              <h2>Want more adorable cat stories?</h2>
              <p>
                Visit our blog and discover the latest cat stories,
                tips, adventures and everything feline.
              </p>
              <Link href="/blog" className="btn btn-white">
                Explore Blog <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <ContactSection />
    </>
  );
}
