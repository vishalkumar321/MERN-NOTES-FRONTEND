// DAY 17
// function App() {
//   return (
//     <div>
//       <h1>Notes Manager</h1>

//       <input placeholder="Title" />
//       <textarea placeholder="Description"></textarea>
//       <button>Add Note</button>
//     </div>
//   );
// }

// export default App;

// DAY 19
// import { useState } from "react";

// function App() {
//   const [notes, setNotes] = useState([
//     { title: "First Note", description: "Hello React" },
//     { title: "Second Note", description: "Lists are easy" },
//   ]);

//   return (
//     <div>
//       <h1>Notes Manager</h1>

//       {notes.map((note, index) => (
//         <div key={index}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// DAY 20

// import { useState } from "react";

// function App() {
//   // Notes list state
//   const [notes, setNotes] = useState([]);

//   // Input states
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   function handleAddNote() {
//     if (title === "" || description === "") return;

//     const newNote = {
//       title: title,
//       description: description,
//     };

//     // ✅ create new array (immutability)
//     setNotes([...notes, newNote]);

//     // clear inputs
//     setTitle("");
//     setDescription("");
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>Notes Manager</h1>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddNote}>Add Note</button>

//       <hr />

//       {notes.map((note, index) => (
//         <div key={index} style={{ marginBottom: "15px" }}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// DAY 21
// import { useState } from "react";

// function App() {
//   // Notes list
//   const [notes, setNotes] = useState([]);

//   // Input states
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // Add Note
//   function handleAddNote() {
//     if (title === "" || description === "") return;

//     const newNote = { title, description };
//     setNotes([...notes, newNote]);

//     setTitle("");
//     setDescription("");
//   }

//   // Delete Note
//   function handleDeleteNote(indexToDelete) {
//     const updatedNotes = notes.filter((note, index) => index !== indexToDelete);
//     setNotes(updatedNotes);
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>Notes Manager</h1>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddNote} style={{ marginBottom: "20px" }}>
//         Add Note
//       </button>

//       <hr />

//       {notes.map((note, index) => (
//         <div key={index} style={{ marginBottom: "20px" }}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>
//           <button onClick={() => handleDeleteNote(index)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// DAY 22

// import { useState } from "react";

// function App() {
//   // Notes list state
//   const [notes, setNotes] = useState([]);

//   // Input states
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // Edit state
//   const [editIndex, setEditIndex] = useState(null);

//   // Add or Update Note
//   function handleAddOrUpdateNote() {
//     if (title === "" || description === "") return;

//     if (editIndex === null) {
//       // ADD
//       setNotes([...notes, { title, description }]);
//     } else {
//       // UPDATE
//       const updatedNotes = notes.map((note, index) =>
//         index === editIndex ? { title, description } : note
//       );

//       setNotes(updatedNotes);
//       setEditIndex(null);
//     }

//     setTitle("");
//     setDescription("");
//   }

//   // Delete Note
//   function handleDeleteNote(indexToDelete) {
//     const updatedNotes = notes.filter((note, index) => index !== indexToDelete);
//     setNotes(updatedNotes);
//   }

//   // Start Edit
//   function handleEditNote(index) {
//     setTitle(notes[index].title);
//     setDescription(notes[index].description);
//     setEditIndex(index);
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>Notes Manager</h1>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddOrUpdateNote} style={{ marginBottom: "20px" }}>
//         {editIndex === null ? "Add Note" : "Update Note"}
//       </button>

//       <hr />

//       {notes.map((note, index) => (
//         <div key={index} style={{ marginBottom: "20px" }}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>

//           <button
//             onClick={() => handleEditNote(index)}
//             style={{ marginRight: "10px" }}
//           >
//             Edit
//           </button>

//           <button onClick={() => handleDeleteNote(index)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// DAY 23

// import { useState, useEffect } from "react";

// function App() {
//   // Notes state (loaded from LocalStorage on first render)
//   const [notes, setNotes] = useState(() => {
//     const savedNotes = localStorage.getItem("notes");
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });

//   // Input states
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // Edit state
//   const [editIndex, setEditIndex] = useState(null);

//   // Save notes to LocalStorage whenever notes change
//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   // Add or Update note
//   function handleAddOrUpdateNote() {
//     if (title === "" || description === "") return;

//     if (editIndex === null) {
//       setNotes([...notes, { title, description }]);
//     } else {
//       const updatedNotes = notes.map((note, index) =>
//         index === editIndex ? { title, description } : note
//       );
//       setNotes(updatedNotes);
//       setEditIndex(null);
//     }

//     setTitle("");
//     setDescription("");
//   }

//   // Delete note
//   function handleDeleteNote(indexToDelete) {
//     const updatedNotes = notes.filter((note, index) => index !== indexToDelete);
//     setNotes(updatedNotes);
//   }

//   // Start editing
//   function handleEditNote(index) {
//     setTitle(notes[index].title);
//     setDescription(notes[index].description);
//     setEditIndex(index);
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>Notes Manager</h1>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddOrUpdateNote} style={{ marginBottom: "20px" }}>
//         {editIndex === null ? "Add Note" : "Update Note"}
//       </button>

//       <hr />

//       {notes.map((note, index) => (
//         <div key={index} style={{ marginBottom: "20px" }}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>

//           <button
//             onClick={() => handleEditNote(index)}
//             style={{ marginRight: "10px" }}
//           >
//             Edit
//           </button>

//           <button onClick={() => handleDeleteNote(index)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// DAY 25

// import { useState, useEffect } from "react";
// import NoteItem from "./NoteItem";

// function App() {
//   // Notes state (load from LocalStorage)
//   const [notes, setNotes] = useState(() => {
//     const savedNotes = localStorage.getItem("notes");
//     return savedNotes ? JSON.parse(savedNotes) : [];
//   });

//   // Input states
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // Edit state
//   const [editIndex, setEditIndex] = useState(null);

//   // Save notes to LocalStorage when notes change
//   useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(notes));
//   }, [notes]);

//   // Add or Update note
//   function handleAddOrUpdateNote() {
//     if (title === "" || description === "") return;

//     if (editIndex === null) {
//       setNotes([...notes, { title, description }]);
//     } else {
//       const updatedNotes = notes.map((note, index) =>
//         index === editIndex ? { title, description } : note
//       );
//       setNotes(updatedNotes);
//       setEditIndex(null);
//     }

//     setTitle("");
//     setDescription("");
//   }

//   // Delete note
//   function handleDeleteNote(indexToDelete) {
//     const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
//     setNotes(updatedNotes);
//   }

//   // Start editing
//   function handleEditNote(index) {
//     setTitle(notes[index].title);
//     setDescription(notes[index].description);
//     setEditIndex(index);
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>Notes Manager</h1>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddOrUpdateNote} style={{ marginBottom: "20px" }}>
//         {editIndex === null ? "Add Note" : "Update Note"}
//       </button>

//       <hr />

//       {notes.map((note, index) => (
//         <NoteItem
//           key={index}
//           title={note.title}
//           description={note.description}
//           onEdit={() => handleEditNote(index)}
//           onDelete={() => handleDeleteNote(index)}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

// DAY 30 : CONNECTING FRONTEND WITH BACKEND
// import { useEffect, useState } from "react";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // Fetch notes from backend
//   function fetchNotes() {
//     fetch("http://localhost:5000/notes")
//       .then((res) => res.json())
//       .then((data) => setNotes(data))
//       .catch((err) => console.error("Error fetching notes:", err));
//   }

//   // Load notes once when component mounts
//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // Add note via backend
//   function handleAddNote() {
//     if (!title || !description) return;

//     fetch("http://localhost:5000/notes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title, description }),
//     })
//       .then((res) => res.json())
//       .then(() => {
//         setTitle("");
//         setDescription("");
//         fetchNotes(); // reload notes from backend
//       })
//       .catch((err) => console.error("Error adding note:", err));
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>Notes Manager (Full Stack)</h1>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddNote} style={{ marginBottom: "20px" }}>
//         Add Note
//       </button>

//       <hr />

//       {notes.map((note, index) => (
//         <div key={index} style={{ marginBottom: "20px" }}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// REACT CONNECTED TO MONGODB BACKEND
// import { useEffect, useState } from "react";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // 🔹 Fetch notes from backend (MongoDB)
//   function fetchNotes() {
//     fetch("http://localhost:5000/notes")
//       .then((res) => res.json())
//       .then((data) => setNotes(data))
//       .catch((err) => console.error("Error fetching notes:", err));
//   }

//   // 🔹 Load notes on page load
//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // 🔹 Add note (POST → MongoDB)
//   function handleAddNote() {
//     if (!title || !description) return;

//     fetch("http://localhost:5000/notes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title, description }),
//     })
//       .then(() => {
//         setTitle("");
//         setDescription("");
//         fetchNotes(); // reload notes from DB
//       })
//       .catch((err) => console.error("Error adding note:", err));
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>MERN Notes App</h1>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddNote} style={{ marginBottom: "20px" }}>
//         Add Note
//       </button>

//       <hr />

//       {notes.map((note) => (
//         <div key={note._id} style={{ marginBottom: "20px" }}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// DELETE WITH MONGODB
// import { useEffect, useState } from "react";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   // Fetch notes from backend
//   function fetchNotes() {
//     fetch("http://localhost:5000/notes")
//       .then((res) => res.json())
//       .then((data) => setNotes(data))
//       .catch((err) => console.error("Fetch error:", err));
//   }

//   // Load notes on page load
//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // Add note
//   function handleAddNote() {
//     if (!title || !description) return;

//     fetch("http://localhost:5000/notes", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title, description }),
//     })
//       .then(() => {
//         setTitle("");
//         setDescription("");
//         fetchNotes();
//       })
//       .catch((err) => console.error("Add error:", err));
//   }

//   // Delete note
//   function handleDelete(id) {
//     fetch(`http://localhost:5000/notes/${id}`, {
//       method: "DELETE",
//     })
//       .then(() => fetchNotes())
//       .catch((err) => console.error("Delete error:", err));
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>MERN Notes App</h1>

//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddNote} style={{ marginBottom: "20px" }}>
//         Add Note
//       </button>

//       <hr />

//       {notes.map((note) => (
//         <div key={note._id} style={{ marginBottom: "20px" }}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>
//           <button onClick={() => handleDelete(note._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// FULL CRUD WITH MONGODB
// import { useEffect, useState } from "react";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [editId, setEditId] = useState(null);

//   // Fetch notes
//   function fetchNotes() {
//     fetch("http://localhost:5000/notes")
//       .then((res) => res.json())
//       .then((data) => setNotes(data));
//   }

//   useEffect(() => {
//     fetchNotes();
//   }, []);

//   // Add or Update
//   function handleAddOrUpdate() {
//     if (!title || !description) return;

//     if (editId) {
//       // UPDATE
//       fetch(`http://localhost:5000/notes/${editId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, description }),
//       }).then(() => {
//         resetForm();
//         fetchNotes();
//       });
//     } else {
//       // CREATE
//       fetch("http://localhost:5000/notes", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title, description }),
//       }).then(() => {
//         resetForm();
//         fetchNotes();
//       });
//     }
//   }

//   // Delete
//   function handleDelete(id) {
//     fetch(`http://localhost:5000/notes/${id}`, {
//       method: "DELETE",
//     }).then(() => fetchNotes());
//   }

//   // Edit
//   function handleEdit(note) {
//     setTitle(note.title);
//     setDescription(note.description);
//     setEditId(note._id);
//   }

//   function resetForm() {
//     setTitle("");
//     setDescription("");
//     setEditId(null);
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h1>MERN Notes App</h1>

//       <input
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ width: "100%", marginBottom: "10px" }}
//       />

//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         style={{ width: "100%", marginBottom: "10px" }}
//       />

//       <button onClick={handleAddOrUpdate}>
//         {editId ? "Update Note" : "Add Note"}
//       </button>

//       <hr />

//       {notes.map((note) => (
//         <div key={note._id} style={{ marginBottom: "15px" }}>
//           <h3>{note.title}</h3>
//           <p>{note.description}</p>
//           <button onClick={() => handleEdit(note)}>Edit</button>{" "}
//           <button onClick={() => handleDelete(note._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// Modify Notes App to Use Token
// import { useEffect, useState } from "react";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import api from "./api";

// function App() {
//   const [notes, setNotes] = useState([]);
//   const [showLogin, setShowLogin] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

//   useEffect(() => {
//     if (isLoggedIn) fetchNotes();
//   }, [isLoggedIn]);

//   const fetchNotes = async () => {
//     try {
//       const res = await api.get("/notes");
//       setNotes(res.data);
//     } catch (err) {
//       alert("Login required!");
//     }
//   };

//   const addNote = async () => {
//     const title = prompt("Title:");
//     const description = prompt("Description:");

//     if (!title || !description) return;

//     await api.post("/notes", { title, description });
//     fetchNotes();
//   };

//   const handleDelete = async (id) => {
//     await api.delete(`/notes/${id}`);
//     fetchNotes();
//   };

//   const handleEdit = async (note) => {
//     const title = prompt("New title:", note.title);
//     const description = prompt("New description:", note.description);

//     if (!title || !description) return;

//     await api.put(`/notes/${note._id}`, { title, description });
//     fetchNotes();
//   };

//   if (!isLoggedIn) {
//     return showLogin ? (
//       <Login onLoginSuccess={() => setIsLoggedIn(true)} />
//     ) : (
//       <Signup onSignupSuccess={() => setShowLogin(true)} />
//     );
//   }

//   return (
//     <div>
//       <h1>Your Notes</h1>

//       <button onClick={addNote}>Add Note</button>

//       <button
//         onClick={() => {
//           localStorage.removeItem("token");
//           setIsLoggedIn(false);
//         }}
//       >
//         Logout
//       </button>

//       {notes.map((n) => (
//         <div
//           key={n._id}
//           style={{
//             border: "1px solid gray",
//             margin: "10px",
//             padding: "10px",
//             borderRadius: "8px",
//           }}
//         >
//           <h3>{n.title}</h3>
//           <p>{n.description}</p>

//           <button onClick={() => handleEdit(n)}>Edit</button>
//           <button onClick={() => handleDelete(n._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

// UI/UX UPDATE
import { useEffect, useState } from "react";
import api from "./api";
import "./App.css";
import Login from "./components/Login";
import NoteForm from "./components/NoteForm";
import NoteItem from "./components/NoteItem";
import Signup from "./components/Signup";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [showLogin, setShowLogin] = useState(true);
  const [error, setError] = useState("");

  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data);
    } catch (err) {
      if (err.response && err.response.status === 401) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      } else {
        setError("Failed to load notes");
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) fetchNotes();
  }, [isLoggedIn]);

  const handleSave = async ({ title, description }) => {
    if (editingNote) {
      await api.put(`/notes/${editingNote._id}`, { title, description });
      setEditingNote(null);
    } else {
      await api.post("/notes", { title, description });
    }
    fetchNotes();
  };

  const handleDelete = async (id) => {
    await api.delete(`/notes/${id}`);
    fetchNotes();
  };

  if (!isLoggedIn) {
    return (
      <div className="container">
        {showLogin ? (
          <Login onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          <Signup onSignupSuccess={() => setShowLogin(true)} />
        )}
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Go to Signup" : "Go to Login"}
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Your Notes</h2>
      {error && <div className="error">{error}</div>}

      <NoteForm onSubmit={handleSave} editingNote={editingNote} />

      {notes.length === 0 && <p>No notes yet.</p>}

      {notes.map((note) => (
        <NoteItem
          key={note._id}
          note={note}
          onEdit={setEditingNote}
          onDelete={handleDelete}
        />
      ))}

      <button
        onClick={() => {
          localStorage.removeItem("token");
          setIsLoggedIn(false);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
