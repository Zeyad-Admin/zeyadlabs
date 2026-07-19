import Image from "next/image";
import Link from "next/link";

const labSystems = [
  {
    name: "Domain Services",
    description:
      "Windows Server environment providing Active Directory Domain Services, DNS, organizational units, users, groups, and Group Policy.",
    technologies: ["Windows Server", "Active Directory", "DNS", "Group Policy"],
    href: "/projects/domain-services",
  },
  {
    name: "Virtualization Platform",
    description:
      "Hyper-V environment with nested virtualization, multiple server workloads, virtual switching, and isolated lab networks.",
    technologies: ["Hyper-V", "Virtual Switches", "Nested Virtualization"],
    href: "/projects/virtualization-platform",
  },
  {
    name: "Storage and iSCSI",
    description:
      "Shared storage lab using Storage Spaces, parity, iSCSI targets, private storage networking, and connected Hyper-V hosts.",
    technologies: ["Storage Spaces", "iSCSI", "SAN", "PowerShell"],
    href: "/projects/storage-iscsi",
  },
  {
    name: "Cloud Infrastructure",
    description:
      "Azure administration lab covering virtual machines, virtual networks, identity, storage, monitoring, and resource management.",
    technologies: ["Azure", "Entra ID", "Virtual Machines", "Networking"],
    href: null,
  },
];

export default function HomeLab() {
  return (
    <section id="home-lab" className="border-t border-slate-800 px-6 py-24">
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
          {labSystems.map((system) => {
            const cardContent = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white">
                    {system.name}
                  </h3>

                  {system.href && (
                    <span
                      aria-hidden="true"
                      className="text-xl text-cyan-400 transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  )}
                </div>

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

                {system.href && (
                  <p className="mt-6 text-sm font-semibold text-cyan-400">
                    View project details
                  </p>
                )}
              </>
            );

            if (system.href) {
              return (
                <Link
                  key={system.name}
                  href={system.href}
                  className="group block rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  aria-label={`View ${system.name} project`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <article
                key={system.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                {cardContent}
              </article>
            );
          })}
        </div>

        <div className="mt-16">
  <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
    Enterprise Infrastructure Architecture
  </p>

  <a
  href="/images/enterprise-architecture.png"
  target="_blank"
  rel="noreferrer"
  className="group block overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl transition duration-300 hover:border-cyan-400/60 hover:shadow-cyan-500/10"
  aria-label="Open the enterprise infrastructure architecture diagram at full size"
>
  <div className="relative">
    <Image
      src="/images/enterprise-architecture.png"
      alt="Enterprise Infrastructure Architecture showing OPNsense, Windows Server services, virtualization platforms, virtual machines, and shared iSCSI storage"
      width={1600}
      height={900}
      className="h-auto w-full transition duration-500 group-hover:scale-[1.01]"
      priority
    />

    <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-slate-950/90 to-transparent px-6 pb-6 pt-16 opacity-0 transition duration-300 group-hover:opacity-100">
      <span className="rounded-full border border-cyan-400/40 bg-slate-950/90 px-5 py-2 text-sm font-semibold text-cyan-300">
        Open full-size diagram ↗
      </span>
    </div>
  </div>
</a>

  <p className="mx-auto mt-6 max-w-5xl text-center leading-8 text-slate-300">
    This enterprise architecture represents the technologies used throughout
    my infrastructure portfolio, including Windows Server, Active Directory,
    Hyper-V, VMware, Proxmox VE, SQL Server, Azure, Storage Spaces, iSCSI,
    OPNsense, enterprise networking, and high-availability services.
  </p>
</div>
      </div>
    </section>
  );
}