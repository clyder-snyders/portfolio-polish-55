import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Award, Trophy, Globe, Medal } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — Clyde Snyders" },
      {
        name: "description",
        content:
          "Medals, competitions and milestones from Clyde Snyders' journey through robotics, science fairs and hackathons.",
      },
      { property: "og:title", content: "Achievements — Clyde Snyders" },
      {
        property: "og:description",
        content:
          "Medals, competitions and milestones in robotics, science fairs and hackathons.",
      },
    ],
  }),
  component: AchievementsPage,
});

const SUMMARY = [
  { value: "2×", label: "Gold · Science Expo", icon: Medal },
  { value: "1×", label: "WRO 4th Place", icon: Trophy },
  { value: "1×", label: "Springbots Gold", icon: Award },
  { value: "1×", label: "International Rep.", icon: Globe },
  { value: "1×", label: "ISF Bronze", icon: Medal },
  { value: "1×", label: "2nd Hackathon", icon: Trophy },
];

const TIMELINE = [
  {
    year: "2026",
    title: "118th out of 181 countries: First Global Challenge",
    body:
      "I was honoured to represent South Africa as the Head Programmer for the Springbots team (TEAM SA) at the First Global Challenge in Panama — an international STEM competition often called the \"Olympics of Robotics.\" I worked alongside talented students from around the world and expanded my global perspective on innovation and technology.",
  },
  {
    year: "2026",
    title: "2nd Place: My first Hackathon",
    body:
      "I led my team to a second-place finish at a major hackathon, an experience that strengthened both my leadership and problem-solving skills.",
  },
  {
    year: "2025",
    title: "Gold Medal: Regional Science Expo",
    body:
      "Awarded a gold medal for the second consecutive year and won Best Category in Physics. It reflected a strong interest in experimentation and discovery.",
  },
  {
    year: "2025",
    title: "Gold Medal: Springbots Robotics",
    body:
      "Won gold at the regional Springbots robotics competition and later placed 6th nationally while helping design and program robots with my team.",
  },
  {
    year: "2025",
    title: "4th Place: World Robot Olympiad",
    body:
      "Secured 4th place in the World Robot Olympiad, competing with talented students from other schools while staying focused under pressure.",
  },
  {
    year: "2024",
    title: "Gold Medal: Regional Science Fair",
    body:
      "Secured gold in the Engineering category at the regional science fair while competing with strong projects from across the region.",
  },
  {
    year: "2024",
    title: "Bronze Medal: International Science Fair",
    body:
      "Won bronze in the Engineering category at the International Science Fair and showed creativity and resilience on a global stage.",
  },
  {
    year: "2024",
    title: "Bronze Medal: World Robot Olympiad",
    body:
      "Achieved bronze at WRO, representing the Eastern Cape internationally and collaborating with different teams.",
  },
];

function AchievementsPage() {
  return (
    <SiteShell>
      <section className="container-x py-20 md:py-28">
        <p className="text-eyebrow">Achievements</p>
        <h1 className="mt-5 max-w-4xl text-display text-5xl md:text-7xl">
          Milestones that shaped my{" "}
          <span className="italic font-light">journey so far.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-soft">
          These are the moments that show growth, consistency, and the results
          of learning through science and technology.
        </p>

        {/* Summary tiles */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {SUMMARY.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="surface-card group p-5 text-center hover:[&]:surface-card-hover"
            >
              <Icon className="mx-auto h-5 w-5 text-brand transition-transform group-hover:scale-110" />
              <p className="mt-3 text-display text-3xl">{value}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <ol className="relative space-y-3 border-l border-border pl-6 md:pl-10">
            {TIMELINE.map((item) => (
              <li
                key={item.title}
                className="relative -ml-[34px] md:-ml-[50px]"
              >
                <div className="surface-card group flex flex-col gap-4 p-6 pl-12 md:p-8 md:pl-16 hover:[&]:surface-card-hover">
                  <span
                    aria-hidden
                    className="absolute left-3 top-7 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background md:left-5"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand transition-all group-hover:scale-150" />
                  </span>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-brand">
                      {item.year}
                    </span>
                    <h3 className="text-display text-2xl md:text-3xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-ink-soft leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface p-6 text-sm text-ink-soft">
          <span className="font-medium text-ink">Note: </span>I did not achieve
          these things on my own. I received support and guidance from mentors,
          teachers, peers, and friends, and I appreciate their contribution.
        </div>
      </section>
    </SiteShell>
  );
}
