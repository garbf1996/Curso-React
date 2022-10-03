import { useCounter } from "./hooks/useCounter"


export const CounterWithCustomHook = () => {

  const {counter} =  useCounter ();
  return (
    <>
     
     <h1>Counter with hook: {counter}</h1>
      <hr></hr>
       <button>+1</button>
       <button>Reset</button>
       <button>-1</button>

    </>
  )
}
