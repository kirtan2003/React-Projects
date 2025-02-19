import React, { useState, useEffect } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { RxCopy, RxUpdate } from "react-icons/rx";
import Dropdown from './Dropdown';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPaste, updatePaste } from '../features/pastes/pasteSlice';
import toast from 'react-hot-toast';


const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [pasteType, setPasteType] = useState("Code");
  const allPastes = useSelector(state => state.pastes)

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find(paste => paste._id === pasteId);
      setTitle(paste.title)
      setValue(paste.content)
    }
  }, [pasteId])
  

  const createPaste = (e) => {
    // console.log(title, value);
    if (title.trim() === "") {
      toast.error("Please add a title!");
      return;
    }
    if (value.trim() === "") {
      toast.error("Please add content!");
      return;
    }
    const newPaste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(),
      createdAt: new Date().toISOString(),
      type: pasteType,
    }
  
    if(pasteId){
      e.preventDefault()
      dispatch(updatePaste(newPaste));
    }
    else{
      e.preventDefault()
      dispatch(addPaste(newPaste));
    }
    setTitle('')
    setValue('')
    setPasteType("Code");
    setSearchParams({})
  }
  return (
    <div>
      <div className='mx-auto flex max-w-4xl justify-between mt-12'>
        <input
          type="text"
          className="bg-gray-800 w-1/2 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Dropdown setOption={setPasteType}/>

        <button
          type="submit"
          onClick={createPaste}
          className="text-white flex items-center justify-between gap-3 bg-purple-700 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 font-medium rounded-lg"
        >
          {
            pasteId ? "Update Paste" : "Create Paste"
          }
          
          {pasteId ? <RxUpdate/> : <FaCirclePlus />}
        </button>
      </div>
      <div className="mx-auto flex flex-col lg:max-w-4xl mt-7 group">
        {/* Header Section */}
        <div
          className={`bg-slate-600 rounded-t-lg px-4 py-2 flex justify-between items-center border-l-2 border-r-2 overflow-hidden border-t-2 transition-all duration-200 ${isFocused ? "border-purple-500 " : "border-gray-700"
            }`}
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
              className='text-xl'/>
            </div>
          </div>
        </div>

        {/* Textarea Section */}
        <textarea
          placeholder="Enter the content here..."
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setValue(e.target.value)}
          rows={15}
          className="bg-gray-800 w-full border-l-2 border-r-2 border-b-2  border-gray-700 focus:border-purple-500 focus:ring-0 text-base outline-none text-gray-100 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-b-lg"
        />
      </div>
    </div>
  )
}

export default Home