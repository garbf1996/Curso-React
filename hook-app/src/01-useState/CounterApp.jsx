import { useState } from "react"


export const CounterApp = () => {

  //Estados de cambios 
const [valor, setCounter] = useState({
  counter1: 10,
  counter2: 20,
  counter3: 30
})


//Desestructurar
const { counter1,counter2,counter3} = valor;

// funcion para el counter para aumentar el valor
function sumar(){
setCounter({
//
  ...valor,
  counter1:counter1 +1,
});
}

  return (
   <>
   <h1>Counter1: {counter1}</h1>
   <h1>Counter2: {counter2}</h1>
   <h1>Counter3: {counter3}</h1>

                                                         {/*Evento click*/}
<button type="button" class="btn btn-outline-primary" onClick={sumar}>Button</button>

 
   </>
  )
}
