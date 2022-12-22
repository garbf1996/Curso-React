import { useDispatch, useSelector } from "react-redux";
import { onAddNewEvent, onSetActiveEvent } from "../store";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const { event, activeEvent } = useSelector((state) => state.caledar);

  const starSavingEvent = async (calendarEvent) => {
    // Todo: llegar al backend
    //Todo bien
    if (calendarEvent._id) {
      //Actualizar eventos
    } else {
      //Creando nuevo eventos
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  return {
    //* Propiedades
    event,
    activeEvent,
    //*Metodos
    setActiveEvent,
    starSavingEvent,
  };
};
