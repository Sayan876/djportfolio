import {
  Building2,
  CalendarDays,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

const Experience = () => {
  const responsibilities = [
    "Provided technical support to users across Pan-India locations.",
    "Diagnosed and resolved hardware, operating system, application, and network-related issues.",
    "Managed incidents and service requests using ManageEngine ServiceDesk Plus.",
    "Performed Active Directory administration including user creation, password reset, account unlock, and access management.",
    "Managed IT assets and endpoints using Endpoint Central, including patching, deployment, and remote troubleshooting.",
    "Executed software installations and proxy configurations to ensure system readiness.",
    "Maintained detailed ticket logs, resolution records, and knowledge base documentation.",
    "Escalated unresolved issues to L2/L3 teams according to ITIL processes.",
  ];

  return (
    <section
      id="experience"
      className="bg-background py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
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
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Professional experience
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Hands-on experience supporting enterprise IT environments,
            resolving technical issues, and maintaining reliable IT
            operations.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mt-16">

          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[11px] top-2 hidden h-[calc(100%-8px)] w-px bg-border md:block"
          />

          <div className="relative md:pl-12">

            {/* Timeline Dot */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "backOut",
              }}
              className="absolute left-0 top-1 hidden h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-blue-600 md:flex dark:bg-blue-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white dark:bg-slate-950" />
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >

              {/* Header */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                  }}
                  className="flex gap-4"
                >
                  {/* Company Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
                  >
                    <Building2
                      size={23}
                      strokeWidth={1.7}
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      CMS IT Services Pvt. Ltd.
                    </h3>

                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      Technical Support | IT Service Desk Engineer | End User
                      Support
                    </p>
                  </div>
                </motion.div>

                {/* Date */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                  }}
                  className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground"
                >
                  <CalendarDays size={16} />
                  <span>Jul 2024 – Present</span>
                </motion.div>

              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="mt-6 border-t border-border pt-5"
              >
                <p className="text-sm text-muted-foreground">
                  Kolkata, India
                </p>
              </motion.div>

              {/* Responsibilities */}
              <div className="mt-7">

                <motion.h4
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.55,
                  }}
                  className="text-sm font-semibold uppercase tracking-wide"
                >
                  Key responsibilities
                </motion.h4>

                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {responsibilities.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.6 + index * 0.07,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className="flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-blue-600 dark:text-blue-400"
                      />

                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

              </div>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;