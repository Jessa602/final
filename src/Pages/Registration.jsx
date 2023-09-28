import React, { useState, useNavigate } from "react";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    const handleRegister = () => {
      navigate("/", { replace: true });
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
      <button onClick={() => navigate("/")}>Go to Products</button>
    </form>
  );
};
