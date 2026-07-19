import Link from "next/link";

const technologies = [
  "VMware Workstation Pro",
  "Proxmox VE",
  "Windows Server 2022",
  "SQL Server Express",
  "OVF Appliance",
  "VMware Tools",
  "VirtIO Drivers",
  "PowerShell",
  "Windows Networking",
];

const migrationSteps = [
  "Built and configured the source Windows Server virtual machine in VMware Workstation.",
  "Installed VMware Tools and validated operating-system functionality.",
  "Installed SQL Server Express and confirmed database-service availability.",
  "Documented the source virtual-machine hardware, networking, storage, and application state.",
  "Prepared the virtual machine for migration and performed a final source validation.",
  "Exported the source virtual machine as an OVF appliance.",
  "Transferred the exported appliance into the Proxmox VE environment.",
  "Imported the virtual disks and created the destination Proxmox virtual machine.",
  "Reconfigured CPU, memory, storage controllers, firmware, and virtual network adapters.",
  "Installed VirtIO drivers and removed VMware-specific dependencies where required.",
  "Restored network connectivity and validated application functionality.",
  "Compared source and destination results and documented the completed migration.",
];

const validationTests = [
  "Windows Server booted successfully in Proxmox VE",
  "Hostname and operating-system identity preserved",
  "CPU and memory allocation confirmed",
  "Virtual storage detected and accessible",
  "Network connectivity restored",
  "DNS and gateway communication verified",
  "SQL Server service operational",
  "Database accessibility confirmed",
  "Event logs reviewed for migration-related errors",
  "Source and destination environments compared",
];

export default function VMwareProxmoxPage() {
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
            href="/#projects"
            className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Featured Projects
          </Link>
        </div>
      </header>

      <section className="border-b border-slate-800 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Enterprise Migration Project
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold tracking-tight md:text-6xl">
            VMware to Proxmox Virtual Machine Migration
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Planning, execution, troubleshooting, and validation of a Windows
            Server migration from VMware Workstation to Proxmox VE while
            preserving operating-system functionality, networking, storage,
            and SQL Server services.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {technologies.slice(0, 7).map((technology) => (
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
              Cross-platform workload migration and validation
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-300">
              <p>
                This project simulated a production-style migration of a
                Windows Server workload from VMware Workstation to Proxmox VE.
                The source virtual machine included Windows Server, networking,
                virtual storage, and SQL Server Express.
              </p>

              <p>
                The migration required source-system validation, OVF export,
                virtual-disk import, hardware reconfiguration, driver changes,
                network recovery, and application testing in the destination
                environment.
              </p>

              <p>
                The completed migration demonstrated how infrastructure
                workloads can be transferred between virtualization platforms
                while maintaining service availability and data integrity.
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
                  Virtual Machine Migration
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Source Platform</dt>
                <dd className="mt-1 font-semibold text-white">
                  VMware Workstation Pro
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Destination Platform</dt>
                <dd className="mt-1 font-semibold text-white">Proxmox VE</dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Workload</dt>
                <dd className="mt-1 font-semibold text-white">
                  Windows Server and SQL Server
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Role</dt>
                <dd className="mt-1 font-semibold text-white">
                  Infrastructure Migration Administrator
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/30 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Migration Architecture
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Source-to-destination workflow
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              "VMware Source VM",
              "Source Validation",
              "OVF Export",
              "Proxmox Import",
              "Destination Validation",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-950 p-6 text-center font-semibold"
              >
                <span className="mb-3 block text-sm text-cyan-400">
                  Phase {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl leading-8 text-slate-300">
            The source Windows Server workload was first documented and tested
            in VMware Workstation. It was then exported as an OVF appliance,
            imported into Proxmox VE, reconfigured for the destination
            hypervisor, and validated against the original baseline.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Migration Workflow
            </p>

            <h2 className="mt-4 text-3xl font-bold">Major tasks completed</h2>

            <ul className="mt-8 space-y-4">
              {migrationSteps.map((step) => (
                <li key={step} className="flex gap-3 leading-7 text-slate-300">
                  <span className="mt-1 text-cyan-400">✓</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              Validation
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Post-migration testing performed
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
            Platform flexibility and migration readiness
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Cross-platform migration gives organizations greater flexibility
            when modernizing infrastructure, reducing licensing costs,
            replacing legacy virtualization platforms, or consolidating
            workloads. A documented validation process also reduces risk and
            helps confirm that operating systems, networking, applications, and
            data continue functioning after migration.
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