import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import noteContext from '../../context/notes/noteContext';

const AddNote = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const { addNote, updateNoteValues, updateNoteValuesToState, updateNote, setUpdateNoteValues, formStateHidden, setFormStateHidden } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);

        // console.log(updateNoteValues)
        // addNote(updateNoteValues[0], updateNoteValues[1], updateNoteValues[2]);
        setNote({ title: "", description: "", tag: "" });
        // setUpdateNoteValues([]);
    }
    /* const handleOnEdit = (e)=>{
        e.preventDefault();
        context.updateNote(props.id, note.title, note.description, note.tag);
    } */
    const handleClickOnUpdate = (e) => {
        e.preventDefault();
        updateNote(updateNoteValues.id, updateNoteValues.title, updateNoteValues.description, updateNoteValues.tag);
        setUpdateNoteValues({});
        setFormStateHidden(false);

    }
    

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
        // setUpdateNoteValues({ ...updateNoteValues, [e.target.name]: e.target.value });
    }

    const onChangeUpdate = (e)=>{
        setUpdateNoteValues({ ...updateNoteValues, [e.target.name]: e.target.value });
    }

    return (<>
        <Form className='my-3' hidden={formStateHidden}>
            <Form.Group className="mb-3" controlId="sdfsgxdsfg">
                <Form.Label><h3>Title</h3></Form.Label>
                <Form.Control type="text" placeholder="Enter a title" name='title' onChange={onChange} required={true} value={note.title} />
                <Form.Text className="text-muted">
                    Title must be at list 3 character.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="sdfsdwws">
                <Form.Label><h3>Description</h3></Form.Label>
                <Form.Control as="textarea" aria-label="Give the description here" name='description' rows={5} onChange={onChange} required={true} value={note.description} />
                <Form.Text className="text-muted">
                    Description must be at list 3 character.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="dfgdg">
                <Form.Label><h3>Tag</h3></Form.Label>
                <Form.Control type="text" placeholder="Give the tag here" name='tag' onChange={onChange} value={note.tag} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick} disabled={note.title.length < 3 || note.description.length < 3}>
                Add Note
            </Button>
        </Form>

        <Form className='my-3' hidden={!formStateHidden}>
            <Form.Group className="mb-3" controlId="sdfsgxdsfg">
                <Form.Label><h3>Title</h3></Form.Label>
                <Form.Control type="text" placeholder="Enter a title" name='title' onChange={onChangeUpdate} required={true} defaultValue={updateNoteValues.title} />
                <Form.Text className="text-muted">
                    Title must be at list 3 character.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="sdfsdwws">
                <Form.Label><h3>Description</h3></Form.Label>
                <Form.Control as="textarea" aria-label="Give the description here" name='description' rows={5} onChange={onChangeUpdate} required={true} defaultValue={updateNoteValues.description} />
                <Form.Text className="text-muted">
                    Description must be at list 3 character.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="dfgdg">
                <Form.Label><h3>Tag</h3></Form.Label>
                <Form.Control type="text" placeholder="Give the tag here" name='tag' onChange={onChangeUpdate} defaultValue={updateNoteValues.tag} />
            </Form.Group>
            <Button variant="info" type="submit" onClick={handleClickOnUpdate} disabled={
                (updateNoteValues.title !== undefined && updateNoteValues.description !== undefined) && (updateNoteValues.title.length < 3 || updateNoteValues.description.length < 3)
            } >
                Update Note
            </Button>
            <Button className='mx-3' variant="danger" type="submit" onClick={() => { setUpdateNoteValues({}); setFormStateHidden(false); }} >
                Cancel
            </Button>
        </Form>


    </>);
}

export default AddNote;
