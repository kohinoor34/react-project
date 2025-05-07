import { useState, useCallback ,useEffect,useRef} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useref hook- 
  const passwordref = useRef(null)
  const copyPasswordToClibboard = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password)
  },[password])


  const passwordgeneratoe = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%&*_(){}~';
   
    for (let i = 0; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      console.log(char);
    }
   

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, ])

  useEffect(()=>{
    passwordgeneratoe();
  },[length,numberAllowed,charAllowed,passwordgeneratoe])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-700 '>
        <h1 className='text-white text-center'>Password generator</h1>

        <div className='flex shadow rounded-lg  overflow-hidden mb-4'>
          <input type="text"
            value={password}
            ref={passwordref}
            
            className='outline-none w-full py-1 px-3'
            placeholder='password'
          />
          <button onClick={copyPasswordToClibboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-5m gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={100} value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
              defaultChecked={charAllowed}
              id='characterinput'
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label htmlFor='characterinput'>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
 