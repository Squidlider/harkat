import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const [counter, setCounter] = useState(0)

  const plusOne = () => {
    setCounter(counter + 1)
  }

  const setToZero = () => {
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={plusOne} text="Plus" />
      <Button handleClick={setToZero} text="Zero" />
    </div>
  )
}

export default App
