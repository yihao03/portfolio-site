import { routes } from "./routes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const AppShell: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-gray-900 focus:px-4 focus:py-3"
      >
        Skip to content
      </a>
      <header
        className="bg-gray-900 shadow"
        onKeyDown={(event) => {
          if (event.key === "Escape" && menuOpen) {
            setMenuOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        <div className="flex w-full flex-wrap items-center justify-between gap-x-2 px-3 py-3 sm:flex-nowrap sm:px-6 sm:py-2">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="w-fit shrink-0 text-base font-bold text-gray-400 hover:text-gray-300 sm:order-last"
          >
            Hon Yi Hao
          </Link>
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex min-h-11 items-center gap-2 rounded-md px-3 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-gray-100 sm:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
            {menuOpen ? (
              <X aria-hidden="true" className="size-4" />
            ) : (
              <Menu aria-hidden="true" className="size-4" />
            )}
          </button>
          <NavigationMenu
            id="main-navigation"
            aria-label="Main navigation"
            viewport={false}
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a"))
                setMenuOpen(false);
            }}
            className={`w-full max-w-none flex-none basis-full justify-start pt-3 sm:order-first sm:flex sm:w-auto sm:flex-1 sm:basis-auto sm:pt-0 [&>div]:w-full sm:[&>div]:w-auto ${menuOpen ? "flex" : "hidden"}`}
          >
            <NavigationMenuList className="grid w-full grid-cols-3 gap-x-2 gap-y-1 sm:flex sm:w-auto sm:gap-1">
              {routes.map((route) => (
                <NavigationMenuItem key={route.path} object={route} />
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
      <main
        id="main-content"
        tabIndex={-1}
        className="w-full flex-1 focus:outline-none"
      >
        {children}
      </main>
      <footer className="border-t border-white/10 bg-gray-900">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-gray-400 sm:px-8">
          <p>&copy; {new Date().getFullYear()} Hon Yi Hao</p>
          <Link
            to="/contact"
            className="py-1 text-gray-300 hover:text-blue-200"
          >
            Get in touch
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default AppShell;
