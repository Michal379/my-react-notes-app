import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notes from './pages/Notes'
import CreateNotes from './pages/CreateNotes'
import EditNote from './pages/EditNote'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path = "/"  element = {<Notes />} />
    <Route path = "/create-notes"  element = {<CreateNotes />} />
    <Route path = "/edit-note/:id"  element = {<EditNote />} />

   </Routes>
   </BrowserRouter>
  )
}

export default App