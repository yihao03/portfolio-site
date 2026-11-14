import { useEffect, type PropsWithChildren } from "react";
import { useLocation } from "react-router";

export default function Container({ children }: PropsWithChildren) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) {
        document
          .getElementById(hash.slice(1))
          ?.scrollIntoView({ block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 sm:px-8 sm:py-20">
      {children}
    </div>
  );
}
