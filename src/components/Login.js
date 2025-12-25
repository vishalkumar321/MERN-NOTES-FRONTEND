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

// import { useState } from "react";
// import api from "../api";

// export default function Login({ onLoginSuccess }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await api.post("/auth/login", {
//         email: email, // make sure your state var name is email
//         password: password, // make sure your state var name is password
//       });

//       localStorage.setItem("token", res.data.token);
//       onLoginSuccess();
//     } catch (err) {
//       console.log("Login failed:", err.response?.data?.error || err.message);
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Enter email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Enter password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

import { useState } from "react";
import api from "../api";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // backend expects "email"
      const res = await api.post("/auth/login", {
        email: username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      onLoginSuccess();
    } catch (err) {
      console.log(err);
      setError("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
