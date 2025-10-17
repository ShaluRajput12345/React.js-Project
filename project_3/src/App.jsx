import { useState } from 'react'
import './App.css'
import Firstpage from './components/Firstpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Firstpage />
    </>
  )
}

export default App
