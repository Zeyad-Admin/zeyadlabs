export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-800 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Let&apos;s build something together
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I&apos;m actively seeking IT Support, Systems Administration,
          Infrastructure Support, and Cloud Administration opportunities.
        </p>

        <div className="mt-12 space-y-4">
          <p className="text-slate-300">
            zeyadalmahmoudi@gmail.com
          </p>

          <p className="text-slate-300">
            Burnaby, British Columbia, Canada
          </p>

          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/Zeyad-Admin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/zeyadalmahmoudi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 transition hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}