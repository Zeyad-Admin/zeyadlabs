import MobileMenu from "@/components/layout/MobileMenu";
const links = [
  { name: "Projects", href: "#projects" },
  { name: "Home Lab", href: "#lab" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-bold">
            ZL
          </div>

          <div>
            <h2 className="font-bold">Zeyad Labs</h2>
            <p className="text-xs text-slate-400">
              Enterprise Infrastructure
            </p>
          </div>
        </div>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
<MobileMenu />
      </nav>
    </header>
  );
}