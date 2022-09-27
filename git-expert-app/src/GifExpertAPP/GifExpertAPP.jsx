import { useState } from "react"
import { AddCategoty } from "../components/AddCategoty";
import { GifGrind } from "../components/GifGrind.jsx";

//Cuerpo de index 
export const GifExpertAPP = () => {

 const [categories,setCategories ] = useState(['One Punch']);


//Agregar nueva category
 const oneAddcategory = (newCategory)=>{
  
  //si exicte nueva category en la arryan
  if(categories.includes(newCategory)){
    return 
  }

  //categories.push(newCategory);
  setCategories([newCategory,...categories]);
}


  return (
    <>
    <h1>GifExpertAPP</h1>

   <AddCategoty
    //setCategories = {setCategories}
     onNewCategory = {(event) => oneAddcategory(event)}
    
    />
     
       {
    
      categories.map((category) =>
        (
      <GifGrind 
      key={category}
      category ={ category}
       /> 
         ))



       }
   


    </>
  )
}
