import { useDispatch, useSelector } from "react-redux";
import { onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const { event, activeEvent } = useSelector((state) => state.caledar);

  return {
    //* Propiedades
    event,
    activeEvent,
    //*Metodos
    setActiveEvent,
  };
};
