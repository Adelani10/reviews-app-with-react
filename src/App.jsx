import { useState } from 'react'
import './index.css'
import Review from './review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto p-4 border-2 h-screen flex flex-col justify-center items-center bg-[#F5F5F5]">
      <Review />
    </div>
  )
}

export default App
