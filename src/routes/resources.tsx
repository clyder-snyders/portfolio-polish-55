import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { ArrowUpRight, BookOpen, Compass } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Reading & Resources — Clyde Snyders" },
      {
        name: "description",
        content:
          "Books and links that support Clyde's learning journey in coding, robotics and electronics.",
      },
      { property: "og:title", content: "Reading & Resources — Clyde Snyders" },
      {
        property: "og:description",
        content: "Books and links supporting curiosity, discipline, and a learning mindset.",
      },
    ],
  }),
  component: ResourcesPage,
});

const BOOKS = [
  {
    emoji: "📘",
    title: "Python Crash Course",
    body: "A friendly way to strengthen Python fundamentals and practice by building real projects.",
  },
  {
    emoji: "📗",
    title: "How to Think Like a Computer Scientist",
    body: "Great for learning problem solving, logic, and how programmers approach challenges.",
  },
  {
    emoji: "📙",
    title: "Make: Electronics",
    body: "Useful for robotics and hands-on building because it connects circuits, testing, and practical learning.",
  },
];

const LINKS = [
  { label: "FreeCodeCamp", href: "https://www.freecodecamp.org/" },
  { label: "My GitHub", href: "https://github.com/clydesnyders05-oss" },
];

function ResourcesPage() {
  return (
    <SiteShell>
      <section className="container-x py-20 md:py-28">
        <p className="text-eyebrow">Reading & Resources</p>
        <h1 className="mt-5 max-w-4xl text-display text-5xl md:text-7xl">
          Books and links that{" "}
          <span className="italic font-light">support the journey.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          A sharper, more useful section that shows curiosity, discipline, and a
          learning mindset.
        </p>

        <div className="mt-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
          <BookOpen className="h-3.5 w-3.5" /> 3 Books to Read
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {BOOKS.map((b) => (
            <article
              key={b.title}
              className="surface-card group flex flex-col gap-4 p-7 hover:[&]:surface-card-hover"
            >
              <span className="text-5xl transition-transform group-hover:scale-110 group-hover:rotate-[-6deg]">
                {b.emoji}
              </span>
              <h3 className="text-display text-2xl leading-tight">{b.title}</h3>
              <p className="text-ink-soft">{b.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
            >
              {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>

        {/* 12-week guide highlight */}
        <div className="mt-20 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-eyebrow">12-Week Guide</p>
            <h2 className="mt-4 text-display text-3xl md:text-4xl leading-tight">
              "How to Learn Coding in 2026
              <br />
              <span className="italic font-light">even with AI"</span>
            </h2>
          </div>
          <div className="md:col-span-7">
            <div
              className="relative overflow-hidden rounded-[2rem] border border-border p-8 md:p-10"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--brand) 10%, var(--surface-elevated)), var(--surface-elevated))",
              }}
            >
              <Compass className="h-8 w-8 text-brand" />
              <p className="mt-4 text-ink-soft">
                Contact me for my 12-week guide. It is designed to help
                beginners stay focused, build real projects, and use AI as a
                helper instead of a shortcut. Ideal for students who want
                structure, confidence, and a clear path from beginner to
                building real websites and small apps.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:scale-[1.03] hover:bg-brand"
              >
                Request the guide <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
