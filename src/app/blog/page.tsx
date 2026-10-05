import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { blogPosts } from "@/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Whiskers Cat Portfolio",
  description:
    "Discover adorable cat stories, helpful tips, funny adventures and everything we love about our furry friends on the Whiskers Blog.",
};

export default function BlogPage() {
  return (
    <>
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero-content">
            <span className="hero-badge">📝 The Whiskers Journal</span>
            <h1>
              Stories from the{" "}
              <span style={{ color: "var(--primary)" }}>cat world.</span>
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "1.85", marginTop: "16px", color: "var(--text)" }}>
              Discover adorable stories, helpful tips, funny adventures and
              everything we love about our furry friends.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding" style={{ background: "white" }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-heading" style={{ marginBottom: "48px" }}>
              <span className="small-title">LATEST POSTS</span>
              <h2>
                Fresh from the <span>litter box</span>
              </h2>
              <p>
                {blogPosts.length} articles and counting — all about the beautiful world of cats.
              </p>
            </div>
          </ScrollReveal>

          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 80}>
                <article className="blog-card">
                  <div className="blog-card-img-wrap">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={800}
                      height={240}
                      className="blog-card-img"
                    />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-card-category">
                      {post.emoji} {post.category}
                    </span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <span className="blog-card-date">
                        <i className="bi bi-calendar3" /> {post.date} &nbsp;·&nbsp;
                        <i className="bi bi-clock" /> {post.readTime} min read
                      </span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="blog-read-more"
                      >
                        Read More <i className="bi bi-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <ScrollReveal>
            <div className="cta-box">
              <span className="cta-emoji">😻</span>
              <h2>Interested in pets?</h2>
              <p>
                If you love cats and are interested in adopting or connecting with
                fellow pet lovers, reach out — we&apos;d love to hear from you!
              </p>
              <Link href="/contact" className="btn btn-white">
                Get In Touch <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
