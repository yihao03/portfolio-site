import ContactMe from "@/pages/contactme/ContactMe";
import HomePage from "@/pages/homepage/HomePage";
import Experiences from "@/pages/experiences/Experiences";
import Projects from "@/pages/projects/Projects";
import Hobbies from "@/pages/hobbies/Hobbies";
import Education from "@/pages/education/Education";
import type { Route } from "@/types/routes";

export const routes: Route[] = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Experience",
    path: "/experiences",
    component: Experiences,
  },
  {
    name: "Projects",
    path: "/projects",
    component: Projects,
  },
  {
    name: "Education",
    path: "/education",
    component: Education,
  },
  {
    name: "Hobbies",
    path: "/hobbies",
    component: Hobbies,
  },
  {
    name: "Contact",
    path: "/contact",
    component: ContactMe,
  },
];
