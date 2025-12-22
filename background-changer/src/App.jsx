import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive");  

  return (
    <>
      <div className="w-full min-h-screen duration-200" style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-4 py-3 text-white">
            <button onClick= {()=> setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
            <button onClick= {()=> setColor("blue")} style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick= {()=> setColor("green")} style={{ backgroundColor: "green" }}>Green</button>
            <button onClick= {()=> setColor("orange")} style={{ backgroundColor: "orange" }}>Orange</button>
            <button onClick= {()=> setColor("black")} style={{ backgroundColor: "black" }}>Black</button>
            <button onClick= {()=> setColor("olive")} style={{ backgroundColor: "olive" }}>Olive</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App;
