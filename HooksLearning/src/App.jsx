import { useState } from 'react' //hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// react has control of the ui if ui i changed i will update 
//hooks



function App() {
  //variable   //method   /*default value */
  let [counter, setCounter] = useState(10) //state chnage is propagated  to ui (dom) 
  // returns the array of variable and method
  //let counter = 15;
  // const addValue = function () {
  //   //  counter+=1;
  //   if(counter ===20)setCounter(0)
  //   else{setCounter(counter + 1)}
  //   console.log("Value", counter);
  // }
  const addValue = function () {
    //  counter+=1;

    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) 



    ///koi farak ni ek hi baar update hoga aa usestate bunches mein bhejta hai and inko bhjega to ek hi kaam kr rhe to ignore ho jayega \


    //krna hai to setCounter callback use kr ta hia previous value ke liye prev state ke liye 

    setCounter((PrevCounter)=> PrevCounter+ 1)
    setCounter((PrevCounter)=> PrevCounter+ 1)
    setCounter((PrevCounter)=> PrevCounter+ 1)
    setCounter((PrevCounter)=> PrevCounter+ 1)
    setCounter((PrevCounter)=> PrevCounter+ 1)
    
  }


  const removeValue = function () {
    //  counter+=1;
    if(counter===0)setCounter(0)
    else{setCounter(counter - 1)}
    console.log("Value", counter);
  }

  return (
    <>
      <h1> Basic Counter</h1>
      <h2>Hello, The Counter Value  : {counter}</h2>
      <button onClick={addValue}> Add Value</button>
      <br />
      <button onClick={removeValue} >Remove Value</button>
    </>

  )
}

export default App
