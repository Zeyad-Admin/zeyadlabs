import Experience from "@/components/home/Experience";
import Certifications from "@/components/home/Certifications";
import Contact from "@/components/home/Contact";
import HomeLab from "@/components/home/HomeLab";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ProjectCard from "@/components/projects/ProjectCard";
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
          Building enterprise-grade infrastructure solutions with Windows
          Server, Hyper-V, Azure, Microsoft 365, Networking, Virtualization, and
          Automation.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button>View Projects</Button>
          <Button variant="secondary">Download Resume</Button>
        </div>
      </section>

      <section
        id="projects"
        className="border-t border-slate-800 bg-slate-900/30 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Featured Projects
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Enterprise infrastructure built through practical labs
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Selected projects demonstrating Windows Server administration,
              virtualization, networking, migration, troubleshooting, and
              technical documentation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ProjectCard
              title="Enterprise Active Directory Infrastructure"
              description="Designed and deployed a Microsoft enterprise environment using Active Directory, DNS, DHCP, Group Policy, file services, and AGDLP access control."
              technologies={[
                "Windows Server",
                "Active Directory",
                "DNS",
                "DHCP",
                "Group Policy",
              ]}
            />

            <ProjectCard
              title="VMware to Proxmox Migration"
              description="Validated and documented the migration of Windows Server and SQL Server workloads from VMware to Proxmox VE while preserving system functionality and data integrity."
              technologies={[
                "VMware",
                "Proxmox VE",
                "Windows Server",
                "SQL Server",
                "OVF",
              ]}
            />

            <ProjectCard
              title="Hyper-V and iSCSI Home Lab"
              description="Built nested Hyper-V hosts connected to shared iSCSI storage using Storage Spaces, parity, private storage networking, and enterprise-style validation."
              technologies={[
                "Hyper-V",
                "iSCSI",
                "Storage Spaces",
                "PowerShell",
                "Windows Server",
              ]}
            />
          </div>
        </div>
      </section>

      <Experience />
       <Certifications />
       <HomeLab />
       <Contact />
       <Footer />
    </main>
  );
}