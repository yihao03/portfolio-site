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
      <section className="mx-auto w-full max-w-5xl px-2 pb-12 sm:px-6" aria-labelledby="projects-heading">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-300">Selected work</p>
        <h1 id="projects-heading" className="mb-10 font-bold text-gray-100">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.name} className={"flex flex-col rounded-xl border border-gray-600 bg-gray-900/50 p-6 sm:p-8 " + (index === 0 ? "md:col-span-2" : "")}>
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-100">{project.name}</h2>
                  <p className="mt-1 text-sm text-blue-200">{project.role}</p>
                </div>
                <p className="shrink-0 text-sm text-gray-400">{project.period}</p>
              </div>
              <p className="mb-4 text-lg leading-relaxed text-gray-200">{project.summary}</p>
              <p className="mb-6 leading-relaxed text-gray-400">{project.description}</p>
              <ul aria-label="Project focus" className="mt-auto flex flex-wrap gap-2">
                {project.focus.map((focus) => <li key={focus} className="rounded-full border border-gray-600 px-3 py-1 text-xs text-gray-300">{focus}</li>)}
              </ul>
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-5 w-fit text-blue-300 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  Visit {project.name} <span aria-hidden="true">↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
