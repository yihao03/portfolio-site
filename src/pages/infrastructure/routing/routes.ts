import ContactMe from "@/pages/contactme/ContactMe";
import HomePage from "@/pages/homepage/HomePage";
import type { Route } from "@/types/routes";

export const routes: Route[] = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Contact",
    path: "/contact",
    component: ContactMe,
  },
];
