import { userContext } from "../context/UserContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ redirectTo = "/" }) {
  const { user } = useContext(userContext);

  if (!user) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
}
