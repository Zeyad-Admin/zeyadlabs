type CertificationStatus = "Completed" | "In Progress" | "Planned";

type Certification = {
  organization: string;
  title: string;
  status: CertificationStatus;
  description: string;
  timeline: string;
  skills: string[];
  initials: string;
};

const certifications: Certification[] = [
  {
    organization: "British Columbia Institute of Technology",
    title: "Technology Support Professional",
    status: "Completed",
    description:
      "Completed intensive hands-on training in enterprise infrastructure, technical support, Windows Server, networking, virtualization, cloud services, deployment, and troubleshooting.",
    timeline: "Completed 2026",
    skills: [
      "Windows Server",
      "Active Directory",
      "Networking",
      "Hyper-V",
      "Azure",
      "Technical Support",
    ],
    initials: "BCIT",
  },
  {
    organization: "CompTIA",
    title: "CompTIA A+",
    status: "In Progress",
    description:
      "Preparing for the CompTIA A+ certification with a focus on hardware, Windows operating systems, networking, security, troubleshooting, and end-user support.",
    timeline: "Target 2026",
    skills: [
      "Hardware",
      "Windows",
      "Networking",
      "Security",
      "Troubleshooting",
      "End-User Support",
    ],
    initials: "A+",
  },
  {
    organization: "CompTIA",
    title: "CompTIA Network+",
    status: "In Progress",
    description:
      "Preparing for the N10-009 certification with a focus on TCP/IP, routing, switching, network operations, network security, and troubleshooting.",
    timeline: "Target 2026",
    skills: [
      "TCP/IP",
      "Routing",
      "Switching",
      "Subnetting",
      "Network Security",
      "Troubleshooting",
    ],
    initials: "N+",
  },
  {
    organization: "Microsoft",
    title: "Azure Administrator AZ-104",
    status: "Planned",
    description:
      "Planned professional development focused on Azure identity, governance, virtual networking, virtual machines, storage, monitoring, and administration.",
    timeline: "Certification Roadmap",
    skills: [
      "Azure VMs",
      "Virtual Networks",
      "Storage",
      "Microsoft Entra ID",
      "Governance",
      "Monitoring",
    ],
    initials: "AZ",
  },
];

function StatusBadge({ status }: { status: CertificationStatus }) {
  const styles: Record<CertificationStatus, string> = {
    Completed:
      "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    "In Progress": "border-cyan-400/30 bg-cyan-400/10 text-cyan-300",
    Planned: "border-slate-500/40 bg-slate-700/30 text-slate-300",
  };

  const dotStyles: Record<CertificationStatus, string> = {
    Completed: "bg-emerald-400",
    "In Progress": "bg-cyan-400",
    Planned: "bg-slate-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${styles[status]}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${dotStyles[status]}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-blue-500/[0.04] opacity-0 transition duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-950 text-sm font-black tracking-tight text-cyan-300 shadow-lg shadow-black/20 transition duration-300 group-hover:border-cyan-400/40 group-hover:text-cyan-200">
              {certification.initials}
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {certification.organization}
              </p>

              <h3 className="mt-1 text-xl font-bold leading-tight text-white">
                {certification.title}
              </h3>
            </div>
          </div>

          <span
            className="text-xl text-slate-600 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-300"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <div className="mt-6">
          <StatusBadge status={certification.status} />
        </div>

        <p className="mt-5 leading-7 text-slate-400">
          {certification.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition group-hover:border-slate-600"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-7">
          <div className="border-t border-slate-800 pt-4">
            <p className="text-sm font-semibold text-slate-300">
              {certification.timeline}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-slate-900 bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
            Certifications & Learning
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Professional training and continuous technical development
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Completed technical education and ongoing certification preparation
            across enterprise IT, networking, cloud administration, and
            technical support.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
            />
          ))}
        </div>
      </div>
    </section>
  );
}