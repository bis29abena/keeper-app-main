import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function createNoteValues(e) {
    const { name, value } = e.target;

    setNote((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function clearNote() {
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={createNoteValues}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={note.content}
          onChange={createNoteValues}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.onSet(note, event);
            clearNote();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
