import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

 const singLogin = useNavigate(); 

 const onLogin = ()=>{
   
  singLogin('/',{
    //Reemplazar el historial
    replace: true
  });

 } 


  return (
    <>
   <div className="contianer mt-5">
    <h1>Login</h1>
    <hr />
    <button className="btn btn-primary" onClick={onLogin}>Login</button>
   </div>
    </>
  )
}
