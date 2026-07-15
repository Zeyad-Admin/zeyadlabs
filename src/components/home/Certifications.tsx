const certifications = [
  {
    name: "CompTIA A+",
    status: "Completed",
    description:
      "Validated foundational skills in hardware, operating systems, troubleshooting, security, networking, and technical support.",
  },
  {
    name: "CompTIA Network+",
    status: "Completed",
    description:
      "Validated networking knowledge across TCP/IP, routing, switching, troubleshooting, security, and network operations.",
  },
  {
    name: "BCIT Technology Support Professional",
    status: "Completed",
    description:
      "Completed hands-on training in enterprise infrastructure, Windows Server, networking, virtualization, cloud, deployment, and technical support.",
  },
  {
    name: "Microsoft Azure Administrator AZ-104",
    status: "In Progress",
    description:
      "Developing Azure administration skills through identity, networking, virtual machines, storage, monitoring, and governance labs.",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-t border-slate-800 bg-slate-900/30 px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Certifications & Learning
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Building deeper expertise across infrastructure and cloud
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Formal education, industry certifications, and continuous practical
            development across enterprise IT technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certification) => (
            <article
              key={certification.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white">
                  {certification.name}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    certification.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-blue-500/10 text-blue-400"
                  }`}
                >
                  {certification.status}
                </span>
              </div>

              <p className="mt-4 leading-7 text-slate-300">
                {certification.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}