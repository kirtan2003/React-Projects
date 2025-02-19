import { useState , useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwrodRef = useRef(null);

  const generatePassword = useCallback(()=>{
    let pass = " ";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) string += "0123456789";
    if(charAllowed) string += "!?@#$%^&*+_-[]{}()~";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(index);
      
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);


  const copyPasswordToClipboard = useCallback(() => {
    passwrodRef.current?.select();
    //passwrodRef.current?.setSelectionRange(0,8);   //selects char 0-8
    navigator.clipboard.writeText(password);
    // alert("Password copied to clipboard");
  },[password])


  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, charAllowed, generatePassword])
  

  return (
    <>
      <h1 className='text-4xl italic text-white text-center mt-10'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-cyan-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 placeholder:text-slate-400'
          placeholder="Password..."
          readOnly
          ref={passwrodRef}
          />
          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 hover:bg-green-700  text-white px-3 py-0.5 shrink-0 text-center'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{
                setLength(e.target.value)
              }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                id='numberInput'
                defaultChecked={numAllowed}
                onChange={()=>{
                  setNumAllowed((prev)=>!prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
              <input type="checkbox"
                id='charInput'
                defaultChecked={charAllowed}
                onChange={()=>{
                  setCharAllowed((prev)=>!prev);
                }}
              />
              <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
