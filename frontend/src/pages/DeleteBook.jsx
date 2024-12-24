import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'


const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = async () =>{
    setLoading(true)
    await axios.delete(`https://book-store-one-iota.vercel.app/${id}`)
    enqueueSnackbar('Book deleted successfully', { variant: 'success' })
    setLoading(false) 
    navigate('/')

  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ''}

      <div className="flex flex-col border-2 border-sky-300 rounded-xl w-[600px] p-4  mx-auto">
        <div className="my-4">
          <h3 className='text-xl text-center'>Are you sure you want to delete this book ?</h3>
        </div>
        <button className="p-2  bg-red-500 m-8 center" onClick={handleDeleteBook}>Delete</button>      
      </div>
         
    </div>
  )
}

export default DeleteBook
