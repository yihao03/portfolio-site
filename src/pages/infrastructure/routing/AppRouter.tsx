import { Route, Routes } from "react-router";
import AppShell from "./AppShell";

const AppRouter: React.FC = () => {
  return (
    <>
      <AppShell>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
        </Routes>
      </AppShell>
    </>
  )
}

export default AppRouter;
