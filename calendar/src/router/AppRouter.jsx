import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import {LoginPage} from '../auth/page/LoginPage'
import { CalendarPage } from '../calendar/page/CalendarPage';


export const AppRouter = () => {

    const authStatus = 'authenticated';
  
    
  return (

    <Routes> 
         {/*Validar si estoy autenticado*/}
       
       {
        (authStatus === 'not-authenticated')
        ?<Route path='/auth/*' element ={<LoginPage/>} />
        :<Route path='/*' element ={<CalendarPage/>} />
        } 
       

       <Route path='/*' element ={<Navigate to="/auth/login" />} /> 
    </Routes>
  )
}
