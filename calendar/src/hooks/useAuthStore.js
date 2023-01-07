import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { onChecking, onLogin, onLogout, clearErrorMessage } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessages } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await calendarApi.post("/auth", { email, password });
      localStorage.setItem("token", data.toke);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Credenciales incorreto"));

      setTimeout(() => {
        dispatch(clearErrorMessage);
      }, 10);
    }
  };

  return {
    //* Propiedades
    status,
    user,
    errorMessages,
    //*Metodos
    startLogin,
  };
};
