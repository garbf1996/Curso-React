import { useState } from "react"


export const useCounter = (initialValue = 10) => {
 
    const [counter,setcounter] = useState(initialValue);

    //Funcion de autoincremental
    const incremente = ()=>{
      setcounter(counter + 2);
    }

      //Funcion disminuir
    const decrement = ()=>{

      if(counter === 0) return;
      setcounter(counter -1);
    }
       //Reniciar de incremente
    const reset = ()=>{
     setcounter(initialValue)
    }

  return {
    counter,
    //Funcion de autoincremental
    incremente,
    //Funcion disminuir
    decrement,
    //Reniciar de incremente
    reset
  }
}
