import React from 'react';
import { Container } from 'react-bootstrap'
import AddNote from './notes/AddNote';
import AllNotes from './notes/AllNotes';

const Home = () => {
  return (
    <>
      <Container>
        <AddNote />

        <h3>Notes</h3>
        <AllNotes />
      </Container>

    </>
  );
}

export default Home;
