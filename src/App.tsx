import { ClickCounter } from "./components/ClickCounter/ClickCounter"
import { Counter } from "./components/Counter/Counter"
import { Fibonacci } from "./components/Fibonacci/Fibonacci"
import { PreviousValueDisplay } from "./components/PreviousValueDisplay/PreviousValueDisplay"

const App = () => {
  return (
    <>
      <PreviousValueDisplay />
      <ClickCounter />
      <Fibonacci />
      <Counter />
    </>
  )
}

export { App }
