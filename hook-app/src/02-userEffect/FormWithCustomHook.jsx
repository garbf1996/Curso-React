
import { useForm } from "./hooks/useForm";



export const FormWithCustomHook = () => {
 
 const {onInputChange,usurio,email,password,Reset}= useForm(   {
  usurio: '',
  email:  '',
  password: ''
 })

//const { usurio,email,password} = formState;

  return (
    <>
    <h1>Formulario con custom Hook</h1>
    <hr></hr>
    <input type="text"
     name="usurio"
    placeholder = "userName"
    value={usurio}
    onChange={onInputChange}
    />
     <br></br>
    <br></br>
    <input type="email"
     name="email"
    placeholder = "userPassword"
    value={email}
    onChange={onInputChange}

     />

    <br></br>
    <br></br>
    <input type="password"
     name="password"
    placeholder = "password"
    value={password}
    onChange={onInputChange}

     />
     
     <br></br>
    <br></br>

    <button onClick={Reset}>Reset</button>



    </>
  )
}
