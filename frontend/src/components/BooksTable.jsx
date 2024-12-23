import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'

const BooksTable = ({ books }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                <tr>
                  <th scope="col" className="px-6 py-4">No</th>
                  <th scope="col" className="px-6 py-4">Title</th>
                  <th scope="col" className="px-6 py-4 max-md:hidden">Author</th>
                  <th scope="col" className="px-6 py-4 max-md:hidden">Publish Year</th>
                  <th scope="col" className="px-6 py-4">Operations</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={book._id} className="border-b dark:border-neutral-500 hover:bg-neutral-100">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{book.title}</td>
                    <td className="whitespace-nowrap px-6 py-4 max-md:hidden">{book.author}</td>
                    <td className="whitespace-nowrap px-6 py-4 max-md:hidden">{book.publishYear}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex justify-center gap-x-4">
                        <Link to={`books/details/${book._id}`} className="text-2xl text-green-800 hover:text-green-600">
                          <BsInfoCircle />
                        </Link>
                        <Link to={`books/edit/${book._id}`} className="text-2xl text-yellow-600 hover:text-yellow-500">
                          <AiOutlineEdit />
                        </Link>
                        <Link to={`/books/delete/${book._id}`} className="text-2xl text-red-600 hover:text-red-500">
                          <MdOutlineDelete />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksTable
