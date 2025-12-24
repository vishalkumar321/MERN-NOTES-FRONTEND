import { useState } from "react";
import api from "../api";

export default function Signup({ onSignupSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await api.post("/auth/signup", {
        username,
        password,
      });

      alert("Signup successful!");
      onSignupSuccess();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.error);
      } else {
        alert("Server not reachable. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
