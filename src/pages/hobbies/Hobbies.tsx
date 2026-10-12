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
          <section aria-labelledby="photography-heading">
            <h2 id="photography-heading" className="mb-4 text-3xl font-semibold tracking-tight text-gray-100">Photography</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              I’m also into photography, especially street and event photography.
              I currently shoot with a Nikon Zfc and Z6.
            </p>
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
            <section className="mt-10" aria-labelledby="roachman-heading">
              <h3 id="roachman-heading" className="mb-4 text-2xl font-semibold text-gray-100">The Roachman Theme</h3>
              <p className="text-lg leading-relaxed text-gray-300">
                Not all heroes wear capes, but all of them deserve a theme song.
                I composed and performed this yangqin solo inspired by Roachman in Sonny Liew’s{" "}
                <em>The Art of Charlie Chan Hock Chye</em>, for NUS College’s Global Narratives course (NGN2001G).
              </p>
              <p className="mt-4 text-base leading-7 text-gray-400">
                The music follows Ah Guan from his humble beginnings to his life as Roachman,
                using harmonics, tremolo and chromatic runs to tell his story.
                It’s a tribute to the underdogs and unsung heroes who help others without seeking recognition.
              </p>
              <figure className="mt-6">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/KiD11UO80gs"
                  title="The Roachman Theme — original yangqin composition and performance by Yi Hao"
                  width="960"
                  height="540"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="aspect-video h-auto w-full rounded-md border-0"
                />
                <figcaption className="mt-3 text-sm">
                  <a href="https://youtu.be/KiD11UO80gs" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                    Watch on YouTube <span aria-hidden="true">↗</span>
                  </a>
                </figcaption>
              </figure>
            </section>
          </section>
        </div>
      </section>
    </Container>
  );
}
