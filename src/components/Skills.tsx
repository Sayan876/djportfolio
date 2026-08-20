import {
  Monitor,
  ShieldCheck,
  Network,
  Users,
  Wrench,
  TicketCheck,
  Laptop,
  FileText,
  GitBranch,
  Settings2,
  LockKeyhole,
  UsersRound,
} from "lucide-react";

import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      icon: Monitor,
      title: "IT Support & Troubleshooting",
      description:
        "Hardware, software, operating system, application and end-user troubleshooting across enterprise environments.",
      skills: [
        "Desktop Support",
        "Windows",
        "Hardware",
        "Software Support",
        "Technical Troubleshooting",
      ],
      iconStyle:
        "bg-blue-600/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400",
    },
    {
      icon: Users,
      title: "System Administration",
      description:
        "User, account and access administration across enterprise IT environments.",
      skills: [
        "Active Directory",
        "User Management",
        "Access Control",
        "Password Management",
        "Account Unlock",
      ],
      iconStyle:
        "bg-violet-600/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400",
    },
    {
      icon: TicketCheck,
      title: "IT Service Management",
      description:
        "Managing incidents and service requests while working within SLA-driven IT service environments.",
      skills: [
        "Incident Management",
        "Service Requests",
        "SLA Management",
        "ITIL Processes",
        "L2/L3 Escalation",
      ],
      iconStyle:
        "bg-amber-600/10 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400",
    },
    {
      icon: Network,
      title: "Network Support",
      description:
        "Diagnosing common connectivity, network configuration and access-related issues.",
      skills: [
        "TCP/IP",
        "DNS",
        "DHCP",
        "LAN/WAN",
        "VPN",
        "Proxy Configuration",
      ],
      iconStyle:
        "bg-cyan-600/10 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400",
    },
    {
      icon: ShieldCheck,
      title: "Endpoint & Security",
      description:
        "Supporting managed endpoints, security controls, patching and enterprise endpoint environments.",
      skills: [
        "Endpoint Central",
        "Patch Management",
        "Security Patching",
        "Endpoint Security",
        "Vulnerability Remediation",
      ],
      iconStyle:
        "bg-emerald-600/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
    },
    {
      icon: Laptop,
      title: "IT Operations & Asset Management",
      description:
        "Supporting enterprise IT operations through endpoint management, asset handling and system readiness.",
      skills: [
        "IT Asset Management",
        "Endpoint Management",
        "Remote Troubleshooting",
        "System Readiness",
        "Enterprise Support",
      ],
      iconStyle:
        "bg-indigo-600/10 text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400",
    },
    {
      icon: Settings2,
      title: "Software Deployment & Configuration",
      description:
        "Preparing and maintaining user systems through software installation, deployment and configuration activities.",
      skills: [
        "Software Installation",
        "Software Deployment",
        "Endpoint Deployment",
        "System Configuration",
        "Remote Support",
      ],
      iconStyle:
        "bg-orange-600/10 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400",
    },
    {
      icon: LockKeyhole,
      title: "Security & Compliance",
      description:
        "Supporting security, compliance and audit-related activities in coordination with enterprise IT teams.",
      skills: [
        "Security Controls",
        "Compliance Support",
        "Audit Documentation",
        "Security Patching",
        "Endpoint Controls",
      ],
      iconStyle:
        "bg-rose-600/10 text-rose-600 dark:bg-rose-400/10 dark:text-rose-400",
    },
    {
      icon: FileText,
      title: "Documentation & Knowledge Management",
      description:
        "Maintaining accurate technical records and documentation to support consistent IT service delivery.",
      skills: [
        "Ticket Documentation",
        "Resolution Records",
        "Knowledge Base",
        "Audit Records",
        "Technical Documentation",
      ],
      iconStyle:
        "bg-teal-600/10 text-teal-600 dark:bg-teal-400/10 dark:text-teal-400",
    },
    {
      icon: GitBranch,
      title: "Incident Escalation & Coordination",
      description:
        "Coordinating with specialized teams and escalating complex issues according to established IT processes.",
      skills: [
        "L2/L3 Coordination",
        "Issue Escalation",
        "Incident Follow-up",
        "Root Cause Support",
        "Cross-team Coordination",
      ],
      iconStyle:
        "bg-fuchsia-600/10 text-fuchsia-600 dark:bg-fuchsia-400/10 dark:text-fuchsia-400",
    },
    {
      icon: UsersRound,
      title: "Enterprise Team Collaboration",
      description:
        "Working with SOC, Infrastructure, Network, InfoSec and other teams to resolve enterprise IT and security issues.",
      skills: [
        "SOC Coordination",
        "Infrastructure Teams",
        "Network Teams",
        "InfoSec Coordination",
        "Cross-functional Collaboration",
      ],
      iconStyle:
        "bg-sky-600/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400",
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      description:
        "Experience with tools used for service desk operations, endpoint management and enterprise IT support.",
      skills: [
        "ManageEngine",
        "ServiceDesk Plus",
        "Endpoint Central",
        "Remote Support",
        "IT Service Tools",
      ],
      iconStyle:
        "bg-slate-600/10 text-slate-600 dark:bg-slate-400/10 dark:text-slate-400",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-muted/30 py-24 text-foreground transition-colors duration-500 sm:py-28"
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
            Expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technical skills & expertise
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            A practical combination of technical troubleshooting, system
            administration, security support, IT service management, and
            enterprise operations.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
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
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.04, 0.25),
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="group rounded-2xl border border-border bg-background p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 4,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:shadow-md ${item.iconStyle}`}
                >
                  <Icon
                    size={21}
                    strokeWidth={1.7}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>

                {/* Skill Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{
                        y: -2,
                        scale: 1.02,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors duration-200 hover:border-foreground/20 hover:text-foreground"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
