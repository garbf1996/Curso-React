import { useFetch } from "./hooks/useFetch"


export const MultipleCustomHooks = () => {

    const {data,isLoading,hasError} =  useFetch ('https://www.breakingbadapi.com/api/quotes/1');
    //Si la data tiene un valor
    const {author,quote} = !!data && data[0];
    console.log(data,isLoading,hasError);
  
  return (
    <>
    <h1>Breaking Qoutes</h1>
    <hr></hr>


     {
     isLoading 
          ? (
            <h1>Cargando..</h1>
          )
          : (
           <blockquote>
            <p>{author}</p>
            <footer>{quote}</footer>
           </blockquote>
           
          )






     }

    </>
  )
}
