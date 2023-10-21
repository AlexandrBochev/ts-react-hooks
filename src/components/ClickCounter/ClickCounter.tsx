import { useState, useCallback } from "react"

// In this example, we use the useCallback hook to memoize the increment and reset functions.
// Memoization helps prevent unnecessary re-renders of the component since the functions are stored in memory with stable dependencies.

const ClickCounter = () => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [count])

  const reset = useCallback(() => {
    setCount(0)
  }, [])

  return (
    <div>
      <h2>Click Counter</h2>
      <p>Number of clicks: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export { ClickCounter }




