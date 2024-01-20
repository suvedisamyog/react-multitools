import React, { useCallback, useEffect, useState ,useRef} from 'react'
const PasswordGenerator = () => {
  const [length,setLength]=useState(10)
  const [number,setNumber]=useState(false)
  const [character,setCharacter]=useState(false)
  const [password,setPassword]=useState("")
  const generatePassword=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number){
        str+="1234567890"
    }  
    if(character){
        str+="!@#$%^&*-_+=[]{}~`"
    } 
    for(let i=1 ;i<=length;i++){
      let char=Math.floor(Math.random()*str.length)      
      pass+=str.charAt(char )
    }
    setPassword(pass)
  },[length,number,character,setPassword])

  const passwordRef = useRef(null)

const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

useEffect(()=>{
    generatePassword()
  },[length,number,character,generatePassword])


  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            value={password}
            ref={passwordRef}
        />
        <button
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={copyPasswordToClipboard}
        >copy
        </button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={20}  
        value={length}       
        className='cursor-pointer'
        onChange={(e)=>{
            setLength(e.target.value)
        }}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          onChange={()=>{
                setNumber((prev)=>!prev)
              }}  

            
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput" 
              onChange={()=>{
                setCharacter((prev)=>!prev)
              }} 
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    <div className="flex justify-center">
  <button 
   className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 mb-3 p-2 rounded"
   onClick={generatePassword}
   >
    ReGenerate
  </button>
</div></div>
    </>
  )
}

export default PasswordGenerator