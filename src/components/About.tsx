import {
  Headphones,
  Server,
  TicketCheck,
  Network,
} from "lucide-react";

import { motion } from "framer-motion";

const About = () => {
  const expertise = [
    {
      icon: Headphones,
      title: "End-User Support",
      description:
        "Hardware, software, operating system, and application troubleshooting.",
      iconColor:
        "text-blue-600 bg-blue-600/10 dark:text-blue-400 dark:bg-blue-400/10",
      hoverColor:
        "group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-400 dark:group-hover:text-slate-950",
    },
    {
      icon: Server,
      title: "System Administration",
      description:
        "Active Directory, user accounts, access management, and endpoint support.",
      iconColor:
        "text-violet-600 bg-violet-600/10 dark:text-violet-400 dark:bg-violet-400/10",
      hoverColor:
        "group-hover:bg-violet-600 group-hover:text-white dark:group-hover:bg-violet-400 dark:group-hover:text-slate-950",
    },
    {
      icon: TicketCheck,
      title: "IT Service Management",
      description:
        "Incident, service request, SLA, escalation, and service desk management.",
      iconColor:
        "text-emerald-600 bg-emerald-600/10 dark:text-emerald-400 dark:bg-emerald-400/10",
      hoverColor:
        "group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-400 dark:group-hover:text-slate-950",
    },
    {
      icon: Network,
      title: "Network Support",
      description:
        "TCP/IP, DNS, DHCP, LAN/WAN, VPN, and proxy troubleshooting.",
      iconColor:
        "text-orange-600 bg-orange-600/10 dark:text-orange-400 dark:bg-orange-400/10",
      hoverColor:
        "group-hover:bg-orange-600 group-hover:text-white dark:group-hover:bg-orange-400 dark:group-hover:text-slate-950",
    },
  ];

  return (
    <section
      id="about"
      className="bg-background py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            About Me
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Supporting People.
            <span className="block text-muted-foreground">
              Supporting Technology.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            IT Service Desk and Technical Support professional focused on
            helping people solve technical problems and keeping enterprise
            technology environments reliable, secure, and productive.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Experienced in end-user support, incident management, user access
            administration, endpoint management, technical troubleshooting,
            and working within SLA-driven environments.
          </p>
        </motion.div>

        {/* Core Expertise */}
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
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-14"
        >
          {/* Heading */}
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Core Expertise
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    y: -6,
                  }}
                  className="group rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: -4,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${item.iconColor} ${item.hoverColor}`}
                  >
                    <motion.div
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.7}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-6 text-sm font-semibold tracking-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* Professional Strengths */}
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
            delay: 0.15,
            ease: "easeOut",
          }}
          className="mt-12 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Enterprise IT Support",
              "Technical Troubleshooting",
              "SLA-driven Environment",
              "Cross-functional Collaboration",
            ].map((strength, index) => (
              <motion.div
                key={strength}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="flex items-center gap-3"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />

                <span className="text-sm font-medium text-muted-foreground">
                  {strength}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
