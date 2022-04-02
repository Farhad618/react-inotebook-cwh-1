import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const state = []; // all notes under this

  const [notes, setNotes] = useState(state);
  const [updateNoteValues, setUpdateNoteValues] = useState({});

  // jodi update er jonno ase ta hole true set korar 
  const [formStateHidden, setFormStateHidden] = useState(false);

  //add note
  const addNote = (title, description, tag) => {
    //  console.log("<noteState.js: note added>",title, description, tag);
    fetch(
      `${host}/api/notes/addnote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('inoteToken')
        },
        body: JSON.stringify({ title, description, tag })
      }
    ).then((response) => {
      // console.log("<noteState.js: " + Object.values(response) + ">");
      response.json().then(note => {
        // console.log("<noteState.js: " + JSON.stringify(note) + ">");
        setNotes(notes.concat(note))
      });
    })
  }

  //read all notes
  const allNotes = () => {
    const response = fetch(
      `${host}/api/notes/allnotes`,
      {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('inoteToken')

        }
      }
    ).then(resp => {
      resp.json().then(json => {
        // console.log("<notestate.js: hi>");
        // console.log(json);
        setNotes(json);
      })
    })

  }

  //update a note
  const updateNote = (id, title, description, tag) => {
    // console.log(id, title, description, tag)
    let newNote = {};

    if (title.length) { newNote.title = title; }
    if (description.length) { newNote.description = description; }
    if (tag.length) { newNote.tag = tag; } else { newNote.tag = "Default"; }

    fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('inoteToken')
        },
        body: JSON.stringify(newNote)
      }
    ).then((response) => {
      // console.log("<noteState.js: " + Object.values(response) + ">");
      response.json()

      let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          if (title.length) { newNotes[index].title = title };
          if (description.length) { newNotes[index].description = description };
          if (tag.length) { newNotes[index].tag = tag };
          break;
        }
      }
      setNotes(newNotes);
    })

    // console.log("notestate:>", updateNoteValues)
  }

  // update note state to store update values
  const updateNoteValuesToState = (vals) => {
    setUpdateNoteValues(vals);

    // console.log(updateNoteValues)
  }
  


  //delete note
  const deleteNote = (id) => {
    fetch(
      `${host}/api/notes/deletenote/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('inoteToken')
        }
      }
    ).then(() => {
      setNotes(notes.filter((note) => {
        return note._id !== id;
      }))
    })
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, allNotes, updateNote, updateNoteValuesToState, updateNoteValues, setUpdateNoteValues, formStateHidden, setFormStateHidden }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;