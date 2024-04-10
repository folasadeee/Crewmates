import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="homepage">

<header>
      <h1 className="py-5 text-5xl font-bold">Welcome to the Crewmate Creator!</h1>
      <p className="py-5 text-2xl">Here is where you can create your very own set of crewmates before sending them off into space!</p>

      <p className="py-5 text-2xl">Click the <span className="font-bold bg-gray-700 px-3 rounded-full ">Create a Crewmate!</span> tab to get started!</p>
      <img src="/crewmate-images/group-crewmates.png" className='homepage-img'/></header>
    
      </main>
    </>
  )
}

export default App
