import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { ArrowUpRight, Github, Globe } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Clyde Snyders" },
      {
        name: "description",
        content:
          "A small selection of projects Clyde Snyders is building — from this portfolio to robotics and science showcases.",
      },
      { property: "og:title", content: "Projects — Clyde Snyders" },
      {
        property: "og:description",
        content:
          "A selection of projects in code, robotics and science.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  tag: string;
  title: string;
  body: string;
  stack: string[];
  links: { label: string; href: string; external?: boolean; icon?: typeof Github }[];
  status?: "live" | "soon" | "research";
};

const PROJECTS: Project[] = [
  {
    tag: "Portfolio",
    title: "Personal Portfolio Website",
    body:
      "This website is designed and built from scratch with a cleaner layout, better hierarchy, and a more professional first impression.",
    stack: ["React", "TypeScript", "TanStack", "Tailwind"],
    links: [
      { label: "Live Site", href: "/", icon: Globe },
      {
        label: "GitHub",
        href: "https://github.com/clydesnyders05-oss",
        external: true,
        icon: Github,
      },
    ],
    status: "live",
  },
  {
    tag: "Coming Soon",
    title: "My Month Calendar",
    body:
      "A simple and useful calendar project for planning school work, competitions, deadlines, and upcoming goals. A practical tool for daily use.",
    stack: ["Planning", "UI Design", "Productivity"],
    links: [{ label: "Ask for updates", href: "/contact" }],
    status: "soon",
  },
  {
    tag: "Research",
    title: "Science & Robotics Showcase",
    body:
      "A space for future project write-ups, competition summaries, experiment notes, and robot build logs. A way to show progress over time.",
    stack: ["Science", "Robotics", "Innovation"],
    links: [{ label: "See achievements", href: "/achievements" }],
    status: "research",
  },
];

const STATUS_STYLE: Record<NonNullable<Project["status"]>, string> = {
  live: "bg-brand-soft text-brand",
  soon: "bg-secondary text-ink-soft",
  research: "bg-accent text-accent-foreground",
};

function ProjectsPage() {
  return (
    <SiteShell>
      <section className="container-x py-20 md:py-28">
        <p className="text-eyebrow">Projects</p>
        <h1 className="mt-5 max-w-4xl text-display text-5xl md:text-7xl">
          A small selection of{" "}
          <span className="italic font-light">what I am building.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          Some projects are shipped, some are in progress, others are still
          ideas. I'll keep adding here as they grow.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="surface-card group relative flex flex-col p-7 hover:[&]:surface-card-hover"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                  {p.tag}
                </span>
                {p.status && (
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${STATUS_STYLE[p.status]}`}
                  >
                    {p.status === "live"
                      ? "● Live"
                      : p.status === "soon"
                        ? "Coming soon"
                        : "Ongoing"}
                  </span>
                )}
              </div>

              <h2 className="mt-5 text-display text-3xl leading-tight transition-colors group-hover:text-brand">
                {p.title}
              </h2>
              <p className="mt-3 flex-1 text-ink-soft">{p.body}</p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-soft"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                {p.links.map((l) => {
                  const Icon = l.icon;
                  if (l.external) {
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3.5 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-foreground hover:text-background"
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {l.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={l.label}
                      to={l.href as "/" | "/contact" | "/achievements"}
                      className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3.5 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-foreground hover:text-background"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5" />}
                      {l.label}
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
