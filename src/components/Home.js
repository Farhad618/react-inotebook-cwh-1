import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router";
import AddNote from './notes/AddNote';
import AllNotes from './notes/AllNotes';

const Home = () => {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  useEffect(() => {
    // return () => {
    if (!localStorage.getItem('inoteToken')) {
      setShow(false);
      navigate("/login");
    } else {
      setShow(true);
    }
    // };
  }, []);

  return (
    <>
      {show &&
        <Container>
          <AddNote />
          <h3>Notes</h3>
          <AllNotes />
        </Container>
      }
    </>
  );

}

export default Home;
