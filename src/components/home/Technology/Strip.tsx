const technologies = [
  { icon: "🪟", name: "Windows Server" },
  { icon: "☁", name: "Azure" },
  { icon: "💠", name: "Hyper-V" },
  { icon: "🟠", name: "VMware" },
  { icon: "🟧", name: "Proxmox" },
  { icon: "🐧", name: "Linux" },
  { icon: "🟢", name: "OPNsense" },
  { icon: "🗄", name: "SQL Server" },
];

export default function TechnologyStrip() {
  return (
    <section className="border-y border-slate-900 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900"
          >
            <span className="text-xl">{tech.icon}</span>

            <span className="font-medium text-slate-300 transition-colors group-hover:text-white">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}