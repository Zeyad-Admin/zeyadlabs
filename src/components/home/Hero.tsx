const resumePath = "/Zeyad_Almahmoudi_Resume_IT_Support.pdf";

type TopologyNodeProps = {
  title: string;
  description: string;
  dotClassName?: string;
};

function TopologyNode({
  title,
  description,
  dotClassName = "bg-cyan-400",
}: TopologyNodeProps) {
  return (
    <div className="mx-auto w-full max-w-[220px] rounded-xl border border-slate-700 bg-slate-900 px-4 py-4">
      <div className="flex items-center gap-2">
        <span
          className={`h-2 w-2 rounded-full ${dotClassName}`}
          aria-hidden="true"
        />

        <p className="text-sm font-bold text-white">{title}</p>
      </div>

      <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
    </div>
  );
}

function Connector() {
  return (
    <div
      className="mx-auto h-7 w-px bg-gradient-to-b from-slate-600 to-blue-500"
      aria-hidden="true"
    />
  );
}

function TopologyService({ title }: { title: string }) {
  return (
    <div className="flex min-h-24 flex-col items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-2 py-3 text-center">
      <span
        className="mb-3 h-2 w-2 rounded-full bg-cyan-400"
        aria-hidden="true"
      />

      <p className="text-[11px] font-bold leading-4 text-white">{title}</p>
    </div>
  );
}

function StatusMetric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-4 text-center">
      <p className="text-sm font-bold text-emerald-400">{value}</p>

      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

function HeroStatistic({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/50 px-5 py-5 transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900">
      <p className="text-3xl font-black tracking-tight text-white">{value}</p>

      <p className="mt-1 text-sm font-medium text-slate-400">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 pb-20 pt-20 lg:pb-28 lg:pt-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/[0.08] px-4 py-2">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400"
              aria-hidden="true"
            />

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              Available for Infrastructure & Systems Roles
            </p>
          </div>

          <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Enterprise Infrastructure
            <span className="block text-slate-200">
              & Systems Administrator
            </span>
          </h1>

          <p className="mt-7 text-lg font-bold text-cyan-400 sm:text-xl">
            Windows Server • Virtualization • Networking • Cloud
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I design, document, migrate, and troubleshoot enterprise-style
            environments across Active Directory, Hyper-V, VMware, Proxmox,
            OPNsense, Microsoft Azure, and SQL Server.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex min-h-14 items-center justify-center rounded-xl bg-blue-600 px-7 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
            >
              View Projects
            </a>

            <a
              href={resumePath}
              download
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-7 text-sm font-bold text-emerald-300 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-400/15 hover:text-emerald-200"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/Zeyad-Admin"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 px-6 text-sm font-bold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-white"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl gap-4 border-t border-slate-800 pt-8 sm:grid-cols-3">
            <HeroStatistic value="20+" label="Documented Projects" />
            <HeroStatistic value="15 Years" label="Enterprise Experience" />
            <HeroStatistic value="300+" label="Devices Supported" />
          </div>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-8 rounded-full bg-blue-600/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative rounded-3xl border border-slate-700 bg-slate-900/70 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Enterprise Lab Topology
              </p>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                />
                Online
              </span>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <TopologyNode
                title="Internet"
                description="External connectivity"
                dotClassName="bg-cyan-400"
              />

              <Connector />

              <TopologyNode
                title="OPNsense"
                description="Firewall, routing and segmentation"
                dotClassName="bg-emerald-400"
              />

              <Connector />

              <TopologyNode
                title="Core Network"
                description="Enterprise infrastructure services"
                dotClassName="bg-blue-400"
              />

              <Connector />

              <div className="relative grid grid-cols-2 gap-2 border-t border-blue-500/50 pt-5 sm:grid-cols-4">
                <TopologyService title="Active Directory" />
                <TopologyService title="Hyper-V" />
                <TopologyService title="SQL Server" />
                <TopologyService title="Azure" />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <StatusMetric value="Healthy" label="Identity" />
              <StatusMetric value="Protected" label="Network" />
              <StatusMetric value="Validated" label="Workloads" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}