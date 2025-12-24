import { useState } from "react";

export default function NoteForm({ onSubmit, editingNote }) {
  const [title, setTitle] = useState(editingNote?.title || "");
  const [description, setDescription] = useState(
    editingNote?.description || ""
  );

  const handleSubmit = () => {
    if (!title || !description) return;
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editingNote ? "Update Note" : "Add Note"}
      </button>
    </>
  );
}
