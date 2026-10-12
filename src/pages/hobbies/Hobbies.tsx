import Container from "@/components/Container";

export default function Hobbies() {
  return (
    <Container>
      <section className="mx-auto w-full max-w-3xl px-2 pb-16 sm:px-6" aria-labelledby="hobbies-heading">
        <h1 id="hobbies-heading" className="mb-12 font-bold tracking-tight text-gray-100">Hobbies</h1>
        <div className="space-y-12">
          <section aria-labelledby="cycling-heading">
            <h2 id="cycling-heading" className="mb-4 text-3xl font-semibold tracking-tight text-gray-100">Cycling</h2>
            <p className="text-lg leading-relaxed text-gray-300">I enjoy cycling and currently ride a Giant Roam 4.</p>
          </section>
          <section aria-labelledby="yangqin-heading">
            <h2 id="yangqin-heading" className="mb-4 text-3xl font-semibold tracking-tight text-gray-100">Yangqin</h2>
            <div className="space-y-5 text-lg leading-relaxed text-gray-300">
              <p>
                I play the yangqin, a Chinese dulcimer, and have won several awards nationally and abroad.
                Most recently, in Qingdao in 2024, I led an ensemble that won an honorary gold award in our category
                and received a bronze medal for my solo performance.
              </p>
              <p>I also performed in Thailand with the NUS Chinese Orchestra earlier in 2026.</p>
              <p>
                In January 2026, I performed with MOJO Chinese Orchestra in{" "}
                <a
                  href="https://www.mer-ch.co/event-details/mojo-chinese-orchestra-gala-concert-2026-symphony-of-light"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 underline underline-offset-4 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                >Symphony of Light</a>{" "}
                at Victoria Concert Hall.
              </p>
            </div>
          </section>
        </div>
      </section>
    </Container>
  );
}
