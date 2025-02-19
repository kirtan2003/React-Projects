import React from 'react';
import { RxCopy } from "react-icons/rx";
import Dropdown from './Dropdown';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import toast from 'react-hot-toast';

const ViewPaste = () => {

  const { id } = useParams();
  const allPastes = useSelector(state => state.pastes)
  const paste = allPastes.find(paste => paste._id === id)


  return (
    <div>
      <div className='mx-auto flex max-w-4xl justify-between mt-12'>
        <input
          type="text"
          className="bg-gray-800 w-2/3 rounded border-2 border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out cursor-not-allowed disabled:text-gray-400"
          placeholder="Enter a Title..."
          value={paste.title}
          disabled
        />

        <div className={`text-base font-medium tracking-wide bg-gray-900 border-2 ${paste.type == "Code" ?"text-teal-600 border-teal-600": paste.type=="Json"? "text-yellow-700 border-yellow-700 ": "text-blue-700  border-blue-700"}  rounded-lg px-8 py-2 cursor-pointer `}>
          {paste.type}
        </div>

      </div>
      <div className="mx-auto flex flex-col lg:max-w-4xl mt-7 group">
        {/* Header Section */}
        <div
          className='bg-slate-600 rounded-t-lg px-4 py-2 flex justify-between items-center border-l-2 border-r-2 overflow-hidden border-t-2 transition-all duration-200 border-gray-700'
        >
          <div className='flex gap-x-2 items-center'>
            <div className='bg-red-500 h-3.5 w-3.5 rounded-full'></div>
            <div className='bg-yellow-500 h-3.5 w-3.5 rounded-full'></div>
            <div className='bg-green-500 h-3.5 w-3.5 rounded-full'></div>
          </div>
          <div className="ml-auto">
            <div className="transition-transform duration-100 ease-in-out transform hover:scale-110">
              <RxCopy onClick={() => {
                navigator.clipboard.writeText(value)
                toast.success("Copied!")
              }}
                className='text-xl' />
            </div>
          </div>
        </div>

        {/* Textarea Section */}
        <textarea
          placeholder="Enter the content here..."
          value={paste.content}
          disabled
          rows={15}
          className="bg-gray-800 w-full border-l-2 border-r-2 border-b-2  border-gray-700 focus:border-purple-500 focus:ring-0 text-base outline-none text-gray-100 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-b-lg cursor-not-allowed disabled:text-gray-400"
        />
      </div>
    </div>
  )
}

export default ViewPaste