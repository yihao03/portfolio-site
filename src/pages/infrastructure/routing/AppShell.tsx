import { Link } from "react-router";
import { routes } from "./routes";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const AppShell: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col items-center bg-gray-800">
      <header className="w-full flex h-fit items-center bg-gray-900 p-1 px-6 shadow z-10">
        <div className="flex-1 align-center">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => (
                <NavigationMenuItem key={route.path}>
                  <Link to={route.path}>
                    <p className="p-1 text-gray-400 transition-colors hover:text-gray-800 hover:bg-gray-400 rounded">
                      {route.name}
                    </p>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="justify-end">
          <p className="font-bold text-gray-400">Hon Yi Hao</p>
        </div>
      </header>
      <div className="w-full overflow-auto">
        <main>{children}</main>
        <footer className="flex w-full h-12 items-center justify-center bg-gray-900 text-gray-400">
          <p>&copy; 2025 Yi Hao</p>
        </footer>
      </div>
    </div>
  );
};

export default AppShell;
