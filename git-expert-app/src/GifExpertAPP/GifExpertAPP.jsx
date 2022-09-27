import { useState } from "react"

//Cuerpo de index 
export const GifExpertAPP = () => {

const [categories,setCategories ] = useState(['One Punch','Naruto']);


//Agregar nueva category
const oneAddcategory = ()=>{

  setCategories([...categories,'Call of duty']);
}


  return (
    <>
    <h1>GifExpertAPP</h1>
     {/* Button*/}
    <button onClick={oneAddcategory}>Agregar</button>

    {/*Lista*/}
    <ol>
       {
      
      categories.map(category =>{
        return <li key={category}>{category}</li>
      })



       }
    </ol>

    {/*inpunt*/}
    <input  />
    </>
  )
}
