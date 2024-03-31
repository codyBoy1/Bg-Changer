import { useState } from 'react'



function App() {
  const [colour, setColour] = useState("#87CEEB")
  return (
    <div className ="w-full h-screen duration-200"
    style={{backgroundColor:colour}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-xl">
    <button 
    onClick={()=>setColour("red")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"red"}}>red</button>
    <button
    onClick={()=>setColour("blue")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"blue"}}>blue</button>
    <button
    onClick={()=>setColour("green")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"green"}}>green</button>
    <button
    onClick={()=>setColour("olive")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"olive"}}>olive</button>
    <button 
    onClick={()=>setColour("orange")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"orange"}}>orange</button>
    <button 
    onClick={()=>setColour("purple")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"purple"}}>purple</button>
    <button
    onClick={()=>setColour("black")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"black"}}>black</button>
    <button 
    onClick={()=>setColour("brown")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"brown"}}>brown</button>
    <button
    onClick={()=>setColour("#87CEEB")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"#87CEEB"}}>skyColor</button>
    <button 
    onClick={()=>setColour("indigo")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"indigo"}}>indigo</button>
    <button
    onClick={()=>setColour("yellow")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"yellow"}}>yellow</button>
    <button
    onClick={()=>setColour("pink")}
    className="outline-none px-4 py-1 rounded-full"style={{backgroundColor:"pink"}}>pink</button>
    </div>
    </div>
    </div>
  )
}

export default App
