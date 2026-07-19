import Link from "next/link";

const technologies = [
  "Windows Server 2022",
  "Hyper-V",
  "Nested Virtualization",
  "Virtual Switches",
  "PowerShell",
  "Windows Admin Center",
  "Failover Clustering",
  "Live Migration",
];

const implementationTasks = [
  "Installed the Hyper-V role on Windows Server hosts.",
  "Enabled nested virtualization for the lab environment.",
  "Created external, internal, and private virtual switches.",
  "Deployed multiple Windows Server and client virtual machines.",
  "Configured isolated management and workload networks.",
  "Assigned virtual processors, memory, storage, and network adapters.",
  "Configured host-to-host communication and administrative access.",
  "Prepared virtualization hosts for shared-storage and clustering scenarios.",
  "Tested virtual-machine startup, shutdown, network access, and resource allocation.",
  "Documented configuration decisions, validation results, and troubleshooting steps.",
];

const validationTests = [
  "Hyper-V role and management tools operational",
  "Virtual machines started and stopped successfully",
  "External and isolated virtual networking functional",
  "Host-to-host connectivity verified",
  "Nested virtualization confirmed",
  "Virtual workload network access validated",
  "PowerShell and graphical administration tested",
];

export default function VirtualizationPlatformPage() {
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
            Enterprise Virtualization Project
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Hyper-V Virtualization Platform
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Design, deployment, administration, and validation of a Microsoft
            Hyper-V environment supporting multiple server workloads, nested
            virtualization, virtual switching, isolated networks, and
            enterprise infrastructure labs.
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
              A reusable platform for enterprise infrastructure testing
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-300">
              <p>
                This project established a Microsoft Hyper-V environment for
                deploying, managing, and validating server and client workloads
                used across Active Directory, networking, storage, clustering,
                and migration labs.
              </p>

              <p>
                The platform used virtual switches and isolated networks to
                separate management, client, server, and storage traffic while
                allowing controlled communication between lab components.
              </p>

              <p>
                Nested virtualization allowed multiple Hyper-V hosts and
                enterprise infrastructure scenarios to run within a controlled
                home-lab environment.
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
                  Server Virtualization
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Platform</dt>
                <dd className="mt-1 font-semibold text-white">
                  Microsoft Hyper-V
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Host Operating System</dt>
                <dd className="mt-1 font-semibold text-white">
                  Windows Server 2022
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Networking</dt>
                <dd className="mt-1 font-semibold text-white">
                  Virtual Switches and Isolated Networks
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Role</dt>
                <dd className="mt-1 font-semibold text-white">
                  Virtualization Administrator
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
            Hyper-V platform architecture
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              "Management Host",
              "Nested Hyper-V Hosts",
              "Virtual Networks",
              "Server Workloads",
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
            The management host provides compute resources for nested Hyper-V
            hosts. Virtual switches connect server workloads to dedicated
            management, infrastructure, client, and storage networks while
            maintaining logical separation between services.
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
            Flexible and efficient infrastructure delivery
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Virtualization allows organizations to consolidate workloads,
            improve hardware utilization, isolate services, accelerate
            deployment, and create repeatable testing environments. The
            platform also provides a foundation for high availability, shared
            storage, disaster recovery, and infrastructure migration.
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