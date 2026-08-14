import {
  Headphones,
  ShieldCheck,
  Network,
  TicketCheck,
} from "lucide-react";

import { motion } from "framer-motion";

const About = () => {
  const expertise = [
    {
      icon: Headphones,
      title: "End-User Support",
      description:
        "Resolving hardware, software, OS, and application issues while maintaining a reliable user experience.",
    },
    {
      icon: ShieldCheck,
      title: "System Administration",
      description:
        "Managing Active Directory, user accounts, access permissions, password resets, and endpoint environments.",
    },
    {
      icon: TicketCheck,
      title: "IT Service Management",
      description:
        "Handling incidents, service requests, escalations, SLA compliance, and ticket lifecycle management.",
    },
    {
      icon: Network,
      title: "Network Troubleshooting",
      description:
        "Troubleshooting LAN/WAN, TCP/IP, DNS, DHCP, VPN, proxy, and basic firewall-related issues.",
    },
  ];

  return (
    <section
      id="about"
      className="bg-muted/30 py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Supporting people.
            <span className="block text-muted-foreground">
              Supporting technology.
            </span>
          </h2>
        </motion.div>

        {/* Introduction */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">

          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <p className="text-lg font-medium leading-8">
              An IT Service Desk and Technical Support professional focused on
              keeping users, systems, and IT operations running smoothly.
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base"
          >
            <p>
              Experienced in enterprise IT support environments with hands-on
              exposure to incident management, system administration, user
              access management, endpoint management, and technical
              troubleshooting.
            </p>

            <p>
              Comfortable working in SLA-driven environments, diagnosing
              technical issues, maintaining accurate documentation, and
              collaborating across support levels to deliver reliable
              solutions.
            </p>
          </motion.div>

        </div>

        {/* Expertise Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="group bg-background p-6 transition-colors duration-300 hover:bg-muted/60"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400"
                >
                  <Icon size={20} strokeWidth={1.8} />
                </motion.div>

                {/* Title */}
                <h3 className="mt-6 text-base font-semibold">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default About;