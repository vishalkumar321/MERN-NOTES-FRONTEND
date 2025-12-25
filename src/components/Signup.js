// import { useState } from "react";
// import api from "../api";

// export default function Signup({ onSignupSuccess }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async () => {
//     try {
//       await api.post("/auth/signup", {
//         username: username, // must be email
//         password: password, // must be password
//       });

//       onSignupSuccess();
//     } catch (err) {
//       console.log("Signup failed:", err.response?.data?.error || err.message);
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>

//       <input
//         placeholder="Username"
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       <input
//         placeholder="Password"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <button onClick={handleSignup}>Signup</button>
//     </div>
//   );
// }

import { useState } from "react";
import api from "../api";

export default function Signup({ onSignupSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      // backend expects "email"
      await api.post("/auth/signup", {
        email: username,
        password,
      });
      onSignupSuccess();
    } catch (err) {
      console.log(err);
      setError("Signup failed: username and password required");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
