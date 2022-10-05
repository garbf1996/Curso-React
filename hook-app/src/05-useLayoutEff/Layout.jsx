import { useCounter } from "../01-useState/hooks/useCounter";
import { useFetch } from "../03-exmples/hooks/useFetch";
import { LoadingQuote, Quote } from '../03-exmples/index';



export const Layout = () => {
   const {counter,incremente} = useCounter(1);
    const {data,isLoading,hasError} =  useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
    //Si la data tiene isLoadingun valor
    const {author,quote} = !!data && data[0];

  
  return (
    <>
    <h1>Breaking Qoutes</h1>
    <hr></hr>

    {
      isLoading 
        ? <LoadingQuote />
        :     <Quote author={author}  quote={quote}/>
    }
     
   



   
         <button onClick={()=>incremente()} disabled={isLoading}>Next</button>
    </>
  )
}
