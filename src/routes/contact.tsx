import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell } from "@/components/SiteShell";
import { Mail, Github, Instagram, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Clyde Snyders" },
      {
        name: "description",
        content:
          "Get in touch with Clyde Snyders for mentorship, collaboration, school invitations or opportunities.",
      },
      { property: "og:title", content: "Contact — Clyde Snyders" },
      {
        property: "og:description",
        content: "Open to mentorship, collaboration, and new opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

const ROLES = [
  "Mentor",
  "Teacher / School",
  "University / Admissions",
  "Company / Recruiter",
  "Collaborator",
  "Other",
];

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "clydesnyders17@gmail.com",
    href: "mailto:clydesnyders17@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/clydesnyders05-oss",
    href: "https://github.com/clydesnyders05-oss",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@c.snyders.05",
    href: "https://www.instagram.com/c.snyders.05?igsh=aDRxZTF5MG5rdzQy",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Portfolio message from ${data.get("name") || "a visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nRole: ${data.get("role")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:clydesnyders17@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <SiteShell>
      <section className="container-x py-20 md:py-28">
        <p className="text-eyebrow">Contact</p>
        <h1 className="mt-5 max-w-4xl text-display text-5xl md:text-7xl">
          Get in <span className="italic font-light">touch.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          I'm always open to new challenges, mentorship, collaboration, and
          opportunities. Whether you're a mentor, school, organisation, or
          someone interested in my work — I'd love to connect.
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          {/* Channels */}
          <div className="md:col-span-5 space-y-3">
            {CHANNELS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="surface-card group flex items-center gap-4 p-5 hover:[&]:surface-card-hover"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                    {label}
                  </p>
                  <p className="mt-0.5 truncate font-medium text-ink">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="md:col-span-7 surface-card p-7 md:p-10 space-y-5"
          >
            <h2 className="text-display text-2xl">Send a message</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Your name" required />
              <Field
                name="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                I am a…
              </label>
              <select
                name="role"
                required
                defaultValue=""
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-ink outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
              >
                <option value="" disabled>
                  Select one
                </option>
                {ROLES.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about why you're reaching out…"
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-all hover:scale-[1.01] hover:bg-brand sm:w-auto"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Opening your email…
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
