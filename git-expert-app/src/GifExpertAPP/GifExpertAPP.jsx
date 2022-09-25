import { useState } from "react"

//Cuerpo de index 
export const GifExpertAPP = () => {

const [categories,setCategories ] = useState(['One Punch','Naruto']);



const oneAddcategory = ()=>{

  setCategories([...categories,'Call of duty']);
}


  return (
    <>
    <h1>GifExpertAPP</h1>

    <button onClick={oneAddcategory}>Agregar</button>

    <ol>
       {
      
      categories.map(category =>{
        return <li key={category}>{category}</li>
      })



       }
    </ol>
    
    </>
  )
}
