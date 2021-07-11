import { useState } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'


function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is the first note",
    date: "23 /04/2490"
  }])


  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
