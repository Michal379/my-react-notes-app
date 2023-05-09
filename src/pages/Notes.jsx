import React,{useState, useEffect} from 'react'
import {CiSearch} from 'react-icons/ci'
import dummyNotes from '../dummy-notes'
import { Link } from 'react-router-dom'
import {BsPlusLg} from 'react-icons/bs'
import NoteItem from '../components/NoteItem'
import {IoMdClose} from 'react-icons/io'

const Notes = ({notes}) => {
    const [showSearch, setShowSearch] = useState(false)
    const [text, setText] = useState('')
    const [filteredNotes, setFilteredNotes] = useState(notes)

    const handleSearch = () => {
        setFilteredNotes(notes.filter(note => {
            if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
                return note;
            }
        }))
    }
    
    useEffect(handleSearch, [text])


  return (
<section>
    <header className='notes__header'>
       {!showSearch && <h2>My Notes</h2>}
        {showSearch && <input type='text' value={text} onChange={(e) => {setText(e.target.value);
        handleSearch()}} autoFocus placeholder = 'keyword ...' />}
        <button className='btn' onClick={() => setShowSearch(prevState => !prevState)}>
         {showSearch ? <IoMdClose/> : <CiSearch/>}</button>
    </header>
    <div className="notes__container">
        {filteredNotes.length == 0 && <p className='empty_notes'>No notes found.</p>}
        {
            filteredNotes.map(note => (<NoteItem key={note.id} note={note}/>))
        }
    </div>
    <Link to ="/create-note"className='btn add_btn'><BsPlusLg/></Link>
</section>
    )
}

export default Notes