import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/Login";
import { ProfilePage } from "../pages/Profile";
import { RegisterPage } from "../pages/Register";
import { NotFoundPage } from "../pages/NotFound";
import { ProtectedRoutes } from "../pages/ProtectedRoutes";
import { TechsProvider } from "../providers/TechsContext";
import { PublicRoutes } from "../pages/PublicRoutes";
import { AnimatePresence } from "framer-motion";

export function AppRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<PublicRoutes />}>
          <Route index element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/profile" element={<ProtectedRoutes />}>
          <Route
            index
            element={
              <TechsProvider>
                <ProfilePage />
              </TechsProvider>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
