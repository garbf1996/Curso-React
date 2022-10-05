import { useEffect, useState } from "react";

export const useFetch = (url) => {


const [state, setState] = useState({
    //Producto de la peticion
   data: null,
   //Cargando
   isLoading: true,
   //Error
   hasError: null,
})



   //Promesa 
   const getURL = async ()=>{
    
     setState({
        ...state,
        isLoading: true
     })

    const resp = await fetch(url);
    const data = await resp.json();


    setState({
        data,
        isLoading: false,
        hasError: null,
    });

   }

  
   
    //Cada vez que el URL cambie va a vovle a disparar
    useEffect(() => {
        //Detecta que se monta el componentes se dispara
     getURL();
    }, [url])
    
  
  
    return {
  
    data: state.data,
  
    isLoading: state.isLoading,
  
    hasError: state.hasError,
    } ;
}
