import { Link } from "@tanstack/react-router";
import { Mail, Github, Instagram, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-eyebrow">Clyde Snyders</p>
            <h3 className="mt-4 text-display text-3xl md:text-4xl">
              Building, learning,
              <br />
              <span className="italic font-light">one project at a time.</span>
            </h3>
            <p className="mt-6 max-w-md text-ink-soft">
              Grade 10 student from Gqeberha, South Africa. Open to mentorship,
              collaboration, and new opportunities.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium uppercase tracking-widest text-ink-soft">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/about", "About"],
                ["/achievements", "Achievements"],
                ["/projects", "Projects"],
                ["/resources", "Resources"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-ink hover:text-brand transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-medium uppercase tracking-widest text-ink-soft">
              Connect
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:clydesnyders17@gmail.com"
                  className="group flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:border-brand"
                >
                  <span className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-brand" />
                    clydesnyders17@gmail.com
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/clydesnyders05-oss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:border-brand"
                >
                  <span className="flex items-center gap-3">
                    <Github className="h-4 w-4 text-brand" />
                    github.com/clydesnyders05-oss
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/c.snyders.05?igsh=aDRxZTF5MG5rdzQy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 transition-colors hover:border-brand"
                >
                  <span className="flex items-center gap-3">
                    <Instagram className="h-4 w-4 text-brand" />
                    @c.snyders.05
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-ink-soft md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Clyde Snyders. Crafted with care in South Africa.</p>
          <p className="font-mono">v2 — Editorial Edition</p>
        </div>
      </div>
    </footer>
  );
}
