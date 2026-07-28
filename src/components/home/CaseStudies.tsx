import ProjectCard from "@/components/projects/ProjectCard";

export default function CaseStudies() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Selected Infrastructure Work
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Case studies built like engineering deliverables
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Each project includes architecture, implementation decisions,
            troubleshooting, validation results, technical documentation, and
            supporting repositories.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <CaseStudyLabel
            number="01"
            label="Architecture Preview"
            color="cyan"
          >
            <ProjectCard
              title="Enterprise Active Directory Infrastructure"
              description="Designed and deployed a Microsoft enterprise environment using Active Directory, DNS, DHCP, Group Policy, file services, and AGDLP access control."
              technologies={[
                "Windows Server",
                "Active Directory",
                "DNS",
                "DHCP",
                "Group Policy",
              ]}
              href="/projects/domain-services"
            />
          </CaseStudyLabel>

          <CaseStudyLabel
            number="02"
            label="Migration Project"
            color="blue"
          >
            <ProjectCard
              title="VMware to Proxmox Migration"
              description="Validated and documented the migration of Windows Server and SQL Server workloads from VMware to Proxmox VE while preserving functionality and data integrity."
              technologies={[
                "VMware",
                "Proxmox VE",
                "Windows Server",
                "SQL Server",
                "OVF",
              ]}
              href="/projects/vmware-proxmox"
            />
          </CaseStudyLabel>

          <CaseStudyLabel
            number="03"
            label="Virtualization Platform"
            color="emerald"
          >
            <ProjectCard
              title="Hyper-V Virtualization Platform"
              description="Built nested Hyper-V hosts supporting server workloads, isolated virtual networks, shared storage, migration testing, and enterprise infrastructure validation."
              technologies={[
                "Hyper-V",
                "Virtual Switches",
                "Nested Virtualization",
                "PowerShell",
                "Windows Server",
              ]}
              href="/projects/virtualization-platform"
            />
          </CaseStudyLabel>
        </div>
      </div>
    </section>
  );
}

function CaseStudyLabel({
  number,
  label,
  color,
  children,
}: {
  number: string;
  label: string;
  color: "cyan" | "blue" | "emerald";
  children: React.ReactNode;
}) {
  const styles = {
    cyan: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    blue: "border-blue-500/20 bg-blue-500/10 text-blue-400",
    emerald:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  };

  return (
    <div className="relative">
      <div
        className={`absolute left-5 top-5 z-10 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] ${styles[color]}`}
      >
        {number} / {label}
      </div>

      <div className="pt-10">{children}</div>
    </div>
  );
}