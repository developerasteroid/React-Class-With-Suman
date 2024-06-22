import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  

  useEffect(()=>{
    console.log("I am printed from useEffect");
  }, [count2])


  return (
    <>
    <button onClick={()=>{setCount(count + 1)}}>Count: {count}</button>
    <button onClick={()=>{setCount2(count2 + 1)}}>Count: {count2}</button>
    </>
  )
}

export default App
