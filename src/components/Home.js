import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import AllNotes from './notes/AllNotes';

const Home = () => {
  return (
    <>
      <Container>
        <Form className='my-3'>
          <Form.Group className="mb-3" controlId="sdfsgxdsfg">
            <Form.Label><h3>Title</h3></Form.Label>
            <Form.Control type="text" placeholder="Enter a title" />
            <Form.Text className="text-muted">
              Title should be at list 3 character.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="sdfsdwws">
            <Form.Label><h3>Description</h3></Form.Label>
            <Form.Control as="textarea" aria-label="Give the description here" rows={5}/>
            <Form.Text className="text-muted">
              Description should be at list 3 character.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <h3>Notes</h3>
        <AllNotes />
      </Container>

    </>
  );
}

export default Home;
