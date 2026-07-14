import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Enterprise Infrastructure • Cloud • Networking
        </p>

        <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
          Zeyad Labs
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
          Building enterprise-grade infrastructure solutions with Windows Server,
          Hyper-V, Azure, Microsoft 365, Networking, Virtualization, and
          Automation.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button>View Projects</Button>

          <Button variant="secondary">
            Download Resume
          </Button>
        </div>
      </section>
    </main>
  );
}