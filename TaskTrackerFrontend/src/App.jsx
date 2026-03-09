import { useState } from 'react'
import './index.css'  

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex flex-col items-center justify-center p-8 text-white">
      <h1 className="text-5xl font-bold mb-8 drop-shadow-2xl">
        TaskTracker React! ✅
      </h1>
      <div className="bg-white/10 backdrop-blur p-8 rounded-2xl shadow-2xl max-w-md">
        <button 
          className="bg-white/20 hover:bg-white/30 px-8 py-3 rounded-xl text-xl font-semibold transition-all duration-300"
          onClick={() => setCount((count) => count + 1)}
        >
          Count: {count}
        </button>
      </div>
    </div>
  )
}

export default App
