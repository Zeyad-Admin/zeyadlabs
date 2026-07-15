export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-white">Zeyad Labs</p>
          <p className="mt-1 text-sm text-slate-400">
            Enterprise Infrastructure • Cloud • Networking
          </p>
        </div>

        <p className="text-sm text-slate-400">
          © 2026 Zeyad Almahmoudi. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}