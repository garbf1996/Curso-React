import { useState } from "react";


export const AddCategoty = ({onNewCategory}) => {

const [inputValue, setinputValue] = useState('')

// ver lo que esta escribiendo el usuario
const onInputChange = ({target}) => {
    setinputValue(target.value);
}

const onSubmit = (e) => {
 e.preventDefault();
 //Limpiando los elementos
 if(inputValue.trim().length <= 1)  return;
//setCategories(categories=>[inputValue,...categories]);
onNewCategory(inputValue.trim());
setinputValue();

}


  return (
    <form onSubmit={(e)=>onSubmit(e)} >


<input 
    type = "text"
     placeholder="Buscar gifs"
     value={inputValue}
    onChange={onInputChange}
    
    
    />
    </form>
    
  )
}
