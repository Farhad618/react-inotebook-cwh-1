import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import noteContext from '../../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { addNote, updateNoteValues, updateNoteValuesToState, updateNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "default" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    /* const handleOnEdit = (e)=>{
        e.preventDefault();
        context.updateNote(props.id, note.title, note.description, note.tag);
    } */
    const handleClickOnUpdate = (e) => {
        e.preventDefault();
        updateNote(updateNoteValues[3], note.title, note.description, note.tag);
        updateNoteValuesToState([])
    }


    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <Form className='my-3'>
            <Form.Group className="mb-3" controlId="sdfsgxdsfg">
                <Form.Label><h3>Title</h3></Form.Label>
                <Form.Control type="text" placeholder="Enter a title" name='title' onChange={onChange} required={true}
                    defaultValue={updateNoteValues.length > 0 ? updateNoteValues[0] : ""} />
                <Form.Text className="text-muted">
                    Title must be at list 3 character.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="sdfsdwws">
                <Form.Label><h3>Description</h3></Form.Label>
                <Form.Control as="textarea" aria-label="Give the description here" name='description' rows={5} onChange={onChange} required={true}
                    defaultValue={updateNoteValues.length > 0 ? updateNoteValues[1] : ""} />
                <Form.Text className="text-muted">
                    Description must be at list 3 character.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="dfgdg">
                <Form.Label><h3>Tag</h3></Form.Label>
                <Form.Control type="text" placeholder="Give the tag here" name='tag' onChange={onChange}
                    defaultValue={updateNoteValues.length > 0 ? updateNoteValues[2] : ""} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleClick} hidden={updateNoteValues.length > 0}>
                Add Note
            </Button>
            <Button variant="info" type="submit" onClick={handleClickOnUpdate} hidden={!updateNoteValues.length > 0}>
                Update Note
            </Button>
            <Button className='mx-3' variant="danger" type="submit" onClick={() => { updateNoteValuesToState([]) }} hidden={!updateNoteValues.length > 0}>
                Cancel
            </Button>

        </Form>
    );
}

export default AddNote;
