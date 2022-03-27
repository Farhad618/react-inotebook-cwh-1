import React, {useContext} from 'react';
import noteContext from '../../context/notes/noteContext';


const AllNotes = () => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes, setNotes} = context;
  return (
    <div>
      {
          notes.map((note)=>{
              return note.title + " | ";
          })
      }
    </div>
  );
}

export default AllNotes;
