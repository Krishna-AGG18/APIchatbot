import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import DarkVeil from './components/DarkVeil/DarkVeil'

function App() {


  return (
    <>
      <div className='w-full min-h-screen relative'>
        <DarkVeil />
        <div className=' xs:min-h-screen absolute top-0 w-full'>
          <nav className='py-8'>
            <div className="flex justify-between items-center px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-4/6 mx-auto max-xs:w-9/10 text-white">
              <p className='font-bold '>ASK.IO</p>
              <div className='flex gap-10'>
                <Link to={"/"}>Home</Link>
                <Link to={"/bot"}>ChatBot</Link>
              </div>
            </div>
          </nav>

          <div className="text-center space-y-6 flex flex-col max-xs:justify-center w-full max-sm:min-h-screen">
            <h1 className="text-4xl md:text-5xl max-xs:text-2xl max-xs:px-2  font-bold text-white leading-tight">
              Unleash AI power to <br className="hidden md:block" />
              create, explain, and connect
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto max-xs:px-2 ">
              🗨️ Chatbots &nbsp; | &nbsp; 📄 Text Generators &nbsp; | &nbsp; ✍️ Story Writers &nbsp; | &nbsp; 🧠 Code Explainers &nbsp; | &nbsp; 📚 Translators
            </p>
            <div className="flex justify-center gap-4 max-xs:flex-col max-xs:px-4 ">
              <Link to={"/bot"}>
              <button className="bg-white text-black px-6 py-2 cursor-pointer rounded-full font-medium shadow hover:bg-gray-200 transition">
                Get Started
              </button></Link>
              <button className="bg-black/30 text-white px-6 py-2 rounded-full font-medium border border-white/10 hover:bg-black/50 transition">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
