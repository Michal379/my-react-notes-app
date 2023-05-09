import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import{ Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {v4 as uuid} from  'uuid'

import UseCreateDate from '../components/UseCrateDate'

const CreateNotes = ({setNotes}) => {
    const [title, setTitle] = useState('')
    const [details, setDetails] =useState ('')
    const date = UseCreateDate()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title && details) {
            const note = {id: uuid(), title,details, date}
            //add these notes to the previous notes array
            setNotes(prevNotes => [note, ...prevNotes])

            //redirect to home page
            navigate('/')
        }
        
    }
    
  return (
<section>
    <header className='create-note_header'>
        <Link to= "/" className="btn"><IoIosArrowBack /></Link>
        <button className='btn lg primary' onClick ={handleSubmit}>Save</button>
    </header>
    <form className='create-note_form' onSubmit = {handleSubmit} >
        <input type='text' placeholder='Title'value={title} onChange = {(e) => setTitle(e.target.value) } autoFocus />
        <textarea rows="28" placeholder='Notes detail...' value={details} onChange = {(e) => setDetails(e.target.value)}></textarea>
    </form>
</section>   
 )
}

export default CreateNotes