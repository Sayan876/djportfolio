import {
  Code2,
  HeartHandshake,
  Droplets,
  TreePine,
} from "lucide-react";

const Projects = () => {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MongoDB",
  ];

  return (
    <section
      id="projects"
      className="bg-background py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Projects & Activities
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Work beyond
            <span className="block text-muted-foreground">
              the workplace.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            A combination of technical projects and meaningful contributions
            to the community.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mt-14">
          <article className="group overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid lg:grid-cols-[1.1fr_1fr]">

              {/* Project Visual */}
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-muted/50 p-8 sm:p-12">
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-400/10" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-background shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <Code2
                    size={42}
                    strokeWidth={1.4}
                    className="text-blue-600 dark:text-blue-400"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-center p-7 sm:p-10">

                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Project
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Waste Food Management System
                </h3>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                  A web-based food redistribution system designed to help
                  minimize food wastage by facilitating the redistribution of
                  surplus food.
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </article>
        </div>

        {/* Community Activities */}
        <div className="mt-16">

          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              <HeartHandshake
                size={19}
                strokeWidth={1.8}
              />
            </div>

            <h3 className="text-lg font-semibold">
              Community involvement
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Purulia Foundation */}
            <article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-7">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  <TreePine
                    size={21}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    Active Social Worker
                  </h4>

                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Purulia Foundation · Since 2019
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Active member of Purulia Foundation, contributing to community
                welfare initiatives and helping organize blood donation camps,
                tree plantation drives, and other social welfare activities.
              </p>

            </article>

            {/* Blood Donation */}
            <article className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-7">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                  <Droplets
                    size={21}
                    strokeWidth={1.7}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">
                    Active Blood Donor
                  </h4>

                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    Regular Contributor
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                Regular contributor to blood donation drives, supporting
                community initiatives and helping make blood available to
                people in need.
              </p>

            </article>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;