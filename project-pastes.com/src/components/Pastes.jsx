import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { RxCopy } from "react-icons/rx";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdShare } from "react-icons/md";
import { format } from "date-fns";
import './buttonAnimation.css'
import { removePaste } from '../features/pastes/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Pastes = () => {
  const pastes = useSelector(state => state.pastes)
  const dispatch = useDispatch()
  // console.log(pastes)

  const [search, setSearch] = useState('')
  const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(search.toLowerCase()))

  const handleDelete = (pasteId) => {
    dispatch(removePaste(pasteId))
  }

  return (
    <>
      <div className="mx-auto bg-gray-800 py-1.5 px-3 border border-purple-500 rounded flex items-center max-w-4xl justify-between mt-12">
        <FaSearch className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Search question here..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent text-gray-100 outline-none placeholder-gray-500 py-1 px-3"
        />
      </div>
      <div className="font-serif mx-auto bg-gray-800 py-3 text-purple-500 px-4 border border-gray-700 rounded-t-sm flex items-center max-w-4xl justify-between mt-5 text-4xl">
        All Pastes
      </div>
      <div className='font-serif mx-auto bg-gray-800 py-3 px-3 border-b border-l border-r border-gray-700 rounded-b-sm flex-col items-center max-w-4xl justify-between'>
        {
          filteredData.length > 0 ?
            filteredData.map((paste) => {
              return (
                <div key={paste._id} className='bg-tranparent py-2 px-3 w-full h-48 border-2 mb-5 rounded border-gray-700'>
                  <div className='flex h-[40%] items-center justify-between px-3 py-2 mb-4'>
                    <span className='text-4xl tracking-normal'>{paste.title}</span>
                    <div className='flex items-center gap-x-2'>
                      <Link to={`/?pasteId=${paste?._id}`}><div className='rounded-md border-2 border-gray-600 hover:text-blue-500 hover:border-blue-500 p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path></svg>
                      </div></Link>
                      <div onClick={() => handleDelete(paste?._id)} className='rounded-md border-2 border-gray-600 hover:border-red-500 p-3 hover:text-red-500'><RiDeleteBinLine /></div>
                      <div className='rounded-md border-2 border-gray-600 hover:text-orange-400 hover:border-orange-400  p-3'><MdShare /></div>
                      <Link to={`/pastes/${paste?._id}`}><div
                       className='rounded-md border-2 border-gray-600 hover:text-violet-500 hover:border-violet-500  p-3'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
                      </div></Link>
                      <div onClick={() => {
                        navigator.clipboard.writeText(paste?.content)
                        toast.success("Copied!")
                      }}
                        className='rounded-md border-2 border-gray-600 hover:text-green-500 hover:border-green-500 p-3'>
                          <RxCopy />
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full px-3 gap-3'>
                    <div className='text-sm overflow-hidden tracking-wide font-normal w-[62%]'>
                      {paste.content.length > 220
                        ? `${paste.content.slice(0, 220)} ...`
                        : paste.content
                      }
                    </div>
                    <div className='flex flex-col h-full w-[38%]'>
                      <div className='font-sans text-base flex items-center gap-x-3 ml-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>
                        {format(paste.createdAt.slice(0, 10), "MMMM d, yyyy")}
                      </div>

                      <button className={`bg-gray-800 bg-gradient-to-r  ${paste.type == "Code" ? "from-gray-800 via-teal-700 to-gray-800" : paste.type == "Json" ? "from-gray-800 via-yellow-700 to-gray-800" : "from-gray-800 via-blue-700 to-gray-800"} border rounded py-1.5 px-4 mt-3 hover:from-gray-800
                       ${paste.type == "Code" ? "border-teal-600" : paste.type == "Json" ? "border-yellow-700" : "border-blue-700"} ml-auto`}>
                        {paste.type}
                      </button>
                    </div>
                  </div>
                </div>
              )
            }) : (
              <>
                <p className='text-xl'>No Pastes Found!</p>
              </>
            )
        }
      </div>
    </>
  )
}

export default Pastes