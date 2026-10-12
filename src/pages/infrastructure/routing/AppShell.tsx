import { routes } from "./routes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { AnimatePresence } from "motion/react";
import { Link } from "react-router";

const AppShell: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gray-800">
      <header className="w-full flex h-fit shrink-0 flex-wrap items-center gap-2 bg-gray-900 p-2 px-3 shadow z-10 sm:px-6">
        <div className="min-w-0 flex-1 align-center">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem
                  key={route.path}
                  object={route}
                />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden justify-end sm:block">
          <Link to={"https://www.linkedin.com/in/yi-hao-hon-614884219/"}>
            <p className="font-bold text-gray-400">Hon Yi Hao</p>
          </Link>
        </div>
      </header>
      <div className="w-full align-center overflow-auto">
        <AnimatePresence>
          {children}
        </AnimatePresence>
        <footer className="flex flex-1 w-full h-12 items-center justify-center bg-gray-900 text-gray-400">
          <p>&copy; 2025 Yi Hao</p>
        </footer>
      </div>
    </div>
  );
};

export default AppShell;
