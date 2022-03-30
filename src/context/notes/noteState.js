import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const state = []; // all notes under this

  const [notes, setNotes] = useState(state);
  const [updateNoteValues, setUpdateNoteValues] = useState([]);

  //add note
  const addNote = (title, description, tag) => {
    // console.log("<noteState.js: note added>");
    fetch(
      `${host}/api/notes/addnote`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZTc3ODIyZDc1MjcyYzNmZGNjMTc0In0sImlhdCI6MTY0ODI3MzQ3Nn0.pUtruQa3T4hLbCmYQAVrrhwPmaEzqUFjICjMLpCwYi8'
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
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZTc3ODIyZDc1MjcyYzNmZGNjMTc0In0sImlhdCI6MTY0ODI3MzQ3Nn0.pUtruQa3T4hLbCmYQAVrrhwPmaEzqUFjICjMLpCwYi8'

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
    fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZTc3ODIyZDc1MjcyYzNmZGNjMTc0In0sImlhdCI6MTY0ODI3MzQ3Nn0.pUtruQa3T4hLbCmYQAVrrhwPmaEzqUFjICjMLpCwYi8'
        },
        body: JSON.stringify({ title, description, tag })
      }
    ).then((response) => {
      // console.log("<noteState.js: " + Object.values(response) + ">");
      response.json()

      let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    })
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
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZTc3ODIyZDc1MjcyYzNmZGNjMTc0In0sImlhdCI6MTY0ODI3MzQ3Nn0.pUtruQa3T4hLbCmYQAVrrhwPmaEzqUFjICjMLpCwYi8'
        }
      }
    ).then(() => {
      setNotes(notes.filter((note) => {
        return note._id !== id;
      }))
    })
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, allNotes, updateNote, updateNoteValuesToState, updateNoteValues  }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;