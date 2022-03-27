import React from 'react';
import { Col, Card, Badge } from 'react-bootstrap';
import { ArrowRight, Trash3 } from 'react-bootstrap-icons';

const NoteEachItem = (props) => {
    return (
        <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Header as="h5">{props.noteTitle}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="">
                        <Badge bg="light" text="dark">
                            {props.noteTag}
                        </Badge>
                    </Card.Subtitle>
                    <Card.Text>
                        {props.noteDescrp}
                    </Card.Text>
                    <Card.Link href="#" className='text-danger'><Trash3 size={26} /></Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Created on - {props.noteCreate}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default NoteEachItem;
