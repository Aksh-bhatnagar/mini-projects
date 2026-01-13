import { useCallback, useEffect, useState, useRef } from "react"

function App() {
const [length, setLength] = useState(8);
const [numbersAllowed, setNumbersAllowed] = useState(false);
const [charactersAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("");

const passwordRef = useRef<HTMLInputElement>(null)

const passwordGenerator = useCallback(() => { //optimize changes (usecallback memorize the function as much as he can to optimize the code)
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numbersAllowed) str += "0123456789"
  if (charactersAllowed) str += "!@#$%^&*)_+=-~`"

  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }

  setPassword(pass)
}, [length, charactersAllowed, numbersAllowed, setPassword])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 49)
  window.navigator.clipboard.writeText(password)
}, [password])

useEffect(() => {  //actual changes
  passwordGenerator()
}, [length, numbersAllowed, charactersAllowed, passwordGenerator])
  return (
    <>
     <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-150 h-60 mx-auto shadow-md rounded-lg px-4 my-8 text-black bg-gray-400 gap-6 p-4">
      <h3 className="text-2xl text-center">Password Generator</h3>
      <div className="flex shadow rounded-lg overflow-hidden my-4 h-10 bg-white p-2">
        <input type="text" value={password} className="outline-none w-full bg-white" placeholder="Password" ref={passwordRef} />
        <span onClick={copyPasswordToClipboard} 
        className="bg-blue-400 p-2 flex justify-center items-center rounded-2xl cursor-pointer hover:bg-blue-500">Copy</span>
      </div>
      <div className="flex">
        <input type="range" min={4} max={50} value={length} className="cursor-pointer"
               onChange={(e) => {setLength(parseInt(e.target.value))}} />
        <label className="pr-5 pl-1">Length: {length}</label>
        <input type="checkbox" defaultChecked={numbersAllowed} id="numberInput"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}/>
        <label className="pr-5 pl-1">Number</label>
        <input type="checkbox" defaultChecked={charactersAllowed} id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}/>
        <label className="pr-5 pl-1">Characters</label>
      </div>
     </div>
     </div>
     </>
  )
}


export default App;