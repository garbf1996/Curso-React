import { useState } from "react"


export const TodoAdd = () => {

  const [inputValor, setinputValor] = useState([''])

  return (
 <>
 <form >
<input type="text" placeholder="Que hacer"
value={inputValor}
onChange={onChange}
/>
<br></br>
<br></br>
 <button type="submit">
    Add
 </button>
</form>
 </>
  )
}
