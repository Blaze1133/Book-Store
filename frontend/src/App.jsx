import { Routes,Route } from "react-router-dom"

import Home from "./pages/Home"
import ShowBook from "./pages/ShowBook"
import CreateBook from "./pages/CreateBook"
import Edit from "./pages/Edit"
import DeleteBook from "./pages/DeleteBook"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/create" element={<CreateBook/>}/>
        <Route path="/books/details/:id" element={<ShowBook/>}/>
        <Route path="/books/delete/:id" element={<DeleteBook/>}/>
        <Route path="/books/edit/:id" element={<Edit/>}/>
      </Routes>
  )
}

export default App
