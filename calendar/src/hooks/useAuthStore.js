import { useDispatch, useSelector } from "react-redux";

import { calendarApi } from "../api";

export const useAuthStore = () => {
  const { status, user, errorMessages } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginStar = async ({ email, password }) => {
    try {
      //? Llamada a la api para obtener el token y el usuario
      const resp = await calendarApi.post("/auth", { email, password });
      console.log({ resp });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //* Prppiedades
    status,
    user,
    errorMessages,
    //*Metodos
    loginStar,
  };
};
