import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="sdfsgxdsfg">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter a title" />
            <Form.Text className="text-muted">
              Title should be at list 3 character.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="sdfsdwws">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" aria-label="Give the description here" />
            <Form.Text className="text-muted">
              Description should be at list 3 character.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>

    </>
  );
}

export default Home;
