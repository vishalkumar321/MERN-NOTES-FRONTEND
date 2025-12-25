// function NoteItem({ title, description, onEdit, onDelete }) {
//   return (
//     <div style={{ marginBottom: "20px" }}>
//       <h3>{title}</h3>
//       <p>{description}</p>

//       <button onClick={onEdit} style={{ marginRight: "10px" }}>
//         Edit
//       </button>

//       <button onClick={onDelete}>Delete</button>
//     </div>
//   );
// }

// export default NoteItem;

// UI/UX update
// export default function NoteItem({ note, onEdit, onDelete }) {
//   return (
//     <div className="note">
//       <h3>{note.title}</h3>
//       <p>{note.description}</p>
//       <button onClick={() => onEdit(note)}>Edit</button>
//       <button onClick={() => onDelete(note._id)}>Delete</button>
//     </div>
//   );
// }

export default function NoteItem({ note, onEdit, onDelete }) {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.description}</p>

      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note._id)}>Delete</button>
    </div>
  );
}
