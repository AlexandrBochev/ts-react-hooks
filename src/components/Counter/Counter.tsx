import { useReducer } from "react"

// In this example, we use the useReducer hook to manage the state of a counter component.
// We define an initial state (initialState) and a reducer function (reducer)
// that specifies how the state should change in response to different actions.

interface State {
  count: number
}

const initialState: State = { count: 0 }

const reducer = (state: State, action: { type: string }) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    case "reset":
      return initialState
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  )
}

export { Counter }