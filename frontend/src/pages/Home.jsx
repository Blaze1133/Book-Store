import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'
import BooksTable from '../components/BooksTable'
import BooksCard from '../components/BooksCard';


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      const response = await axios.get("https://book-store-one-iota.vercel.app/books");
      if (Array.isArray(response.data.data)) {
        setBooks(response.data.data); // only set if it's an array
      } else {
        console.log("Expected an array but got:", response.data);
        setBooks([]); // default to empty array if data is not an array
      }
      setLoading(false);
    };
    getBooks();
  }, []);
  return (
    <div className='p-4'>
      <div className="flex justify-center items-center gap-x-4">
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg transform translate-y-12'
          onClick={() => setShowType("table")}>Table</button>

        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg transform translate-y-12 '
          onClick={() => setShowType("card")}>Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8 transform translate-y-13'>Books List</h1>
        <Link to='/books/create' >
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
    {loading ? (<Spinner />) : showType === "table" ?  (<BooksTable books={books} />) : (<BooksCard books={books} />) }


    </div>
  )
}

export default Home
