import React, { useContext, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import noteContext from '../../context/notes/noteContext';
import NoteEachItem from './NoteEachItem';


const AllNotes = () => {
  const context = useContext(noteContext);
  // eslint-disable-next-line
  const { notes, allNotes } = context;

  useEffect(() => {
    allNotes();
  }, []);

  return (
    <Row>
      {
        notes.length>0?
        notes.map((note) => {
          return <NoteEachItem key={note._id} noteId={note._id} noteTitle={note.title} noteDescrp={note.description} noteTag={note.tag} noteCreate={note.date} />;
        })
        : <Container>Add a note.</Container>
      }
    </Row>
  );
}

export default AllNotes;
