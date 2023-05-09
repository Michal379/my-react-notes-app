import React, { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import UseCreateDate from '../components/UseCrateDate';

const EditNotes = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = UseCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = [];
      notes.forEach((item) => {
        if (item.id === id) {
          newNotes.push(newNote);
        } else {
          newNotes.push(item);
        }
      });
      setNotes(newNotes);
    }
    //redirect to homepage
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);
      navigate('/');
    }
  };

  return (
    <section>
      <header className="create-note_header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn danger" onClick={handleDelete}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form className="create-note_form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows="28"
          placeholder="Notes detail..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNotes;
