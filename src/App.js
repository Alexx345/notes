import { useState } from 'react'
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
import Search from './components/Search'


function App() {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is the first note",
    date: "23 /04/2490"
  },
  {
    id: nanoid(),
    text: "This is the third note",
    date: "23 /04/2490"
  },
  {
    id: nanoid(),
    text: "This is the second note",
    date: "23 /04/2490"
  }])

  const addNote = (text) => {

    const date = new Date()
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const [searchText, setSearchText] = useState('')

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes} handleAddNote={addNote} />
    </div>
  );
}

export default App;
