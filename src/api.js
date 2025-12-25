// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000",
// });

// // Automatically attach token in every request
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = token;
//   }
//   return config;
// });

// export default api;

// ADDING .ENV
// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;

// FIX API ENDPOINT
// import axios from "axios";

// const api = axios.create({
//   baseURL:
//     process.env.REACT_APP_API_URL ||
//     "https://mern-notes-backend-kfzy.onrender.com",
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = token;
//   return config;
// });

// export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL:
//     process.env.REACT_APP_API_URL ||
//     "https://mern-notes-backend-kfzy.onrender.com",
// });

// // add token to every request
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     // IMPORTANT: no "Bearer"
//     config.headers.Authorization = token;
//   }
//   return config;
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// attach token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = token;
  return config;
});

export default api;
