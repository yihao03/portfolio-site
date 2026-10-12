import Container from "@/components/Container";

const projects = [
  {
    name: "ReMindMe",
    role: "Freelance Developer",
    period: "Dec 2025–Mar 2026",
    summary: "A mobile application developed with MindSpark RUMC to support dementia caregivers in Malaysia.",
    description: "Built event discovery, educational resources, journaling and mood tracking, alongside an administrative dashboard for managing content and users. Published the app on the App Store and Google Play, with backend services hosted on AWS ECS and RDS and traffic managed through Cloudflare.",
    focus: ["Mobile development", "Caregiver support", "Cloud deployment"],
    href: null,
  },
  {
    name: "MarkBind",
    role: "Senior Developer",
    period: "Jan 2025–Present",
    summary: "An open-source static site generator for technical documentation.",
    description: "Implemented dark mode, improved components and added AI skills to support content editing. Established guidelines for development with LLM agents and completed a migration away from legacy CommonJS and dependencies to improve maintainability, performance and security.",
    focus: ["Open source", "Developer tooling", "AI-assisted workflows"],
    href: "https://markbind.org/",
  },
  {
    name: "SourceAcademy i18n",
    role: "Developer",
    period: "Jan–May 2025",
    summary: "Translation infrastructure for Structure and Interpretation of Computer Programs, the digital textbook used in NUS CS1101S.",
    description: "Built an automated translation workflow with language- and section-specific dictionaries and prompts. Designed the system to accept community contributions to improve translation quality.",
    focus: ["Internationalisation", "Translation automation", "Educational tooling"],
    href: null,
  },
];

export default function Projects() {
  return (
    <Container>
      <section className="mx-auto w-full max-w-5xl px-2 pb-16 sm:px-6" aria-labelledby="projects-heading">
        <header className="mb-14 sm:mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-blue-300">Selected work / 01–03</p>
          <h1 id="projects-heading" className="font-bold tracking-tight text-gray-100">Projects</h1>
        </header>
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, index) => (
            <article key={project.name} className="grid gap-5 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-6">
              <p aria-hidden="true" className="pt-1 font-mono text-sm text-gray-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-widest text-gray-400">{project.period}</p>
                  <h2 className="text-3xl font-semibold leading-tight tracking-tight text-gray-100 sm:text-4xl">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-sm text-blue-200">{project.role}</p>
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 text-sm text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                      Visit {project.name}
                      <span aria-hidden="true" className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                    </a>
                  )}
                </div>
                <div>
                  <p className="text-xl leading-relaxed text-gray-200">{project.summary}</p>
                  <p className="mt-5 max-w-prose text-base leading-7 text-gray-400">{project.description}</p>
                  <ul aria-label="Project focus" className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                    {project.focus.map((focus) => <li key={focus}>{focus}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
