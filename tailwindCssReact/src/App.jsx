import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
 /* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */
function App() {
  const [count, setCount] = useState(0)
 let newArr = [ 1, 2 ,2,3,4,56,4]
 let newObj  = {
  username: "Raj Gupta",
  age : 23
 }
  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
     

    <Card />
    {/* <Card channel = "hello" some Obje = newObj />
    <Card channel = "hello"  myArr = [1 ,2 ,3 ,6] /> */}
    <Card  username = "Raj" msg = "hello"  myArr = {newArr}  some Obje = {newObj} />
   </>
  )
}

export default App
