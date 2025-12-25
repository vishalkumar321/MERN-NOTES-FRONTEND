// import { useState } from "react";
// import api from "../api";

// export default function Login({ onLoginSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       localStorage.setItem("token", res.data.token);
//       onLoginSuccess();
//     } catch (err) {
//       if (err.response && err.response.data && err.response.data.error) {
//         alert(err.response.data.error);
//       } else {
//         alert("Server not reachable. Please try again.");
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <input
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <input
//         placeholder="Password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

import { useState } from "react";
import api from "../api";

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      onLoginSuccess();
    } catch {
      alert("Login failed: Email & password required or invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
}
