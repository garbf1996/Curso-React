import { useCounter } from "./hooks/useCounter"


export const CounterWithCustomHook = () => {
//Desestructurar en CounterWithCustomHook.jsx
  const {counter,incremente,decrement,reset} =  useCounter ();
  return (
    <>
     
     <h1>Counter with hook: {counter}</h1>
      <hr></hr>
       <button onClick={incremente}>+1</button>
       <button onClick={reset}>Reset</button>
       <button onClick={decrement}>-1</button>

    </>
  )
}
