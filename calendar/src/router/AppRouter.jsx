import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { LoginPage } from "../auth/page/LoginPage";
import { CalendarPage } from "../calendar/page/CalendarPage";
import { getEnv } from "../helpers";

export const AppRouter = () => {
  const authStatus = "not-authenticated";

  console.log(getEnv("REACT_APP_API_URL"));

  return (
    <Routes>
      {/*Validar si estoy autenticado*/}

      {authStatus === "not-authenticated" ? (
        <Route path='/auth/*' element={<LoginPage />} />
      ) : (
        <Route path='/*' element={<CalendarPage />} />
      )}

      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
