import React from "react";
import "./LoginPage.css";
import { useForm } from "../../hooks/userForm";

const loginFormFields = {
  loginEmail: "",
  loginPassword: "",
};

const registerFormFields = {
  registerName: "",
  registerEmail: "",
  registerPassword: "",
  registerPassword2: "",
};

export const LoginPage = () => {
  const { loginEmail, loginPassword, onInputChange } = useForm(loginFormFields);

  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPassword2,
    onInputChange: onInputRegister,
  } = useForm(registerFormFields);

  const loginSubmit = (e) => {
    e.preventDefault();
  };

  const registreLogin = (e) => {
    e.preventDefault();

    if (registerPassword !== registerPassword2) {
      return alert("Las contraseñas no coinciden");
    }
  };

  return (
    <>
      <div className='container login-container'>
        <div className='row'>
          <div className='col-md-6 login-form-1'>
            <h3>Ingreso</h3>
            <form onSubmit={loginSubmit}>
              <div className='form-group mb-2'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Correo'
                  name='loginEmail'
                  value={loginEmail}
                  onChange={onInputChange}
                />
              </div>
              <div className='form-group mb-2'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Contraseña'
                  name='loginPassword'
                  value={loginPassword}
                  onChange={onInputChange}
                />
              </div>
              <div className='form-group mb-2'>
                <input type='submit' className='btnSubmit' value='Login' />
              </div>
            </form>
          </div>

          <div className='col-md-6 login-form-2'>
            <h3>Registro</h3>
            <form onSubmit={registreLogin}>
              <div className='form-group mb-2'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre'
                  name='registerName'
                  value={registerName}
                  onChange={onInputRegister}
                />
              </div>
              <div className='form-group mb-2'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Correo'
                  name='registerEmail'
                  value={registerEmail}
                  onChange={onInputRegister}
                />
              </div>
              <div className='form-group mb-2'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Contraseña'
                  name='registerPassword'
                  value={registerPassword}
                  onChange={onInputRegister}
                />
              </div>

              <div className='form-group mb-2'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Repita la contraseña'
                  name='registerPassword2'
                  value={registerPassword2}
                  onChange={onInputRegister}
                />
              </div>

              <div className='form-group mb-2'>
                <input
                  type='submit'
                  className='btnSubmit'
                  value='Crear cuenta'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
