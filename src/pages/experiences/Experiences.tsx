import Container from "@/components/Container";

const experiences = [
  {
    role: "Team Lead",
    organisation: "Computing for Voluntary Welfare Organization",
    period: "May–Aug 2026",
    summary: "Led five developers to build Project UMA, an intelligence platform for the Punaravartan Foundation, supporting the Cambodian government’s work to recover lost and stolen cultural artifacts.",
    highlights: [
      "Built a purpose-designed platform for a digital library of over 15,000 files, with customisable artifact metadata, tags and collections.",
      "Modelled relationships between artifacts, investigations, people, locations and events, with timelines to trace an object’s history.",
      "Developed file-processing pipelines for images, videos, PDFs, Office documents, 3D files and emails, with in-app previews and generated thumbnails.",
      "Made content searchable through generated descriptions and transcriptions, combining fuzzy search, semantic search and object similarity comparisons.",
      "Built multi-tenant infrastructure with automated embeddings and abstractions for maintainability and data-intensive operations.",
    ],
  },
  {
    role: "Technical Co-Director",
    organisation: "NUS College Managing Committee",
    period: "Sep 2025–Present",
    links: [
      { label: "nusc.club", href: "https://nusc.club" },
      { label: "lms.nusc.club", href: "https://lms.nusc.club" },
    ],
    summary: "Lead 12 developers across three teams building tools for the NUS College community.",
    highlights: [
      "Oversee venue booking, content management, Telegram automation and logistics systems.",
      "Work with student leaders and other stakeholders to turn community needs into practical tools for everyday use and event operations.",
    ],
  },
  {
    role: "Full Stack Developer",
    organisation: "Computing for Voluntary Welfare Organization",
    period: "May–Aug 2025",
    summary: "Helped modernise a Home Personal Care system, migrating a legacy Ruby on Rails application to a multi-tenant React and Go architecture.",
    highlights: [
      "Built real-time messaging between nurses and patients’ next of kin using WebSockets across web and React Native applications.",
      "Configured mobile release pipelines for the App Store and Google Play using Expo Application Services.",
    ],
  },
];

export default function Experiences() {
  return (
    <Container>
      <section className="mx-auto w-full max-w-4xl px-2 pb-12 sm:px-6" aria-labelledby="experience-heading">
        <h1 id="experience-heading" className="mb-10 font-bold text-gray-100">Experience</h1>
        <ol className="space-y-10 border-l border-gray-600 pl-5 sm:pl-8">
          {experiences.map((experience) => (
            <li key={experience.role + experience.period} className="relative">
              <span aria-hidden="true" className="absolute -left-[27px] top-2 h-3 w-3 rounded-full border-2 border-gray-800 bg-blue-300 sm:-left-[39px]" />
              <article>
                <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-100">{experience.role}</h2>
                    <p className="mt-1 text-base text-blue-200">{experience.organisation}</p>
                  </div>
                  <p className="shrink-0 text-sm text-gray-400">{experience.period}</p>
                </div>
                <p className="mt-4 leading-relaxed text-gray-300">{experience.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-gray-400">
                  {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                {"links" in experience && experience.links && (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {experience.links.map((link) => (
                      <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </section>
    </Container>
  );
}
