import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import noteContext from '../../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: "default"});

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <Form className='my-3'>
            <Form.Group className="mb-3" controlId="sdfsgxdsfg">
                <Form.Label><h3>Title</h3></Form.Label>
                <Form.Control type="text" placeholder="Enter a title" name='title' onChange={onChange} required={true} />
                <Form.Text className="text-muted">
                    Title must be at list 3 character.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="sdfsdwws">
                <Form.Label><h3>Description</h3></Form.Label>
                <Form.Control as="textarea" aria-label="Give the description here" name='description' rows={5} onChange={onChange} required={true} />
                <Form.Text className="text-muted">
                    Description must be at list 3 character.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}>
                Submit
            </Button>
        </Form>
    );
}

export default AddNote;
