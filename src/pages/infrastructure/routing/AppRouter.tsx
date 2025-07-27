import { Route, Routes } from "react-router";
import AppShell from "./AppShell";
import { routes } from "./routes";

const AppRouter: React.FC = () => {
  return (
    <>
      <AppShell>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              element={<route.component />}
              key={route.name}
            />
          ))}
        </Routes>
      </AppShell>
    </>
  );
};

export default AppRouter;
