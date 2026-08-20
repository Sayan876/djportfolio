import {
  Building2,
  CalendarDays,
  CheckCircle2,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  /*
   * Scroll progress for the complete experience timeline.
   *
   * The trace starts when the timeline enters the viewport
   * and reaches the bottom as the user scrolls through it.
   */
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 25%"],
  });

  /*
   * Height of the glowing blue trace.
   */
  const traceHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  /*
   * Trace visibility.
   */
  const traceOpacity = useTransform(
    scrollYProgress,
    [0, 0.03, 1],
    [0, 1, 1]
  );

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

  const securityResponsibilities = [
    "Coordinated with SOC, Infrastructure, Network, and InfoSec teams on security-related activities.",
    "Supported vulnerability remediation tracking and follow-up across enterprise environments.",
    "Assisted with audit documentation and maintained required compliance records.",
    "Supported security patching and endpoint security controls to maintain system compliance.",
  ];

  return (
    <section
      id="experience"
      className="overflow-hidden bg-background py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* ========================================================= */}
        {/* Section Heading */}
        {/* ========================================================= */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.6,
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
            Experience supporting enterprise IT environments, resolving
            technical issues, managing users and endpoints, and contributing
            to reliable and secure IT operations.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* Experience Timeline */}
        {/* ========================================================= */}

        <div
          ref={timelineRef}
          className="relative mt-16"
        >

          {/* ===================================================== */}
          {/* Dynamic Timeline */}
          {/* ===================================================== */}

          <div className="absolute left-[11px] top-2 h-[calc(100%-8px)] w-px">

            {/* Base Timeline */}
            <div className="absolute inset-0 bg-border" />

            {/* ================================================= */}
            {/* Completed Blue Trace */}
            {/* ================================================= */}

            <motion.div
              style={{
                height: traceHeight,
                opacity: traceOpacity,
              }}
              className="absolute left-0 top-0 w-px bg-blue-500 dark:bg-blue-400"
            />

            {/* ================================================= */}
            {/* Soft Blue Glow */}
            {/* ================================================= */}

            <motion.div
              style={{
                height: traceHeight,
                opacity: traceOpacity,
              }}
              className="absolute left-1/2 top-0 w-[5px] -translate-x-1/2 bg-blue-500/20 blur-[4px] dark:bg-blue-400/25"
            />

            {/* ================================================= */}
            {/* Moving Glow */}
            {/* ================================================= */}

            <motion.div
              style={{
                top: traceHeight,
                opacity: traceOpacity,
              }}
              className="absolute left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-[6px] dark:bg-blue-400/35"
            />

            {/* ================================================= */}
            {/* Bright Leading Point */}
            {/* ================================================= */}

            <motion.div
              style={{
                top: traceHeight,
                opacity: traceOpacity,
              }}
              className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_8px_3px_rgba(59,130,246,0.8)] dark:bg-blue-300 dark:shadow-[0_0_9px_3px_rgba(96,165,250,0.85)]"
            />
          </div>

          {/* ===================================================== */}
          {/* Timeline Content */}
          {/* ===================================================== */}

          <div className="relative pl-10 sm:pl-12">

            {/* ================================================= */}
            {/* Timeline Dot */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.45,
                delay: 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.25,
              }}
              className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.45)] dark:bg-blue-400 dark:shadow-[0_0_10px_rgba(96,165,250,0.55)]"
            >
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1.5 rounded-full bg-white dark:bg-slate-950"
              />
            </motion.div>

            {/* ================================================= */}
            {/* Main Experience Card */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
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
                duration: 0.7,
                ease: "easeOut",
              }}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 sm:p-8"
            >

              {/* ================================================= */}
              {/* Header */}
              {/* ================================================= */}

              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

                {/* Company */}

                <motion.div
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
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                    ease: "easeOut",
                  }}
                  className="flex gap-4"
                >

                  {/* Company Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -4,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="group/icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-violet-500/20 dark:bg-violet-400/10 dark:text-violet-400"
                  >
                    <Building2
                      size={23}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover/icon:scale-110"
                    />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      CMS IT Services Pvt. Ltd.
                    </h3>

                    <p className="mt-1 text-sm font-medium text-muted-foreground">
                      IT Service Desk Engineer | Technical Support Engineer
                    </p>
                  </div>
                </motion.div>

                {/* Date */}

                <motion.div
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
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    ease: "easeOut",
                  }}
                  className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground"
                >
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <CalendarDays
                      size={16}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </motion.div>

                  <span>
                    Jul 2024 – Present
                  </span>
                </motion.div>
              </div>

              {/* ================================================= */}
              {/* Location */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.25,
                  ease: "easeOut",
                }}
                className="mt-6 border-t border-border pt-5"
              >
                <p className="text-sm text-muted-foreground">
                  Kolkata, India
                </p>
              </motion.div>

              {/* ================================================= */}
              {/* Key Responsibilities */}
              {/* ================================================= */}

              <div className="mt-8">

                {/* Heading */}

                <motion.div
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
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  className="flex items-center gap-4"
                >

                  {/* Responsibilities Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="group/icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-emerald-500/20 dark:bg-emerald-400/10 dark:text-emerald-400"
                  >
                    <ClipboardCheck
                      size={22}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover/icon:scale-110"
                    />
                  </motion.div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      Key Responsibilities
                    </h4>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Supporting users, systems, and enterprise IT operations.
                    </p>
                  </div>
                </motion.div>

                {/* Responsibility List */}

                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {responsibilities.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{
                        opacity: 0,
                        y: 12,
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
                        duration: 0.4,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className="group flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: 8,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="mt-1 shrink-0"
                      >
                        <CheckCircle2
                          size={17}
                          className="text-emerald-600 dark:text-emerald-400"
                        />
                      </motion.div>

                      <span className="transition-colors duration-200 group-hover:text-foreground">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* ================================================= */}
              {/* Security & Compliance */}
              {/* ================================================= */}

              <motion.div
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
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="mt-12 border-t border-border pt-8"
              >

                {/* Security Heading */}

                <div className="flex items-center gap-4">

                  {/* Security Icon */}

                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="group/icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400"
                  >
                    <ShieldCheck
                      size={22}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover/icon:scale-110"
                    />
                  </motion.div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      Security & Compliance Support
                    </h4>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Supporting enterprise security, compliance, and endpoint
                      protection activities.
                    </p>
                  </div>
                </div>

                {/* Security Responsibilities */}

                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {securityResponsibilities.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{
                        opacity: 0,
                        y: 12,
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
                        duration: 0.4,
                        delay: index * 0.07,
                        ease: "easeOut",
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className="group flex gap-3 text-sm leading-6 text-muted-foreground"
                    >
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          rotate: -8,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="mt-1 shrink-0"
                      >
                        <CheckCircle2
                          size={17}
                          className="text-rose-600 dark:text-rose-400"
                        />
                      </motion.div>

                      <span className="transition-colors duration-200 group-hover:text-foreground">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
