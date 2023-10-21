import { useState, useMemo } from "react"

// In this example, we use the useMemo hook to memoize the result of the Fibonacci number calculation.
// The fibonacciValue is computed using the useMemo hook, and it depends on the value of n.

const Fibonacci = () => {
  const [n, setN] = useState(1)

  const fibonacciValue = useMemo(() => {
    function calculateFibonacci(num: number): number {
      if (num <= 1) return num
      return calculateFibonacci(num - 1) + calculateFibonacci(num - 2)
    }
    return calculateFibonacci(n)
  }, [n])

  return (
    <div>
      <h2>Fibonacci Calculator</h2>
      <p>Calculate Fibonacci number at position: {n}</p>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
      />
      <p>Fibonacci Result: {fibonacciValue}</p>
    </div>
  )
}

export { Fibonacci }