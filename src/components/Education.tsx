import {
  GraduationCap,
  Award,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institute: "Maulana Abul Kalam Azad University of Technology",
      board: "",
      year: "2022 – 2025",
      grade: "GPA: 6.88/10",
    },
    {
      degree: "Diploma – Computer Science & Technology",
      institute: "Nalhati Government Polytechnic",
      board: "WBSCTE",
      year: "2019 – 2022",
      grade: "GPA: 8.1/10",
    },
  ];

  const certifications = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
    },
    {
      title: "ManageEngine Endpoint Management & Security (EMS)",
      issuer: "ManageEngine (Zoho Corp.)",
    },
    {
      title: "Cybersecurity Basic Concepts",
      issuer: "Cyber Security Centre of Excellence and WEBEL",
    },
    {
      title: "Go for Gold Program",
      issuer: "Accenture",
    },
    {
      title: "IT Course Certification",
      issuer: "APLL",
    },
  ];

  return (
    <section
      id="education"
      className="bg-muted/30 py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Education & Certifications
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Learning that supports
            <span className="block text-muted-foreground">
              real-world experience.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Academic foundations combined with industry-focused certifications
            across IT support, cybersecurity, and endpoint management.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-14"
        >
          {/* Education Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              <GraduationCap size={19} strokeWidth={1.8} />
            </div>

            <h3 className="text-lg font-semibold">
              Education
            </h3>
          </motion.div>

          {/* Education Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid gap-5 lg:grid-cols-2"
          >
            {education.map((item) => (
              <motion.article
                key={item.degree}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="rounded-2xl border border-border bg-background p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-7"
              >
                <div className="flex flex-col gap-5">

                  <div>
                    <h4 className="text-lg font-semibold leading-7">
                      {item.degree}
                    </h4>

                    <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.institute}
                    </p>

                    {item.board && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.board}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays size={15} />
                      {item.year}
                    </div>

                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">
                      {item.grade}
                    </span>
                  </div>

                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mt-16"
        >
          {/* Certifications Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
              <Award size={19} strokeWidth={1.8} />
            </div>

            <h3 className="text-lg font-semibold">
              Certifications
            </h3>
          </motion.div>

          {/* Certification Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((certification) => (
              <motion.article
                key={certification.title}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                    scale: 0.98,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="group rounded-2xl border border-border bg-background p-5 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex gap-4">

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <BadgeCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  <div>
                    <h4 className="text-sm font-semibold leading-6">
                      {certification.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {certification.issuer}
                    </p>
                  </div>

                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;