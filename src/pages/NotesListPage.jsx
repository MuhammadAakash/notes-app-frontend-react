import React, { useEffect, useState } from "react";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("/api/notes/");
    const data = await response.json();
    setNotes(data);
    console.log("DATA IS:", data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <div className="notes-title">&#9782; Notes</div>
        <div className="notes-count">{notes.length}</div>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => {
          return (
            <div className="note" key={index}>
              <ListItem note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotesListPage;
