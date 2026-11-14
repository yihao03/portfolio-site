import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PageIndexSection {
  id: string;
  title: string;
  items?: { id: string; title: string }[];
}

interface PageIndexProps {
  sections: PageIndexSection[];
  label: string;
  className?: string;
}

function PageIndex({ sections, label, className }: PageIndexProps) {
  const indexRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const index = indexRef.current;
    const indicator = indicatorRef.current;
    if (!index || !indicator) return;

    const elements = sections
      .flatMap((section) => section.items ?? [section])
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);
    let frame = 0;

    const update = () => {
      frame = 0;
      const indexBounds = index.getBoundingClientRect();
      if (!indexBounds.height) return;

      const visible = elements
        .map((element) => ({
          id: element.id,
          bounds: element.getBoundingClientRect(),
        }))
        .filter(
          ({ bounds }) => bounds.bottom > 0 && bounds.top < window.innerHeight,
        );
      const ids = visible.map(({ id }) => id);
      setVisibleSections((current) =>
        current.length === ids.length && current.every((id, i) => id === ids[i])
          ? current
          : ids,
      );

      const first = visible[0];
      const last = visible.at(-1);
      if (!first || !last) {
        indicator.style.opacity = "0";
        return;
      }

      const firstLink = index.querySelector<HTMLElement>(
        `[data-index-id="${first.id}"]`,
      );
      const lastLink = index.querySelector<HTMLElement>(
        `[data-index-id="${last.id}"]`,
      );
      if (!firstLink || !lastLink) return;
      const firstBounds = firstLink.getBoundingClientRect();
      const lastBounds = lastLink.getBoundingClientRect();

      // Map the visible portion of the content onto its index entry.
      const startFraction =
        Math.max(0, -first.bounds.top) / first.bounds.height;
      const endFraction = Math.min(
        1,
        (window.innerHeight - last.bounds.top) / last.bounds.height,
      );
      const top =
        firstBounds.top - indexBounds.top + firstBounds.height * startFraction;
      const bottom =
        lastBounds.top - indexBounds.top + lastBounds.height * endFraction;
      indicator.style.transform = `translateY(${top}px)`;
      indicator.style.height = `${Math.max(2, bottom - top)}px`;
      indicator.style.opacity = "1";
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resizeObserver = new ResizeObserver(scheduleUpdate);
    resizeObserver.observe(index);
    for (const element of elements) resizeObserver.observe(element);
    const disclosure = index.closest("details");
    disclosure?.addEventListener("toggle", scheduleUpdate);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    scheduleUpdate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      disclosure?.removeEventListener("toggle", scheduleUpdate);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sections]);

  return (
    <nav
      aria-label={label}
      className={className}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a"))
          event.currentTarget.closest("details")?.removeAttribute("open");
      }}
    >
      <div ref={indexRef} className="relative pl-4">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10"
        />
        <span
          ref={indicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 w-0.5 rounded-full bg-blue-300 opacity-0"
        />
        <ul className="space-y-5">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={"#" + section.id}
                data-index-id={section.items ? undefined : section.id}
                aria-current={
                  !section.items && section.id === visibleSections[0]
                    ? "location"
                    : undefined
                }
                className={
                  "block py-1 text-sm hover:text-gray-100 " +
                  (section.items
                    ? section.items.some((item) =>
                        visibleSections.includes(item.id),
                      )
                      ? "text-gray-200"
                      : "text-gray-400"
                    : visibleSections.includes(section.id)
                      ? "text-blue-200"
                      : "text-gray-400")
                }
              >
                {section.title}
              </a>
              {section.items && (
                <ul className="mt-1 space-y-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <a
                        href={"#" + item.id}
                        data-index-id={item.id}
                        aria-current={
                          item.id === visibleSections[0]
                            ? "location"
                            : undefined
                        }
                        className={
                          "block py-1 text-xs leading-5 hover:text-blue-200 " +
                          (visibleSections.includes(item.id)
                            ? "text-blue-200"
                            : "text-gray-400")
                        }
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function PageIndexMenu(props: PageIndexProps) {
  return (
    <details className="group relative lg:hidden">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm text-gray-400 hover:text-gray-200 [&::-webkit-details-marker]:hidden">
        Index
        <ChevronDown
          aria-hidden="true"
          className="size-3.5 transition-transform group-open:rotate-180"
        />
      </summary>
      <PageIndex
        {...props}
        className="absolute top-full right-0 z-10 mt-2 max-h-[70dvh] w-56 overflow-y-auto rounded-md border border-white/10 bg-gray-900 p-5 shadow-lg"
      />
    </details>
  );
}

export function PageIndexSidebar(props: PageIndexProps) {
  return (
    <aside className="sticky top-8 hidden max-h-[calc(100dvh-4rem)] overflow-y-auto pr-1 lg:block">
      <p className="mb-4 text-xs text-gray-400">On this page</p>
      <PageIndex {...props} />
    </aside>
  );
}
