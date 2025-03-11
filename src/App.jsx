import { useState } from 'react'
import './App.css'
import { TaskBar } from './components/cards/TaskBar'
import { Desktop } from './components/cards/Desktop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Desktop />
      </div>
      <div>
        <TaskBar />
      </div>
    </>
  )
}

export default App
