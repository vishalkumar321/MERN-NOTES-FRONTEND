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

// import { useState } from "react";
// import api from "../api";

// export default function Signup({ onSignupSuccess }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signupHandler = async () => {
//     try {
//       await api.post("/auth/signup", { email, password });
//       alert("Signup successful! Please login.");
//       onSignupSuccess();
//     } catch {
//       alert("Signup failed: Email may already exist or missing data");
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <input
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={signupHandler}>Signup</button>
//     </div>
//   );
// }

// ADD TOAST-UI FOR NOTES CRUD
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../api";

function Signup({ onSignupSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!email || !password) return toast.error("Enter email + password");

    try {
      setLoading(true);
      await api.post("/auth/signup", { email, password });
      toast.success("Signup successful 🎉 Now login");
      onSignupSuccess();
    } catch (err) {
      toast.error(err.response?.data?.error || "Signup failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Signup</h3>

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

      <button onClick={handleSignup} disabled={loading}>
        {loading ? "Signing up..." : "Signup"}
      </button>
    </div>
  );
}

export default Signup;
