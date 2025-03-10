import { useState } from 'react'
import './App.css'
import { TaskBar } from './components/cards/TaskBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="text-3xl font-bold underline">
        hello
      </div>
      <div>
        <TaskBar />
      </div>
    </>
  )
}

export default App
