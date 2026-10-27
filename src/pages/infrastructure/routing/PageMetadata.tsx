import { useEffect } from "react";
import { useLocation } from "react-router";

const pages: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Hon Yi Hao | Computer Science at NUS",
    description: "Yi Hao’s portfolio: software projects, experience, education, photography, cycling and yangqin.",
  },
  "/projects": {
    title: "Projects | Hon Yi Hao",
    description: "Software projects by Yi Hao, including MarkBind, ReMindMe, Pocket Adventures, parallel computing coursework and developer tools.",
  },
  "/experiences": {
    title: "Experience | Hon Yi Hao",
    description: "Yi Hao’s experience in software development, CVWO team leadership, NUS College technology and teaching CS2103T.",
  },
  "/education": {
    title: "Education | Hon Yi Hao",
    description: "Computer Science at NUS and NUS College: coursework, academic awards and related projects.",
  },
  "/hobbies": {
    title: "Hobbies | Hon Yi Hao",
    description: "Cycling, photography and yangqin, including Yi Hao’s original Roachman Theme composition and performances.",
  },
  "/contact": {
    title: "Contact | Hon Yi Hao",
    description: "Get in touch with Yi Hao for collaborations and software projects.",
  },
};

export default function PageMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const page = pages[path];
    if (!page) return;
    document.title = page.title;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://hyihao.my" + path;

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = page.description;
  }, [pathname]);

  return null;
}
