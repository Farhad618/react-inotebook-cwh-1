import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const state = [
    {
      "_id": "623e8b8d72c1c07dc1a45563",
      "user": "623e77822d75272c3fdcc174",
      "title": "nn1",
      "description": "dn1",
      "tag": "t1",
      "date": "2022-03-26T03:42:05.301Z",
      "__v": 0
    },
    {
      "_id": "623e8bcf72c1c07dc1a45565",
      "user": "623e77822d75272c3fdcc174",
      "title": "nn1",
      "description": "db1",
      "tag": "",
      "date": "2022-03-26T03:43:11.537Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(state);

  //add note
  const addNote = (title, description, tag)=>{
    console.log("<noteState.js: note added>");

    const note = {
      "_id": "623e8bcf72c1c07dc1a45565",
      "user": "623e77822d75272c3fdcc174",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-03-26T03:43:11.537Z",
      "__v": 0
    };

    setNotes(notes.concat(note));
  }

  return (
    <noteContext.Provider value={{ notes, addNote }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;