const experience = [
  {
    period: "Sep 2025 – Jun 2026",
    role: "Technology Support Professional",
    organization: "British Columbia Institute of Technology",
    description:
      "Completed intensive hands-on training in enterprise infrastructure, Windows Server, Active Directory, networking, virtualization, Azure, deployment services, storage, automation, and technical support.",
  },
  {
    period: "May 2026 – Jun 2026",
    role: "IT Support Practicum",
    organization: "Vancouver Community Network",
    description:
      "Completed infrastructure and technical-support projects involving OPNsense network segmentation, Hyper-V virtual networking, troubleshooting, SQL Server migration research, validation, and detailed technical documentation.",
  },
  {
    period: "Earlier Career",
    role: "IT Support and Operations",
    organization: "Mellitah Oil & Gas",
    description:
      "Provided enterprise end-user support, account administration, password resets, hardware and software troubleshooting, network-connectivity support, remote assistance, and incident resolution for hundreds of users and devices.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-800 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Enterprise support, infrastructure, and continuous development
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            A career path combining enterprise operations, technical support,
            formal infrastructure training, and practical lab implementation.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {experience.map((item) => (
            <article
              key={`${item.period}-${item.role}`}
              className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:grid-cols-[180px_1fr]"
            >
              <p className="text-sm font-semibold text-cyan-400">
                {item.period}
              </p>

              <div>
                <h3 className="text-xl font-bold text-white">{item.role}</h3>

                <p className="mt-1 font-medium text-blue-400">
                  {item.organization}
                </p>

                <p className="mt-4 leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}