// import { useState } from "react";

// export default function NoteForm({ onSubmit, editingNote }) {
//   const [title, setTitle] = useState(editingNote?.title || "");
//   const [description, setDescription] = useState(
//     editingNote?.description || ""
//   );

//   const handleSubmit = () => {
//     if (!title || !description) return;
//     onSubmit({ title, description });
//     setTitle("");
//     setDescription("");
//   };

//   return (
//     <>
//       <input
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button onClick={handleSubmit}>
//         {editingNote ? "Update Note" : "Add Note"}
//       </button>
//     </>
//   );
// }

import { useEffect, useState } from "react";

export default function NoteForm({ onSubmit, editingNote }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setDescription(editingNote.description);
    }
  }, [editingNote]);

  const submitHandler = () => {
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={submitHandler}>
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </div>
  );
}
