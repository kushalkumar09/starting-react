import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(0)
  const upCounter = () => {
    if (counter >= 20) {
      console.log(counter)
      setCounter(20)
    } else {
      setCounter(counter + 1)
    }
  }
  const downCounter = () => {
    if (counter <= 0) {
      console.log(counter)
      setCounter(0)
    } else {
      setCounter(counter - 1)
    }
  }
  

  return (
    <>
    <h1>Hello my name is Kushal</h1>
      <h2>counter Project</h2>
      <h1>This is counter: {counter}</h1>
      <button onClick={upCounter}>add counter {counter}</button>
      <button onClick={downCounter}>remove cunter {counter}</button>
    </>
    
  )
}

export default App
