import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BCIT Capstone | High-Availability Infrastructure",
  description:
    "A BCIT capstone case study featuring Windows Server, Hyper-V, Active Directory, iSCSI shared storage, Failover Clustering, and Live Migration.",
};

const repositoryUrl =
  "https://github.com/Zeyad-Admin/482-Capstone-HighAvailability-Infrastructure";

const technologies = [
  "Windows Server",
  "Hyper-V",
  "Active Directory",
  "DNS",
  "iSCSI",
  "Storage Spaces",
  "Failover Clustering",
  "Live Migration",
  "PowerShell",
];

const architectureLayers = [
  {
    title: "Identity Services",
    description:
      "Redundant Windows Server domain controllers provided Active Directory and DNS services for authentication, name resolution, and domain availability.",
  },
  {
    title: "Virtualization Platform",
    description:
      "Multiple Hyper-V hosts provided the compute layer for server workloads, virtual networking, cluster services, and workload mobility.",
  },
  {
    title: "Shared Storage",
    description:
      "Dedicated iSCSI storage provided shared disks to the cluster nodes through an isolated storage network.",
  },
  {
    title: "High Availability",
    description:
      "Windows Server Failover Clustering supported resilient workloads, clustered storage, service continuity, and Live Migration.",
  },
];

const implementationSteps = [
  {
    number: "01",
    title: "Architecture planning",
    description:
      "Defined the server roles, management network, storage network, domain-services design, Hyper-V hosts, shared storage, and cluster requirements.",
  },
  {
    number: "02",
    title: "Domain-services deployment",
    description:
      "Configured Active Directory, DNS, redundant domain controllers, organizational structure, service accounts, and supporting identity services.",
  },
  {
    number: "03",
    title: "Hyper-V configuration",
    description:
      "Prepared the virtualization hosts, virtual switches, management connectivity, storage interfaces, and virtual-machine workloads.",
  },
  {
    number: "04",
    title: "iSCSI storage deployment",
    description:
      "Created shared storage resources and connected the Hyper-V cluster nodes through dedicated iSCSI network interfaces.",
  },
  {
    number: "05",
    title: "Failover-cluster creation",
    description:
      "Validated the cluster nodes, created the Windows Failover Cluster, added shared disks, and configured highly available services.",
  },
  {
    number: "06",
    title: "Testing and validation",
    description:
      "Validated domain connectivity, DNS, storage access, cluster health, workload movement, Live Migration, and service availability.",
  },
];

const validationResults = [
  "Both Hyper-V nodes successfully joined the Active Directory domain",
  "Redundant domain services and DNS resolution were validated",
  "Both cluster nodes successfully connected to the shared iSCSI storage",
  "Windows Failover Cluster validation completed successfully",
  "Shared cluster storage remained accessible to the cluster",
  "Live Migration was tested between the Hyper-V hosts",
  "Cluster services remained available during workload movement",
  "Implementation and validation evidence was documented with screenshots",
];

const skills = [
  "Enterprise infrastructure planning",
  "Windows Server administration",
  "Active Directory and DNS",
  "Hyper-V virtualization",
  "Virtual-switch configuration",
  "iSCSI storage networking",
  "Windows Failover Clustering",
  "Live Migration testing",
  "Infrastructure troubleshooting",
  "Technical documentation",
  "Validation and evidence collection",
  "PowerShell administration",
];

export default function BcitCapstonePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/95">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/brand/zl-icon-square.png"
              alt="Zeyad Labs logo"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-xl object-contain"
            />

            <div>
              <p className="font-bold text-white">Zeyad Labs</p>
              <p className="text-xs text-slate-400">
                Enterprise Infrastructure
              </p>
            </div>
          </Link>

          <Link
            href="/#projects"
            className="text-sm font-semibold text-slate-300 transition hover:text-cyan-400"
          >
            ← Back to projects
          </Link>
        </nav>
      </header>

      <section className="border-b border-slate-800 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            BCIT Capstone Project
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            High-Availability Enterprise Infrastructure
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            A virtual enterprise datacenter designed to demonstrate resilient
            Microsoft infrastructure through redundant domain services,
            Hyper-V virtualization, shared iSCSI storage, Windows Failover
            Clustering, and Live Migration.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-cyan-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View GitHub Repository
            </a>

            <a
              href={`${repositoryUrl}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Read Project Documentation
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Designing for resilience and controlled failover
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
              <p>
                This capstone recreated the core architecture of a highly
                available Microsoft enterprise environment. The solution
                separated identity, compute, storage, management, and clustered
                services into clearly defined infrastructure roles.
              </p>

              <p>
                The objective was not simply to install individual services.
                The environment had to demonstrate that workloads, storage, and
                essential infrastructure services could continue operating
                during planned workload movement and infrastructure changes.
              </p>

              <p>
                The project also emphasized validation, troubleshooting, and
                technical documentation so that each major implementation
                result could be supported with evidence.
              </p>
            </div>
          </div>

          <aside className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Project Snapshot
            </p>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-slate-400">Program</dt>
                <dd className="mt-1 font-semibold text-white">
                  BCIT Technology Support Professional
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Project type</dt>
                <dd className="mt-1 font-semibold text-white">
                  Enterprise infrastructure capstone
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Primary platform</dt>
                <dd className="mt-1 font-semibold text-white">
                  Windows Server and Hyper-V
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Core objective</dt>
                <dd className="mt-1 font-semibold text-white">
                  High availability and workload resilience
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Evidence</dt>
                <dd className="mt-1 font-semibold text-white">
                  Documentation, diagrams, commands, and validation screenshots
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Architecture
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Core infrastructure layers
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The environment combined identity, virtualization, shared storage,
            and clustering into a single integrated enterprise platform.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {architectureLayers.map((layer) => (
              <article
                key={layer.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-7"
              >
                <h3 className="text-xl font-bold text-white">{layer.title}</h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {layer.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Logical Service Flow
            </p>

            <div className="mt-6 grid gap-4 text-center text-sm font-semibold text-slate-200 md:grid-cols-5">
              {[
                "Users and Clients",
                "Active Directory",
                "Hyper-V Hosts",
                "Failover Cluster",
                "Shared iSCSI Storage",
              ].map((layer, index, layers) => (
                <div key={layer} className="flex items-center gap-4 md:block">
                  <div className="flex-1 rounded-xl border border-slate-700 bg-slate-900 p-4">
                    {layer}
                  </div>

                  {index < layers.length - 1 && (
                    <span className="text-cyan-400 md:mt-3 md:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Implementation
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            From architecture plan to validated cluster
          </h2>

          <div className="mt-12 space-y-6">
            {implementationSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:grid-cols-[90px_1fr]"
              >
                <p className="text-3xl font-bold text-cyan-400">
                  {step.number}
                </p>

                <div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Validation
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Evidence that the environment operated as intended
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The implementation was tested at the identity, compute, storage,
            networking, and clustering layers.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {validationResults.map((result) => (
              <div
                key={result}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/70 p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 font-bold text-emerald-400">
                  ✓
                </span>

                <p className="leading-7 text-slate-300">{result}</p>
              </div>
            ))}
          </div>

          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex font-semibold text-blue-400 transition hover:text-cyan-400"
          >
            Browse the complete project evidence →
          </a>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills Demonstrated
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
            Practical enterprise infrastructure capabilities
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 font-medium text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-900/30 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Explore the Evidence
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Review the complete implementation
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The GitHub repository contains the project documentation,
            architecture material, implementation evidence, validation results,
            and screenshots.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              View Repository
            </a>

            <a
              href={`${repositoryUrl}#readme`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Zeyad Almahmoudi</p>

          <Link
            href="/#projects"
            className="font-semibold text-slate-300 transition hover:text-cyan-400"
          >
            Return to Zeyad Labs
          </Link>
        </div>
      </footer>
    </main>
  );
}