import { useState } from "react"


export const SimpleForm = () => {

 const [formState, setformState] = useState({
    usurio: "garber",
    email:  "garber@gmail.com"
 });

 const {usurio,email}= formState;

   const onInputChange = ({target}) => {
  
    const  {name, value} = target;
    setformState ({
        ...formState,
        [name]:value,
    });
   };

  return (
    <>
    <h1>Formulario Simple</h1>
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
  
    </>
  )
}
