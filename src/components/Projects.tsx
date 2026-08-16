
import {
  Code2,
  HeartHandshake,
  Droplets,
  TreePine,
} from "lucide-react";

import { motion } from "framer-motion";

const Projects = () => {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MongoDB",
  ];

  const communityActivities = [
    {
      icon: TreePine,
      title: "Active Social Worker",
      subtitle: "Purulia Foundation · Since 2019",
      description:
        "Active member of Purulia Foundation, contributing to community welfare initiatives and helping organize blood donation camps, tree plantation drives, and other social welfare activities.",
    },
    {
      icon: Droplets,
      title: "Active Blood Donor",
      subtitle: "Regular Contributor",
      description:
        "Regular contributor to blood donation drives, supporting community initiatives and helping make blood available to people in need.",
    },
  ];

  return (
    <section
      id="projects"
      className="overflow-hidden bg-background py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >
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
        </motion.div>

        {/* Featured Project */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            y: -4,
          }}
          className="group mt-14 overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
        >
          <div className="grid lg:grid-cols-[1.1fr_1fr]">

            {/* Project Visual */}
            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-muted/50 p-8 sm:p-12">

              {/* Background Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl dark:bg-blue-400/10" />

              {/* Secondary Glow */}
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-blue-600/5 blur-3xl dark:bg-blue-400/5" />

              {/* Project Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.06,
                  rotate: 2,
                }}
                className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-border bg-background shadow-sm"
              >
                <Code2
                  size={42}
                  strokeWidth={1.4}
                  className="text-blue-600 dark:text-blue-400"
                />
              </motion.div>
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
                {technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: 0.15 + index * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Community Activities */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-16"
        >

          {/* Community Heading */}
          <div className="mb-7 flex items-center gap-3">

            <motion.div
              whileHover={{
                scale: 1.06,
                rotate: 3,
              }}
              transition={{
                duration: 0.2,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
            >
              <HeartHandshake
                size={19}
                strokeWidth={1.8}
              />
            </motion.div>

            <h3 className="text-lg font-semibold">
              Community involvement
            </h3>
          </div>

          {/* Community Cards */}
          <div className="grid gap-5 md:grid-cols-2">

            {communityActivities.map((activity, index) => {
              const Icon = activity.icon;

              return (
                <motion.article
                  key={activity.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-7"
                >
                  <div className="flex gap-4">

                    {/* Activity Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.06,
                        rotate: index === 0 ? 3 : -3,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                      />
                    </motion.div>

                    <div>
                      <h4 className="text-lg font-semibold">
                        {activity.title}
                      </h4>

                      <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                        {activity.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {activity.description}
                  </p>
                </motion.article>
              );
            })}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;