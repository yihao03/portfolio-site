import Container from "@/components/Container";
import { PageIndexMenu, PageIndexSidebar } from "@/components/PageIndex";
import { Link } from "react-router";

interface Course {
  code: string;
  name: string;
  grade?: string;
  status?: string;
  topStudent?: boolean;
  credential?: string;
  link?: string;
  linkLabel?: string;
  projectLinks?: { label: string; href: string }[];
}

const groups: { id: string; title: string; courses: Course[] }[] = [
  {
    title: "Currently taking",
    courses: [
      { code: "CS3235", name: "Computer Security", status: "In progress" },
      {
        code: "CS3210",
        name: "Parallel Computing",
        status: "In progress",
        projectLinks: [
          {
            label: "2D particle collision simulator",
            href: "/projects#2d-particle-collision-simulator",
          },
          { label: "CUDA ray tracing", href: "/projects#cuda-ray-tracing" },
        ],
      },
      {
        code: "CS3216",
        name: "Software Product Engineering for Digital Markets",
        status: "In progress",
        projectLinks: [
          { label: "Pocket Adventures", href: "/projects#pocket-adventures" },
          { label: "Dueet", href: "/projects#dueet" },
        ],
      },
      {
        code: "CS3219",
        name: "Software Design and Architecture",
        status: "In progress",
        link: "/projects#friend-on-campus",
        linkLabel: "Friend on Campus",
      },
      {
        code: "IT2900",
        name: "Technical Management and Leadership",
        status: "In progress",
      },
      {
        code: "NHS2108",
        name: "Morality: Fact or Fiction",
        status: "In progress",
      },
    ],
  },
  {
    title: "Systems & Security",
    courses: [
      {
        code: "CS2106",
        name: "Introduction to Operating Systems",
        grade: "A+",
      },
      {
        code: "CS2105",
        name: "Introduction to Computer Networks",
        grade: "A+",
      },
      {
        code: "CS2107",
        name: "Introduction to Information Security",
        grade: "A+",
        topStudent: true,
        credential:
          "https://credentials.nus.edu.sg/4af0ceb8-9229-4a16-82e6-fed7f7c515d9",
      },
      {
        code: "CS2100",
        name: "Computer Organisation",
      },
    ],
  },
  {
    title: "Software & Applied Projects",
    courses: [
      { code: "CP3108A", name: "Independent Work" },
      {
        code: "NEP3001",
        name: "Impact Experience Project",
        status: "In progress",
      },
      {
        code: "CS2103T",
        name: "Software Engineering",
        grade: "A+",
        topStudent: true,
        link: "/experiences#cs2103t-ta",
        linkLabel: "Teaching assistant",
      },
      {
        code: "CS3281",
        name: "Thematic Systems Project I",
        grade: "A+",
        link: "/projects#markbind",
        linkLabel: "MarkBind",
      },
      {
        code: "CP3107",
        name: "Computing for Social Service Agencies I",
        grade: "A+",
        link: "/experiences#cvwo-2025",
        linkLabel: "CVWO 2025",
      },
      {
        code: "CP3110",
        name: "CVWO 2026",
        link: "/experiences#cvwo-2026",
        linkLabel: "View experience",
      },
    ],
  },
  {
    title: "Programming & Algorithms",
    courses: [
      { code: "CS2040S", name: "Data Structures and Algorithms" },
      {
        code: "CS1101S",
        name: "Programming Methodology",
        grade: "A+",
      },
      {
        code: "CS2030S",
        name: "Programming Methodology II",
      },
      {
        code: "CS3230",
        name: "Design and Analysis of Algorithms",
      },
      {
        code: "CS1231S",
        name: "Discrete Structures",
      },
    ],
  },
  {
    title: "Mathematics, Data & AI",
    courses: [
      {
        code: "MA1522",
        name: "Linear Algebra for Computing",
        grade: "A+",
      },
      {
        code: "ST2334",
        name: "Probability and Statistics",
        grade: "A+",
      },
      {
        code: "GEA1000N",
        name: "Quantitative Reasoning with Data",
        grade: "A+",
      },
      {
        code: "MA1521",
        name: "Calculus for Computing",
      },
      {
        code: "CS2109S",
        name: "Introduction to AI and Machine Learning",
      },
    ],
  },
  {
    title: "Humanities & Society",
    courses: [
      {
        code: "NGN2001G",
        name: "Global Narratives",
        link: "/hobbies#roachman-heading",
        linkLabel: "The Roachman Theme",
      },
      {
        code: "NSW2001I",
        name: "Understanding the Social World: Singapore & Beyond",
      },
      { code: "NHS2075", name: "Life at the Bottom" },
      { code: "NTW2040", name: "The Limits of Money" },
      { code: "NGT2001D", name: "Global Social Thought" },
      { code: "NST2062", name: "Mind and Machine" },
      { code: "IS1108", name: "Digital Ethics and Data Privacy" },
    ],
  },
  {
    title: "Communication & Music",
    courses: [
      {
        code: "CS2101",
        name: "Effective Communication for Computing Professionals",
      },
      { code: "CFA1101A", name: "Performing Arts in Practice (Music) 1" },
      { code: "CFA2101A", name: "Performing Arts in Practice (Music) 2" },
    ],
  },
].map((group) => ({
  ...group,
  id: group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));

const indexSections = groups.map(({ id, title }) => ({ id, title }));

const linkStyle =
  "text-sm text-blue-300 underline underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300";

export default function Education() {
  return (
    <Container>
      <section className="w-full" aria-labelledby="education-heading">
        <header className="mb-12">
          <div className="mb-8 flex items-center justify-between gap-6">
            <h1 id="education-heading">Education</h1>
            <PageIndexMenu sections={indexSections} label="Education index" />
          </div>
          <h2 className="text-xl font-semibold text-gray-200">
            National University of Singapore
          </h2>
          <p className="mt-2 text-gray-400">
            Bachelor of Computing in Computer Science · NUS College
          </p>
          <Link
            to="/experiences#cs2103t-ta"
            className={linkStyle + " mt-4 inline-block"}
          >
            Teaching assistant for CS2103T
          </Link>
        </header>
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_10rem] lg:items-start lg:gap-12">
          <div className="max-w-3xl min-w-0">
            <h2 className="mb-8 text-2xl font-semibold text-gray-100">
              Coursework
            </h2>
            <div className="space-y-10">
              {groups.map((group) => (
                <section key={group.id} id={group.id} aria-label={group.title}>
                  <h3 className="mb-3 text-base font-semibold text-gray-200">
                    {group.title}
                  </h3>
                  <ul className="divide-y divide-white/10">
                    {group.courses.map((course) => (
                      <li
                        key={course.code}
                        className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 py-4 sm:grid-cols-[6rem_minmax(0,1fr)_auto]"
                      >
                        <span className="text-sm font-medium text-gray-400">
                          {course.code}
                        </span>
                        <div className="col-start-1 row-start-2 mt-1 min-w-0 sm:col-start-2 sm:row-start-1 sm:mt-0">
                          <p className="text-base text-gray-200">
                            {course.name}
                          </p>
                          {(course.topStudent ||
                            course.link ||
                            course.projectLinks?.length) && (
                            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                              {course.topStudent &&
                                (course.credential ? (
                                  <a
                                    href={course.credential}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkStyle}
                                  >
                                    Top student · View award ↗
                                  </a>
                                ) : (
                                  <span className="text-sm text-blue-200">
                                    Top student
                                  </span>
                                ))}
                              {course.link && (
                                <Link to={course.link} className={linkStyle}>
                                  {course.linkLabel}
                                </Link>
                              )}
                              {course.projectLinks?.map((project) => (
                                <Link
                                  key={project.href}
                                  to={project.href}
                                  className={linkStyle}
                                >
                                  {project.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                        {(course.grade === "A+" || course.status) && (
                          <span
                            aria-label={
                              course.grade === "A+" ? "Grade A+" : course.status
                            }
                            className={
                              "col-start-2 row-start-1 self-start rounded px-2 py-0.5 text-xs font-medium sm:col-start-3 " +
                              (course.grade === "A+"
                                ? "bg-blue-300/10 text-blue-200"
                                : "bg-white/5 text-gray-300")
                            }
                          >
                            {course.grade === "A+" ? "A+" : course.status}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
          <PageIndexSidebar sections={indexSections} label="Education index" />
        </div>
      </section>
    </Container>
  );
}
