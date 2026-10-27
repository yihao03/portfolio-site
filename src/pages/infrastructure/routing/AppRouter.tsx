import { Route, Routes } from "react-router";
import PageMetadata from "./PageMetadata";
import AppShell from "./AppShell";
import { routes } from "./routes";

const AppRouter: React.FC = () => {
  return (
    <>
      <PageMetadata />
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
