import Container from "@/components/Container";
import { Link } from "react-router";

const linkStyle =
  "text-blue-300 underline underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300";

export default function HomePage() {
  return (
    <Container>
      <section className="w-full max-w-[68ch]" aria-labelledby="home-heading">
        <h1 id="home-heading" className="mb-8">
          Hi, I’m Yi Hao.
        </h1>
        <div className="space-y-6 text-base leading-8 text-gray-300 sm:text-lg">
          <p>
            I’m a Year 3 Computer Science student at NUS. I enjoy building interesting products and solving difficult problems. I’m also part of{" "}
            <a href="https://nuscollege.nus.edu.sg" target="_blank" rel="noopener noreferrer" className={linkStyle}>NUS College</a>,
            where I explore topics in philosophy, nature, and social issues like poverty.
          </p>
          <p>
            I care about making an impact through technology and through the
            people I work with. I enjoy building tools that help others do
            meaningful work, and I find it just as rewarding to mentor someone
            or help a team develop its abilities.
          </p>
          <p>
            I enjoy bringing technical depth and structure to open-ended
            problems, and taking ownership from understanding the problem to
            delivering something useful. I value working with people who
            challenge my assumptions, explaining my reasoning clearly and being
            willing to change my mind.
          </p>
          <p>
            I love tinkering with my setup and spend a lot of time making it
            ergonomic and fit like a glove. Take a look at my{" "}
            <a
              href="https://github.com/yihao03/nvim"
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyle}
            >
              Neovim
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/yihao03/hyprland-dots"
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyle}
            >
              Hyprland
            </a>{" "}
            configs.
          </p>
          <p>
            Feel free to contact me for collaborations at{" "}
            <a href="mailto:yihao.dev@gmail.com" className={linkStyle}>
              yihao.dev@gmail.com
            </a>
            .
          </p>
        </div>
        <nav
          aria-label="Explore my work"
          className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm font-medium"
        >
          <Link to="/projects" className="py-1 underline">
            View projects
          </Link>
          <Link to="/experiences" className="py-1 underline">
            View experience
          </Link>
        </nav>
      </section>
    </Container>
  );
}
