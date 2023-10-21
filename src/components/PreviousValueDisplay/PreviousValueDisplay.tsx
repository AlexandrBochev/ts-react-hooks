import { useRef, useState, useEffect } from "react"

// In this example, we use useRef to store the previous value of the input field.
// Whenever the value is updated, we update previousValueRef.current to display the previous value.

const PreviousValueDisplay = () => {
  const [value, setValue] = useState("")
  const previousValueRef = useRef<string | null>(null)

  useEffect(() => {
    previousValueRef.current = value
  }, [value])

  return (
    <div>
      <h2>Previous Value</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Current value: {value}</p>
      <p>Previous value: {previousValueRef.current || "none"}</p>
    </div>
  )
}

export { PreviousValueDisplay }