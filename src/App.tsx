import { BrowserRouter, Route, Routes } from "react-router-dom";
import { User } from "./pages/User";
import { NotFound } from "./pages/NotFound";
import { MainLayout } from "./layout/MainLayout";

export const ROUTES = {
  user: "/",
  notFound: "*",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={ROUTES.user}
          element={
            <MainLayout>
              <User />
            </MainLayout>
          }
        />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
