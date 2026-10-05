"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    interest: "general",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "", interest: "general" });
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <ScrollReveal>
          <div className="section-heading">
            <span className="small-title">GET IN TOUCH</span>
            <h2>Say <span>Meow!</span></h2>
            <p>
              Have a question, want to share your cat photos, or interested in
              connecting as fellow pet lovers? We&apos;d love to hear from you!
            </p>
          </div>
        </ScrollReveal>

        {/* Info Cards */}
        <ScrollReveal delay={100}>
          <div className="contact-info-grid">
            {[
              { icon: "📧", title: "Email Us", desc: "hello@whiskers.dev\nWe reply within 24 hours." },
              { icon: "📍", title: "Location", desc: "Pakistan 🇵🇰\nAvailable online worldwide." },
              { icon: "🐾", title: "Pet Interest?", desc: "If you love cats and want to connect, reach out! We welcome all cat lovers." },
            ].map((card) => (
              <div className="contact-info-card" key={card.title}>
                <span className="info-icon">{card.icon}</span>
                <h4>{card.title}</h4>
                <p style={{ whiteSpace: "pre-line" }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal delay={200}>
          <div className="contact-form-wrap">
            {success ? (
              <div className="form-success">
                <span>🎉</span>
                <div>
                  <strong>Message sent successfully!</strong>
                  <p style={{ margin: 0, fontSize: "13px", marginTop: "4px" }}>
                    Thank you! We&apos;ll get back to you within 24 hours. 🐾
                  </p>
                </div>
              </div>
            ) : (
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="interest">I&apos;m interested in</label>
                    <select
                      id="interest"
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="pets">Pet Adoption / Pets Interest</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="blog">Blog Contribution</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here... 🐱"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && (
                  <div
                    style={{
                      background: "#fef2f2",
                      border: "1px solid #fecaca",
                      color: "#dc2626",
                      padding: "14px 20px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    ⚠️ {error}
                  </div>
                )}

                <div className="form-submit">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                    id="submitContactBtn"
                  >
                    {submitting ? (
                      <>Sending... <i className="bi bi-hourglass-split" /></>
                    ) : (
                      <>Send Message <i className="bi bi-send" /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
