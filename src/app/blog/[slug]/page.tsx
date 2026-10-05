import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Whiskers Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Post Hero */}
      <section
        style={{
          paddingTop: "100px",
          paddingBottom: "0",
          background:
            "radial-gradient(circle at 10% 20%, rgba(255,240,231,0.8) 0%, transparent 30%)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 0 40px" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "14px",
                marginBottom: "28px",
              }}
            >
              <i className="bi bi-arrow-left" /> Back to Blog
            </Link>

            <span className="small-title">
              {post.emoji} {post.category}
            </span>

            <h1
              style={{
                fontFamily: "'Baloo 2', cursive",
                fontSize: "clamp(32px,5vw,54px)",
                lineHeight: "1.1",
                margin: "14px 0 18px",
                color: "var(--dark)",
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                display: "flex",
                gap: "20px",
                color: "var(--text-light)",
                fontSize: "13px",
                marginBottom: "32px",
              }}
            >
              <span><i className="bi bi-calendar3" /> {post.date}</span>
              <span><i className="bi bi-clock" /> {post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
        <Image
          src={post.image}
          alt={post.title}
          width={900}
          height={450}
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
            borderRadius: "30px",
            boxShadow: "var(--shadow-lg)",
          }}
        />
      </div>

      {/* Post Content */}
      <section style={{ padding: "60px 0 80px" }}>
        <div className="container">
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.9",
              color: "var(--text)",
            }}
          >
            <p style={{ fontSize: "17px", fontWeight: 500, color: "var(--dark)", marginBottom: "28px" }}>
              {post.excerpt}
            </p>

            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h3
                    key={i}
                    style={{
                      fontFamily: "'Baloo 2', cursive",
                      fontSize: "24px",
                      color: "var(--dark)",
                      margin: "36px 0 12px",
                    }}
                  >
                    {para.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              // Handle bold within paragraph
              const rendered = para.replace(
                /\*\*(.+?)\*\*/g,
                `<strong style="color:var(--dark);font-weight:700">$1</strong>`
              );
              return (
                <p
                  key={i}
                  style={{ marginBottom: "20px" }}
                  dangerouslySetInnerHTML={{ __html: rendered }}
                />
              );
            })}
          </div>

          {/* Tags */}
          <div
            style={{
              maxWidth: "760px",
              margin: "48px auto 0",
              borderTop: "1px solid var(--border)",
              paddingTop: "32px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--dark)" }}>Tags:</span>
            {["cats", post.category, "whiskers", "cat-life"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "var(--primary-light)",
                  color: "var(--primary-dark)",
                  padding: "6px 14px",
                  borderRadius: "50px",
                  fontSize: "12px",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                #{tag.toLowerCase().replace(" ", "-")}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section style={{ background: "#fff8f4", padding: "80px 0" }}>
        <div className="container">
          <div className="section-heading" style={{ marginBottom: "40px" }}>
            <span className="small-title">READ MORE</span>
            <h2>More <span>cat stories</span></h2>
          </div>

          <div className="blog-grid">
            {related.map((p) => (
              <article className="blog-card" key={p.id}>
                <div className="blog-card-img-wrap">
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={240}
                    className="blog-card-img"
                  />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-category">{p.emoji} {p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{p.readTime} min read</span>
                    <Link href={`/blog/${p.slug}`} className="blog-read-more">
                      Read More <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
