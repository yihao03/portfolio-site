import Container from "@/components/Container";

const linkStyle = "text-blue-300 underline underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300";

export default function HomePage() {
  return (
    <Container>
      <section className="mx-auto w-full max-w-3xl px-2 pb-12 sm:px-6" aria-labelledby="home-heading">
        <h1 id="home-heading" className="mb-8 font-bold tracking-tight text-gray-100">Hi, I’m Yi Hao.</h1>
        <div className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            I’m a Year 3 Computer Science student at NUS and{" "}
            <a href="https://nuscollege.nus.edu.sg" target="_blank" rel="noopener noreferrer" className={linkStyle}>NUS College</a>.
          </p>
          <p>
            I care about making an impact through technology and through the people I work with. I enjoy building tools that help others do meaningful work, and I find it just as rewarding to mentor someone or help a team develop its abilities.
          </p>
          <p>
            I enjoy bringing technical depth and structure to open-ended problems, and taking ownership from understanding the problem to delivering something useful. I value working with people who challenge my assumptions, explaining my reasoning clearly and being willing to change my mind.
          </p>
          <p>
            I love tinkering with my setup and spend a lot of time making it ergonomic and fit like a glove. Take a look at my{" "}
            <a href="https://github.com/yihao03/nvim" target="_blank" rel="noopener noreferrer" className={linkStyle}>Neovim</a>{" "}
            and{" "}
            <a href="https://github.com/yihao03/hyprland-dots" target="_blank" rel="noopener noreferrer" className={linkStyle}>Hyprland</a>{" "}
            configs.
          </p>
          <p>
            Feel free to contact me for collaborations at{" "}
            <a href="mailto:yihao.dev@gmail.com" className={linkStyle}>yihao.dev@gmail.com</a>.
          </p>
        </div>
      </section>
    </Container>
  );
}
