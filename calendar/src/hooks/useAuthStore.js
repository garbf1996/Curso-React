import { useDispatch, useSelector } from "react-redux";
import { calendarApi } from "../api";
import { clearError, onChecking, onLogout } from "../store/auth/authSlice";
import { onLogin } from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessages } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginStar = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      //? Llamada a la api para obtener el token y el usuario
      const { data } = await calendarApi.post("/auth", { email, password });
      console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name: data.user, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Error al autenticar"));
      setTimeout(() => {
        dispatch(clearError());
      }, 10);
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
