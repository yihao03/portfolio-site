import Container from "@/components/Container";
import { PageIndexMenu, PageIndexSidebar } from "@/components/PageIndex";

interface Project {
  name: string;
  role: string;
  period?: string;
  summary: string;
  description: string;
  href: string | null;
  linkLabel?: string;
  extraLinks?: { label: string; href: string }[];
  videoId?: string;
  screenshots?: { src: string; alt: string; caption: string }[];
}

const projects: Project[] = [
  {
    name: "Pocket Adventures",
    role: "CS3216 · Assignment 3",
    videoId: "VF4KtwkR5fw",
    summary:
      "Historical sources become playable worlds where students explore evidence, meet competing stakeholders and make consequential decisions.",
    description:
      "Contributed the adventure generation pipeline, Phaser renderer and game client, and teacher-console generation flows. The platform lets teachers turn source material into interactive adventures, with a debrief that distinguishes documented history from simulation assumptions.",
    href: "https://historical-adventures-ten.vercel.app",
    linkLabel: "Explore the app",
    extraLinks: [
      {
        label: "Source code",
        href: "https://github.com/damiancxliew/CS3216_Assignment3",
      },
    ],
  },
  {
    name: "ReMindMe",
    role: "Freelance Developer",
    period: "Dec 2025–Mar 2026",
    summary:
      "A mobile application developed with MindSpark RUMC to support dementia caregivers in Malaysia.",
    description:
      "Built event discovery, educational resources, journaling and mood tracking, alongside an administrative dashboard for managing content and users. Published the app on the App Store and Google Play, with backend services hosted on AWS ECS and RDS and traffic managed through Cloudflare.",
    href: null,
  },
  {
    name: "MarkBind",
    role: "Senior Developer",
    period: "Jan 2025–Present",
    summary:
      "An open-source static site generator for technical documentation.",
    description:
      "Implemented dark mode, improved components and added AI skills to support content editing. Established guidelines for development with LLM agents and completed a migration away from legacy CommonJS and dependencies to improve maintainability, performance and security.",
    href: "https://markbind.org/",
  },
  {
    name: "SourceAcademy i18n",
    role: "Developer",
    period: "Jan–May 2025",
    summary:
      "Translation infrastructure for Structure and Interpretation of Computer Programs, the digital textbook used in NUS CS1101S.",
    description:
      "Built an automated translation workflow with language- and section-specific dictionaries and prompts. Designed the system to accept community contributions to improve translation quality.",
    href: null,
  },
  {
    name: "Dueet",
    role: "CS3216 · Team project",
    summary:
      "A social productivity concept that helps friends build momentum together.",
    description:
      "The interactive landing page presents daily planning, shared progress and check-ins, alongside voice and photo task capture, Canvas assignment syncing and suggested next tasks. Scroll-driven mobile previews bring the product’s workflows to life.",
    href: "https://yihao03.github.io/dueet_landing/",
    linkLabel: "Explore Dueet",
  },
  {
    name: "Friend on Campus",
    role: "CS3219 · Software Design and Architecture",
    summary:
      "A campus errand platform used to experiment with software architecture.",
    description:
      "Exploring microservices, event-driven communication, the saga pattern and Docker orchestration through a system where students request and fulfil campus errands. The project separates users, suppliers, orders and credits into services, with a SvelteKit frontend and Go backends.",
    href: "https://github.com/AY2627S1-CS3219-P1/FoC",
    linkLabel: "Source code",
  },
  {
    name: "2D Particle Collision Simulator",
    role: "CS3210 · Parallel Computing",
    summary:
      "A 2D particle collision simulator for exploring parallel computation.",
    description:
      "Coursework focused on particle movement and collision detection, balancing parallel performance with simulation correctness.",
    href: null,
  },
  {
    name: "CUDA Ray Tracing",
    role: "CS3210 · Parallel Computing",
    summary: "Ray tracing on the GPU using CUDA.",
    description:
      "Coursework exploring GPU parallelism and performance optimisation for rendering, with profiling to understand bottlenecks and checks for image correctness.",
    href: null,
  },
  {
    name: "Neovim",
    role: "Personal configuration",
    summary:
      "A keyboard-first development environment built on LazyVim, tailored to how I work.",
    description:
      "Custom Lua modules bring repository issues and pull requests into the dashboard, alongside coding, debugging, AI assistance and Markdown and LaTeX workflows.",
    href: "https://github.com/yihao03/nvim",
    linkLabel: "View configuration",
    screenshots: [
      {
        src: "/images/projects/neovim-pr.png",
        alt: "Neovim dashboard showing the file explorer, recent files, open issues and pull requests",
        caption: "Repository dashboard with issues and pull requests",
      },
      {
        src: "/images/projects/neovim-no-pr.png",
        alt: "Neovim dashboard in a repository without issues or pull requests",
        caption: "Dashboard without repository issues or pull requests",
      },
    ],
  },
  {
    name: "Hyprland",
    role: "Personal configuration",
    summary:
      "A modular Linux desktop configuration with Vim-style navigation and consistent keyboard shortcuts.",
    description:
      "Lua modules adapt the same controls to dwindle and scrolling layouts, with modes for moving windows and managing displays. Workspace navigation, monitor mirroring, lid handling and session management are integrated into the everyday workflow.",
    href: "https://github.com/yihao03/hyprland-dots",
    linkLabel: "View configuration",
  },
];

const groups = [
  {
    title: "Selected projects",
    id: "selected-projects",
    projects: projects.slice(0, 4),
  },
  { title: "Coursework", id: "coursework", projects: projects.slice(4, 8) },
  {
    title: "Developer setup",
    id: "developer-setup",
    projects: projects.slice(8),
  },
];

function getProjectId(project: Project) {
  return project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

const indexSections = groups.map((group) => ({
  id: group.id,
  title: group.title,
  items: group.projects.map((project) => ({
    id: getProjectId(project),
    title: project.name,
  })),
}));

export default function Projects() {
  return (
    <Container>
      <section className="w-full" aria-labelledby="projects-heading">
        <header className="mb-12 flex items-center justify-between gap-6">
          <h1 id="projects-heading">Projects</h1>
          <PageIndexMenu sections={indexSections} label="Project index" />
        </header>
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_10rem] lg:items-start lg:gap-12">
          <div className="min-w-0 space-y-16 sm:space-y-20">
            {groups.map((group) => (
              <section
                key={group.id}
                id={group.id}
                aria-labelledby={group.id + "-heading"}
              >
                <h2
                  id={group.id + "-heading"}
                  className="mb-8 border-b border-white/10 pb-4 text-lg font-semibold text-gray-200"
                >
                  {group.title}
                </h2>
                <div className="space-y-12 sm:space-y-16">
                  {group.projects.map((project) => (
                    <article
                      id={getProjectId(project)}
                      key={project.name}
                      className="w-full scroll-mt-6"
                    >
                      <div>
                        <div className="grid gap-6 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12">
                          <div>
                            {project.period && (
                              <p className="mb-3 text-sm text-gray-400">
                                {project.period}
                              </p>
                            )}
                            <h3 className="text-2xl leading-tight font-semibold tracking-tight text-gray-100 sm:text-3xl">
                              {project.name}
                            </h3>
                            <p className="mt-3 text-sm text-blue-200">
                              {project.role}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3 empty:hidden">
                              {project.href && (
                                <a
                                  href={project.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm text-blue-300 underline transition-colors hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                                >
                                  {project.linkLabel ?? "Visit " + project.name}
                                  <span
                                    aria-hidden="true"
                                    className="inline-block"
                                  >
                                    ↗
                                  </span>
                                </a>
                              )}
                              {project.extraLinks?.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-blue-300 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                                >
                                  {link.label}{" "}
                                  <span aria-hidden="true">↗</span>
                                </a>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-lg leading-relaxed text-gray-200">
                              {project.summary}
                            </p>
                            <p className="mt-4 max-w-prose text-base leading-7 text-gray-400">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        {project.videoId && (
                          <figure className="mt-10">
                            <iframe
                              src={
                                "https://www.youtube-nocookie.com/embed/" +
                                project.videoId
                              }
                              title={project.name + " demo"}
                              width="960"
                              height="540"
                              loading="lazy"
                              referrerPolicy="strict-origin-when-cross-origin"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="aspect-video h-auto w-full rounded-md border-0 bg-gray-900"
                            />
                            <figcaption className="mt-3 text-sm">
                              <a
                                href={
                                  "https://www.youtube.com/watch?v=" +
                                  project.videoId
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-300 hover:text-blue-200"
                              >
                                Watch on YouTube{" "}
                                <span aria-hidden="true">↗</span>
                              </a>
                            </figcaption>
                          </figure>
                        )}
                        {project.screenshots && (
                          <div className="mt-10 grid gap-6 sm:grid-cols-2">
                            {project.screenshots.map((screenshot) => (
                              <figure key={screenshot.src} className="min-w-0">
                                <a
                                  href={screenshot.src}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                                >
                                  <img
                                    src={screenshot.src}
                                    alt={screenshot.alt}
                                    width={1920}
                                    height={1080}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-auto w-full rounded-md"
                                  />
                                </a>
                                <figcaption className="mt-3 text-xs leading-relaxed text-gray-400">
                                  {screenshot.caption}
                                </figcaption>
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
          <PageIndexSidebar sections={indexSections} label="Project index" />
        </div>
      </section>
    </Container>
  );
}
