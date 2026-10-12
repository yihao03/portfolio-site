import Container from "@/components/Container";

interface Project {
  name: string;
  role: string;
  period?: string;
  summary: string;
  description: string;
  href: string | null;
  linkLabel?: string;
  extraLinks?: { label: string; href: string }[];
  screenshots?: { src: string; alt: string; caption: string }[];
}

const projects: Project[] = [

  {
    name: "ReMindMe",
    role: "Freelance Developer",
    period: "Dec 2025–Mar 2026",
    summary: "A mobile application developed with MindSpark RUMC to support dementia caregivers in Malaysia.",
    description: "Built event discovery, educational resources, journaling and mood tracking, alongside an administrative dashboard for managing content and users. Published the app on the App Store and Google Play, with backend services hosted on AWS ECS and RDS and traffic managed through Cloudflare.",
    href: null,
  },
  {
    name: "MarkBind",
    role: "Senior Developer",
    period: "Jan 2025–Present",
    summary: "An open-source static site generator for technical documentation.",
    description: "Implemented dark mode, improved components and added AI skills to support content editing. Established guidelines for development with LLM agents and completed a migration away from legacy CommonJS and dependencies to improve maintainability, performance and security.",
    href: "https://markbind.org/",
  },
  {
    name: "SourceAcademy i18n",
    role: "Developer",
    period: "Jan–May 2025",
    summary: "Translation infrastructure for Structure and Interpretation of Computer Programs, the digital textbook used in NUS CS1101S.",
    description: "Built an automated translation workflow with language- and section-specific dictionaries and prompts. Designed the system to accept community contributions to improve translation quality.",
    href: null,
  },

  {
    name: "Historical Adventures",
    role: "CS3216 · Assignment 3",
    summary: "Historical sources become playable worlds where students explore evidence, meet competing stakeholders and make consequential decisions.",
    description: "Contributed the adventure generation pipeline, Phaser renderer and game client, and teacher-console generation flows. The platform lets teachers turn source material into interactive adventures, with a debrief that distinguishes documented history from simulation assumptions.",
    href: "https://historical-adventures-ten.vercel.app",
    linkLabel: "Explore the app",
    extraLinks: [{ label: "Source code", href: "https://github.com/damiancxliew/CS3216_Assignment3" }],
  },
  {
    name: "Dueet",
    role: "CS3216 · Team project",
    summary: "A social productivity concept that helps friends build momentum together.",
    description: "The interactive landing page presents daily planning, shared progress and check-ins, alongside voice and photo task capture, Canvas assignment syncing and suggested next tasks. Scroll-driven mobile previews bring the product’s workflows to life.",
    href: "https://yihao03.github.io/dueet_landing/",
    linkLabel: "Explore Dueet",
  },
  {
    name: "Neovim",
    role: "Personal configuration",
    summary: "A keyboard-first development environment built on LazyVim, tailored to how I work.",
    description: "Custom Lua modules bring repository issues and pull requests into the dashboard, alongside coding, debugging, AI assistance and Markdown and LaTeX workflows.",
    href: "https://github.com/yihao03/nvim",
    linkLabel: "View configuration",
    screenshots: [
      { src: "/images/projects/neovim-pr.png", alt: "Neovim dashboard showing the file explorer, recent files, open issues and pull requests", caption: "Repository dashboard with issues and pull requests" },
      { src: "/images/projects/neovim-no-pr.png", alt: "Neovim dashboard in a repository without issues or pull requests", caption: "Dashboard without repository issues or pull requests" },
    ],
  },
  {
    name: "Hyprland",
    role: "Personal configuration",
    summary: "A modular Linux desktop configuration with Vim-style navigation and consistent keyboard shortcuts.",
    description: "Lua modules adapt the same controls to dwindle and scrolling layouts, with modes for moving windows and managing displays. Workspace navigation, monitor mirroring, lid handling and session management are integrated into the everyday workflow.",
    href: "https://github.com/yihao03/hyprland-dots",
    linkLabel: "View configuration",
  },

];

const groups = [
  { title: "Projects", projects: projects.slice(0, 3) },
  { title: "CS3216 projects", projects: projects.slice(3, 5) },
  { title: "Developer setup", projects: projects.slice(5) },
];

export default function Projects() {
  return (
    <Container>
      <section className="mx-auto w-full max-w-5xl px-2 pb-16 sm:px-6" aria-labelledby="projects-heading">
        <header className="mb-14 sm:mb-20">
          <h1 id="projects-heading" className="font-bold tracking-tight text-gray-100">Projects</h1>
        </header>
        <div className="space-y-24 sm:space-y-32">
          {groups.map((group) => (
            <section key={group.title} aria-label={group.title}>
              {group.title !== "Projects" && <h2 className="mb-10 text-lg font-semibold text-gray-200">{group.title}</h2>}
              <div className="space-y-16 sm:space-y-24">
                {group.projects.map((project) => (
                  <article key={project.name} className="w-full">
                    <div>
                      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
                        <div>
                          {project.period && <p className="mb-3 text-sm text-gray-400">{project.period}</p>}
                          <h3 className="text-3xl font-semibold leading-tight tracking-tight text-gray-100 sm:text-4xl">{project.name}</h3>
                          <p className="mt-3 text-sm text-blue-200">{project.role}</p>
                          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                            {project.href && (
                              <a href={project.href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm text-blue-300 transition-colors hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                                {project.linkLabel ?? "Visit " + project.name}<span aria-hidden="true" className="inline-block transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                              </a>
                            )}
                            {project.extraLinks?.map((link) => (
                              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-300 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">{link.label} <span aria-hidden="true">↗</span></a>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xl leading-relaxed text-gray-200">{project.summary}</p>
                          <p className="mt-5 max-w-prose text-base leading-7 text-gray-400">{project.description}</p>
                        </div>
                      </div>
                      {project.screenshots && (
                        <div className="mt-10 grid gap-6 sm:grid-cols-2">
                          {project.screenshots.map((screenshot) => (
                            <figure key={screenshot.src} className="min-w-0">
                              <a href={screenshot.src} target="_blank" rel="noopener noreferrer" className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                                <img src={screenshot.src} alt={screenshot.alt} width={1920} height={1080} loading="lazy" decoding="async" className="h-auto w-full rounded-md" />
                              </a>
                              <figcaption className="mt-3 text-xs leading-relaxed text-gray-400">{screenshot.caption}</figcaption>
                            </figure>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </Container>
  );
}
