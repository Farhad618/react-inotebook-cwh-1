import React, { useContext } from 'react';
import { Col, Card, Badge, Stack } from 'react-bootstrap';
import { PencilSquare, Trash3 } from 'react-bootstrap-icons';
import noteContext from '../../context/notes/noteContext';

const NoteEachItem = (props) => {
    const context = useContext(noteContext);
    return (<>
        {/* <EditNoteModal title={props.noteTitle} desription={props.noteDescrp} tag={props.noteTag} noteid={props.noteId} /> */}
        <Col>
            <Card style={{ width: '25rem' }} className="my-3">
                <Card.Header as="h5">
                    <Stack direction="horizontal" gap={3}>
                        <div className='text-wrap' style={{ maxWidth: '150px' }}>
                            {props.noteTitle}
                        </div>
                        <Trash3 className='text-danger ms-auto crpointer' onClick={() => { context.deleteNote(props.noteId) }} />
                        <div className="vr" />
                        <PencilSquare className='text-primary crpointer' onClick={() => { context.updateNoteValuesToState([props.noteTitle, props.noteDescrp, props.noteTag, props.noteId]) }} />
                        <div className="vr" />
                        <Badge pill bg="light" text='success' className='border border-success'>
                            {props.noteTag === "" ? "General" : props.noteTag}
                        </Badge>
                    </Stack>

                </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="">
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
    </>);
}

export default NoteEachItem;
