import { useState } from "react";
import { useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumber] = useState(false);
  const [charAllowed, setCharacter] = useState(false);
  const [password, setPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length() + 1);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [length, numAllowed, charAllowed, setPass]);

  return (
    <>
       <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          
        />
        <button></button>
        </div>
        <div className=" flex text-sm gap-x-1"></div>
      </div>
    </>
  );
}

export default App;
