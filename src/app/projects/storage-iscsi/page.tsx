import Link from "next/link";

const technologies = [
  "Windows Server 2022",
  "Storage Spaces",
  "iSCSI Target Server",
  "iSCSI Initiator",
  "Hyper-V",
  "PowerShell",
  "Private Storage Network",
  "Windows Admin Center",
];

const implementationTasks = [
  "Deployed a dedicated Windows Server storage virtual machine.",
  "Attached multiple virtual disks to simulate enterprise storage hardware.",
  "Created a Storage Spaces storage pool from available physical disks.",
  "Configured a parity virtual disk to provide storage resiliency.",
  "Created and formatted a storage volume for shared infrastructure workloads.",
  "Installed and configured the iSCSI Target Server role.",
  "Created a virtual iSCSI disk and assigned it to a storage target.",
  "Configured iSCSI initiators on two Hyper-V hosts.",
  "Established a dedicated private network for storage traffic.",
  "Connected both Hyper-V hosts to the shared iSCSI target.",
  "Validated storage visibility, connectivity, and disk availability.",
  "Prepared the shared storage for Windows Failover Clustering.",
];

const validationTests = [
  "Storage pool health verified",
  "Parity virtual disk created successfully",
  "iSCSI target service operational",
  "Hyper-V hosts connected through iSCSI initiators",
  "Shared disk visible from both virtualization hosts",
  "Private storage-network connectivity confirmed",
  "Storage access persisted after server restart",
  "Environment prepared for cluster validation",
];

export default function StorageIscsiPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white transition hover:text-cyan-300"
          >
            Zeyad Labs
          </Link>

          <Link
            href="/#home-lab"
            className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Home Lab
          </Link>
        </div>
      </header>

      <section className="border-b border-slate-800 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Enterprise Storage Project
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Shared Storage and iSCSI Infrastructure
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Design, deployment, administration, and validation of resilient
            shared storage using Windows Storage Spaces, parity, iSCSI targets,
            dedicated storage networking, and connected Hyper-V hosts.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.slice(0, 6).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://github.com/Zeyad-Admin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              View GitHub
            </a>

            <Link
              href="/#projects"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/60"
            >
              View Other Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.7fr_1fr]">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Project Overview
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Resilient shared storage for virtual infrastructure
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-300">
              <p>
                This project recreated an enterprise-style shared storage
                environment capable of supporting multiple virtualization
                hosts and high-availability infrastructure.
              </p>

              <p>
                Windows Storage Spaces was used to combine several virtual
                disks into a managed storage pool. A parity virtual disk was
                then created to provide capacity efficiency and resilience
                against disk failure.
              </p>

              <p>
                The resulting storage was presented to two Hyper-V hosts using
                the iSCSI protocol across a dedicated private storage network.
                This provided the foundation required for cluster-shared
                workloads and failover testing.
              </p>
            </div>
          </article>

          <aside className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-7 md:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Project Snapshot
            </p>

            <dl className="mt-6 space-y-5">
              <div>
                <dt className="text-sm text-slate-400">Category</dt>
                <dd className="mt-1 font-semibold text-white">
                  Enterprise Storage
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Platform</dt>
                <dd className="mt-1 font-semibold text-white">
                  Windows Server 2022
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Storage Technology</dt>
                <dd className="mt-1 font-semibold text-white">
                  Storage Spaces and iSCSI
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Connected Systems</dt>
                <dd className="mt-1 font-semibold text-white">
                  Two Hyper-V Hosts
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Role</dt>
                <dd className="mt-1 font-semibold text-white">
                  Storage Administrator
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Architecture
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Shared-storage architecture
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              "Physical Disks",
              "Storage Spaces Pool",
              "iSCSI Target",
              "Hyper-V Hosts",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-950 p-6 text-center font-semibold"
              >
                <span className="mb-3 block text-sm text-cyan-400">
                  Layer {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl leading-8 text-slate-300">
            Multiple virtual disks were combined into a Windows Storage Spaces
            pool. A parity virtual disk provided resilient storage, which was
            exposed through an iSCSI target and connected to both Hyper-V hosts
            using dedicated storage-network adapters.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Implementation
            </p>

            <h2 className="mt-4 text-3xl font-bold">Major tasks completed</h2>

            <ul className="mt-8 space-y-4">
              {implementationTasks.map((task) => (
                <li key={task} className="flex gap-3 leading-7 text-slate-300">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Validation
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Functional testing performed
            </h2>

            <ul className="mt-8 space-y-4">
              {validationTests.map((test) => (
                <li
                  key={test}
                  className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-slate-300"
                >
                  {test}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technologies Used
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Business Value
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Centralized storage for resilient infrastructure
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Shared storage allows multiple virtualization hosts to access the
            same workload data and supports high-availability technologies such
            as failover clustering and live migration. Storage pooling also
            improves capacity utilization, simplifies administration, and
            provides resilience against individual disk failures.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Zeyad Almahmoudi. Zeyad Labs.</p>

          <Link
            href="/"
            className="font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Return to portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}