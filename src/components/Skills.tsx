import {
  Monitor,
  ShieldCheck,
  Network,
  Users,
  Wrench,
  TicketCheck,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      icon: Monitor,
      title: "IT Support & Troubleshooting",
      description:
        "Hardware, software, operating system, application and end-user troubleshooting.",
      skills: ["Desktop Support", "Windows", "Hardware", "Software Support"],
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
        "Password & Account Management",
      ],
    },
    {
      icon: TicketCheck,
      title: "IT Service Management",
      description:
        "Managing incidents and service requests while working within SLA-driven environments.",
      skills: [
        "Incident Management",
        "Service Requests",
        "SLA Management",
        "Escalation",
      ],
    },
    {
      icon: Network,
      title: "Network Support",
      description:
        "Diagnosing common connectivity and network configuration issues.",
      skills: ["TCP/IP", "DNS", "DHCP", "LAN/WAN", "VPN"],
    },
    {
      icon: ShieldCheck,
      title: "Endpoint & Security",
      description:
        "Supporting managed endpoints, access security and enterprise system environments.",
      skills: [
        "Endpoint Central",
        "Patch Management",
        "Endpoint Support",
        "Proxy Configuration",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      description:
        "Experience with tools used for service desk operations and enterprise support.",
      skills: [
        "ManageEngine",
        "ServiceDesk Plus",
        "Endpoint Central",
        "Remote Support",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-muted/30 py-24 text-foreground transition-colors duration-500 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Expertise
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Technical skills & expertise
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            A practical combination of technical troubleshooting, system
            administration, IT service management, and enterprise support.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 transition-transform duration-300 group-hover:scale-105 dark:bg-blue-400/10 dark:text-blue-400">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

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
                    <span
                      key={skill}
                      className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;