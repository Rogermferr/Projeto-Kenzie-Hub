import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export function ProtectedRoutes() {
  const { user } = useContext(UserContext);

  return user ? <Outlet /> : <Navigate to="/" />;
}
