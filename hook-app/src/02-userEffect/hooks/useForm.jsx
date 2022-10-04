import { useState } from "react";



export const useForm = (initiaForm={}) => {
    const [formState, setformState] = useState({ initiaForm});
     
  


    
       const onInputChange = ({target}) => {
      
        const  {name, value} = target;
        setformState ({
            ...formState,
            [name]:value,
        });
       };
         //Para reniciar el formulario
       const Reset = ()=>{
        setformState(initiaForm)
       }

    return {
        ...formState,
     formState,
     onInputChange,
     Reset
    } 

}
