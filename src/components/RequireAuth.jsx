import { useAuth } from "./Auth";
import { Navigate, useLocation } from "react-router-dom";

export const ReqAuth = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};