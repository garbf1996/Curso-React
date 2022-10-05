import { useRef } from "react"


export const FocusScreen = () => {

  const inputRef = useRef();

  const onclick = () => {
    inputRef.current.select();
  }
  
  return (
   <>
   <input type="text"
   placeholder="Ingrese su nombre"
   ref={inputRef}
   />
   <hr></hr>
   <button onClick={onclick}>Click</button>
   </>
  )


}
