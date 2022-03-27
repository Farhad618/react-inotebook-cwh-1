import React, {useContext} from 'react';
import { Row } from 'react-bootstrap';
import noteContext from '../../context/notes/noteContext';
import NoteEachItem from './NoteEachItem';


const AllNotes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes, setNotes} = context;
  return (
    <Row>
      {
          notes.map((note)=>{
              return <NoteEachItem noteId={note._id} noteTitle={note.title} noteDescrp={note.description} noteTag={note.tag} noteCreate={note.date} />;
          })
      }
    </Row>
  );
}

export default AllNotes;
