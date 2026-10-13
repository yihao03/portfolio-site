import { motion } from "motion/react";
import { useEffect, type PropsWithChildren } from "react";
import { useLocation } from "react-router";

export default function Container({ children }: PropsWithChildren) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return (
    <motion.div className="min-h-[calc(100vh-152px)] w-fit flex flex-col text-gray-400 p-4 mt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
