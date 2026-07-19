import Link from "next/link";

const technologies = [
  "Microsoft Azure",
  "Azure Virtual Machines",
  "Azure Virtual Network",
  "Network Security Groups",
  "Microsoft Entra ID",
  "Azure Storage",
  "Azure Monitor",
  "Resource Groups",
  "Azure Cloud Shell",
  "PowerShell",
];

const implementationTasks = [
  "Created and organized Azure resources within dedicated resource groups.",
  "Designed and deployed Azure virtual networks and subnets.",
  "Created Windows virtual machines using appropriate compute configurations.",
  "Configured network interfaces, private IP addressing, and connectivity.",
  "Applied Network Security Group rules to control inbound and outbound traffic.",
  "Configured Microsoft Entra ID users and identity-related settings.",
  "Deployed and managed Azure storage resources.",
  "Used Azure Cloud Shell and PowerShell for administration and validation.",
  "Configured monitoring and reviewed virtual-machine performance information.",
  "Tested connectivity between Azure resources and lab systems.",
  "Reviewed resource utilization, configuration, and service health.",
  "Documented deployment steps, validation results, and troubleshooting actions.",
];

const validationTests = [
  "Azure virtual machine deployed successfully",
  "Virtual network and subnet configuration verified",
  "Private IP addressing confirmed",
  "Network Security Group rules tested",
  "Remote administrative connectivity validated",
  "Microsoft Entra ID access confirmed",
  "Azure storage resources accessible",
  "Monitoring and resource-health information reviewed",
  "Cloud Shell and PowerShell administration tested",
];

export default function CloudInfrastructurePage() {
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
            Cloud Infrastructure Project
          </p>

          <h1 className="mt-5 max-w-5xl text-4xl font-extrabold tracking-tight md:text-6xl">
            Microsoft Azure Infrastructure
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Design, deployment, administration, and validation of Microsoft
            Azure infrastructure covering virtual machines, networking,
            identity, storage, monitoring, resource organization, and cloud
            administration.
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
              href="https://github.com/Zeyad-Admin/azure-active-directory-domain-lab"
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
              Practical cloud infrastructure administration
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-300">
              <p>
                This project established a practical Microsoft Azure
                environment for deploying, organizing, securing, and
                administering cloud-based infrastructure resources.
              </p>

              <p>
                Azure virtual machines were deployed inside structured virtual
                networks and subnets. Network Security Groups were used to
                control traffic, while resource groups provided a logical
                structure for managing related services.
              </p>

              <p>
                The environment also covered Microsoft Entra ID, Azure Storage,
                monitoring, Cloud Shell, and PowerShell administration to
                demonstrate common cloud-support and infrastructure workflows.
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
                  Cloud Infrastructure
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Platform</dt>
                <dd className="mt-1 font-semibold text-white">
                  Microsoft Azure
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Compute</dt>
                <dd className="mt-1 font-semibold text-white">
                  Azure Virtual Machines
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Networking</dt>
                <dd className="mt-1 font-semibold text-white">
                  VNets, Subnets and NSGs
                </dd>
              </div>

              <div>
                <dt className="text-sm text-slate-400">Role</dt>
                <dd className="mt-1 font-semibold text-white">
                  Cloud Infrastructure Administrator
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
            Azure infrastructure architecture
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {[
              "Resource Group",
              "Virtual Network",
              "Network Security",
              "Virtual Machines",
              "Monitoring",
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
            Azure resources were organized inside a dedicated resource group.
            Virtual machines operated within configured virtual networks and
            subnets, while Network Security Groups controlled access. Azure
            monitoring tools provided visibility into performance, service
            status, and resource health.
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
            Scalable and centrally managed infrastructure
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Microsoft Azure enables organizations to deploy infrastructure
            quickly, scale resources according to demand, centralize identity
            and access, improve visibility through monitoring, and reduce
            dependence on physical hardware. Structured resource management and
            network controls also support secure and maintainable cloud
            environments.
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