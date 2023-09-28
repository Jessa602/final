import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h2>Welcome {auth.user}</h2>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => navigate("/")}>Go to Products</button>
    </div>
  );
};
