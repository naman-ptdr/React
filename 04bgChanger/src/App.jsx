import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  const colors = ["red", "blue", "green", "orange", "purple", "pink", "gray"];

  return (
    <div className='w-full h-screen duration-200 flex flex-col items-center justify-center' style={{ backgroundColor: color }}>
      <h1 className='text-white text-3xl mb-6 font-bold'>Background Color Changer</h1>
      
      <div className="flex flex-wrap gap-4">
        {colors.map((col) => (
          <button
            key={col}
            onClick={() => setColor(col)}
            className="px-4 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 transition-transform"
            style={{ backgroundColor: col }}
          >
            {col.charAt(0).toUpperCase() + col.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
