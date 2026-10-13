import Container from "@/components/Container";
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
}

const groups: { title: string; courses: Course[] }[] = [
  {
    title: "Currently Taking",
    courses: [
      { code: "CS3235", name: "Computer Security", status: "In progress" },
      { code: "CS3210", name: "Parallel Computing", status: "In progress" },
    ],
  },
  {
    "title": "Systems & Security",
    "courses": [
      {
        "code": "CS2106",
        "name": "Introduction to Operating Systems",
        "grade": "A+"
      },
      {
        "code": "CS2105",
        "name": "Introduction to Computer Networks",
        "grade": "A+"
      },
      {
        "code": "CS2107",
        "name": "Introduction to Information Security",
        "grade": "A+",
        "topStudent": true,
        "credential": "https://credentials.nus.edu.sg/4af0ceb8-9229-4a16-82e6-fed7f7c515d9"
      },
      {
        "code": "CS2100",
        "name": "Computer Organisation",
        "grade": "A-"
      }
    ]
  },
  {
    "title": "Software & Applied Projects",
    "courses": [
      {
        "code": "CS2103T",
        "name": "Software Engineering",
        "grade": "A+",
        "topStudent": true,
        "link": "/experiences#cs2103t-ta",
        "linkLabel": "Teaching assistant"
      },
      {
        "code": "CS3281",
        "name": "Thematic Systems Project I",
        "grade": "A+",
        "link": "/projects#markbind",
        "linkLabel": "MarkBind"
      },
      {
        "code": "CP3107",
        "name": "Computing for Social Service Agencies I",
        "grade": "A+",
        "link": "/experiences#cvwo-2025",
        "linkLabel": "CVWO 2025"
      },
      {
        "code": "CP3110",
        "name": "CVWO 2026",
        "grade": "A",
        "link": "/experiences#cvwo-2026",
        "linkLabel": "View experience"
      }
    ]
  },
  {
    "title": "Programming & Algorithms",
    "courses": [
      {
        "code": "CS1101S",
        "name": "Programming Methodology",
        "grade": "A+"
      },
      {
        "code": "CS2030S",
        "name": "Programming Methodology II",
        "grade": "A"
      },
      {
        "code": "CS3230",
        "name": "Design and Analysis of Algorithms",
        "grade": "A"
      },
      {
        "code": "CS1231S",
        "name": "Discrete Structures",
        "grade": "A"
      }
    ]
  },
  {
    "title": "Mathematics, Data & AI",
    "courses": [
      {
        "code": "MA1522",
        "name": "Linear Algebra for Computing",
        "grade": "A+"
      },
      {
        "code": "ST2334",
        "name": "Probability and Statistics",
        "grade": "A+"
      },
      {
        "code": "GEA1000N",
        "name": "Quantitative Reasoning with Data",
        "grade": "A+"
      },
      {
        "code": "MA1521",
        "name": "Calculus for Computing",
        "grade": "A"
      },
      {
        "code": "CS2109S",
        "name": "Introduction to AI and Machine Learning",
        "grade": "A"
      }
    ]
  }
];

const linkStyle = "text-sm text-blue-300 underline underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300";

export default function Education() {
  return (
    <Container>
      <section className="mx-auto w-[calc(100vw-2rem)] max-w-4xl px-2 pb-16 sm:px-6" aria-labelledby="education-heading">
        <header className="mb-12">
          <h1 id="education-heading" className="mb-6 font-bold tracking-tight text-gray-100">Education</h1>
          <h2 className="text-xl font-semibold text-gray-200">National University of Singapore</h2>
          <p className="mt-2 text-gray-400">Bachelor of Computing in Computer Science · NUS College</p>
          <Link to="/experiences#cs2103t-ta" className={linkStyle + " mt-4 inline-block"}>Teaching Assistant · CS2103T ↗</Link>
        </header>
        <h2 className="mb-8 text-2xl font-semibold text-gray-100">Notable Classes</h2>
        <div className="space-y-10">
          {groups.map((group) => (
            <section key={group.title} aria-label={group.title}>
              <h3 className="mb-3 text-base font-semibold text-gray-200">{group.title}</h3>
              <ul className="divide-y divide-white/10">
                {group.courses.map((course) => (
                  <li key={course.code} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 py-4 sm:grid-cols-[6rem_minmax(0,1fr)_auto]">
                    <span className="font-mono text-sm text-gray-400">{course.code}</span>
                    <div className="col-start-1 row-start-2 mt-1 min-w-0 sm:col-start-2 sm:row-start-1 sm:mt-0">
                      <p className="text-base text-gray-200">{course.name}</p>
                      {(course.topStudent || course.link) && (
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                          {course.topStudent && (course.credential ? (
                            <a href={course.credential} target="_blank" rel="noopener noreferrer" className={linkStyle}>Top student · View award ↗</a>
                          ) : <span className="text-sm text-blue-200">Top student</span>)}
                          {course.link && <Link to={course.link} className={linkStyle}>{course.linkLabel} ↗</Link>}
                        </div>
                      )}
                    </div>
                    <span aria-label={course.grade ? "Grade " + course.grade : course.status} className={"col-start-2 row-start-1 text-base font-semibold sm:col-start-3 " + (course.grade === "A+" ? "text-blue-300" : "text-gray-200")}>{course.grade ?? course.status}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </Container>
  );
}
