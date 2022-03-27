import React, { useContext } from 'react';
import { Col, Card, Badge, Stack } from 'react-bootstrap';
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';
import noteContext from '../../context/notes/noteContext';

const NoteEachItem = (props) => {
    const context = useContext(noteContext);
    return (
        <Col>
            <Card style={{ width: '18rem' }} className="my-3">
                <Card.Header as="h5">
                    <Stack direction="horizontal" gap={3}>
                        {props.noteTitle}
                        <Trash3 className='text-danger ms-auto crpointer' onClick={() => { context.deleteNote(props.noteId) }} />
                        <div className="vr" />
                        <PencilSquare className='text-primary crpointer' />
                    </Stack>

                </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="">
                        <Badge bg="light" text="dark">
                            {props.noteTag}
                        </Badge>
                    </Card.Subtitle>
                    <Card.Text>
                        {props.noteDescrp}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Created on - {props.noteCreate}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default NoteEachItem;
