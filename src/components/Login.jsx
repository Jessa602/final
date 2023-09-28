import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../components/Auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if location.state exists and has a path property
  const redirectPath =
    location.state && location.state.path ? location.state.path : "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={() => navigate("/")}>Go to Products</button>
    </div>
  );
};
