import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { GraduationCap, MapPin, Target, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Clyde Snyders" },
      {
        name: "description",
        content:
          "About Clyde Snyders — a Grade 10 student at Paterson High School in Gqeberha, South Africa, passionate about robotics, coding and science.",
      },
      { property: "og:title", content: "About — Clyde Snyders" },
      {
        property: "og:description",
        content:
          "Grade 10 student at Paterson High School, passionate about robotics, coding and science.",
      },
    ],
  }),
  component: AboutPage,
});

const FACTS = [
  { icon: GraduationCap, label: "School", value: "Paterson High School" },
  { icon: Target, label: "Grade", value: "Grade 10 · 2026" },
  { icon: MapPin, label: "Location", value: "Port Elizabeth, Eastern Cape" },
  { icon: Users, label: "Focus", value: "Code · Robotics · Science" },
];

function AboutPage() {
  return (
    <SiteShell>
      <section className="container-x py-20 md:py-28">
        <p className="text-eyebrow animate-fade-in">About me</p>
        <h1 className="mt-5 max-w-4xl text-display text-5xl md:text-7xl animate-fade-up">
          A young builder with a love for{" "}
          <span className="italic font-light brand-gradient-text">
            tech, science, and learning.
          </span>
        </h1>

        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              I'm <span className="text-ink font-medium">Clyde Snyders</span>, a
              passionate young innovator and student at Paterson High School in
              Gqeberha, South Africa. I have a strong interest in robotics,
              coding, and science, and I enjoy using technology to solve
              real-world problems and create meaningful projects.
            </p>
            <p>
              My focus is to keep improving through small projects, competitions,
              and everyday world challenges.
            </p>
            <p>
              I value teamwork and mentorship. The support of teachers, mentors,
              peers, and friends has helped me grow, and I am grateful for that
              guidance.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
              {FACTS.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="surface-card flex items-center gap-4 p-5 hover:[&]:surface-card-hover"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                      {label}
                    </p>
                    <p className="mt-0.5 font-medium text-ink">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
