import Link from "next/link";

const technologies = [
  "Windows Server 2022",
  "Active Directory Domain Services",
  "DNS",
  "Group Policy",
  "Organizational Units",
  "Users and Groups",
  "PowerShell",
  "Hyper-V",
];

const implementationTasks = [
  "Deployed Windows Server virtual machines in an isolated Hyper-V environment.",
  "Installed and configured Active Directory Domain Services.",
  "Promoted Windows Server systems to domain controllers.",
  "Created an organizational unit structure for departments, users, computers, and administrative accounts.",
  "Created and managed domain users, security groups, and computer accounts.",
  "Configured Active Directory-integrated DNS services.",
  "Implemented Group Policy settings for centralized configuration and security.",
  "Configured an additional domain controller to provide redundancy.",
  "Validated domain authentication, DNS resolution, replication, and policy application.",
  "Documented the environment, implementation process, and validation results.",
];

const validationTests = [
  "Successful domain-user authentication",
  "Active Directory replication between domain controllers",
  "Forward and reverse DNS resolution",
  "Group Policy processing on domain-joined clients",
  "Domain-joined computer communication",
  "User and security-group membership verification",
  "Administrative access and service availability",
];

export default function DomainServicesPage() {
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
            Enterprise Infrastructure Project
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Enterprise Active Directory Infrastructure
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Design, deployment, administration, and validation of a Microsoft
            Windows Server domain environment providing centralized identity,
            authentication, DNS, organizational management, and Group Policy.
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
              Centralized identity and domain administration
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-300">
              <p>
                This project involved designing and administering a Microsoft
                Active Directory environment that recreated core services
                commonly used within business and enterprise networks.
              </p>

              <p>
                The infrastructure provided centralized user authentication,
                computer management, DNS name resolution, organizational
                structure, security-group administration, and policy
                enforcement.
              </p>

              <p>
                Multiple Windows Server systems and Windows client machines
                were used to validate domain functionality, redundancy,
                communication, and administrative workflows.
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
                  Identity and Access Management
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Platform</dt>
                <dd className="mt-1 font-semibold text-white">
                  Windows Server 2022
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Environment</dt>
                <dd className="mt-1 font-semibold text-white">
                  Hyper-V Enterprise Lab
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Core Services</dt>
                <dd className="mt-1 font-semibold text-white">
                  AD DS, DNS and Group Policy
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Role</dt>
                <dd className="mt-1 font-semibold text-white">
                  Infrastructure Administrator
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
            Domain-services architecture
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              "Windows Clients",
              "Active Directory",
              "DNS Services",
              "Group Policy",
            ].map((item, index) => (
              <div
                key={item}
                className="relative rounded-xl border border-slate-700 bg-slate-950 p-6 text-center font-semibold"
              >
                <span className="mb-3 block text-sm text-cyan-400">
                  Layer {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl leading-8 text-slate-300">
            Domain-joined Windows clients communicate with Windows Server
            domain controllers for authentication, directory access, DNS name
            resolution, computer management, and centralized Group Policy
            processing.
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
                <li
                  key={task}
                  className="flex gap-3 leading-7 text-slate-300"
                >
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
            Secure and manageable enterprise identity
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Centralized domain services allow organizations to manage user
            identities, computers, authentication, security policies, and
            access consistently. This reduces administrative overhead, improves
            security, supports organizational growth, and creates a reliable
            foundation for enterprise applications and infrastructure.
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