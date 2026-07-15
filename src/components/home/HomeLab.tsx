const labSystems = [
  {
    name: "Domain Services",
    description:
      "Windows Server environment providing Active Directory Domain Services, DNS, organizational units, users, groups, and Group Policy.",
    technologies: ["Windows Server", "Active Directory", "DNS", "Group Policy"],
  },
  {
    name: "Virtualization Platform",
    description:
      "Hyper-V environment with nested virtualization, multiple server workloads, virtual switching, and isolated lab networks.",
    technologies: ["Hyper-V", "Virtual Switches", "Nested Virtualization"],
  },
  {
    name: "Storage and iSCSI",
    description:
      "Shared storage lab using Storage Spaces, parity, iSCSI targets, private storage networking, and connected Hyper-V hosts.",
    technologies: ["Storage Spaces", "iSCSI", "SAN", "PowerShell"],
  },
  {
    name: "Cloud Infrastructure",
    description:
      "Azure administration lab covering virtual machines, virtual networks, identity, storage, monitoring, and resource management.",
    technologies: ["Azure", "Entra ID", "Virtual Machines", "Networking"],
  },
];

export default function HomeLab() {
  return (
    <section
      id="home-lab"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Enterprise Home Lab
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            A practical environment for building and validating enterprise
            infrastructure
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            My home lab recreates core enterprise services across Windows
            Server, virtualization, storage, networking, cloud, and automation.
            It is used to design, deploy, test, troubleshoot, and document
            real-world infrastructure scenarios.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {labSystems.map((system) => (
            <article
              key={system.name}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition hover:-translate-y-1 hover:border-cyan-400/50"
            >
              <h3 className="text-xl font-bold text-white">{system.name}</h3>

              <p className="mt-3 leading-7 text-slate-300">
                {system.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {system.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-medium text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Architecture Overview
          </p>

          <div className="mt-6 grid gap-4 text-center text-sm font-semibold text-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
              Hyper-V Hosts
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
              Active Directory
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
              Shared iSCSI Storage
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
              Azure Resources
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}