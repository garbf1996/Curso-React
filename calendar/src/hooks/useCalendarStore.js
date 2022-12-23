import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";

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
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      //Creando nuevo eventos
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const deleEvent = () => {
    dispatch(onDeleteEvent());
  };

  return {
    //* Propiedades
    event,
    activeEvent,
    hasEventSelect: !!activeEvent,
    //*Metodos
    setActiveEvent,
    starSavingEvent,
    deleEvent,
  };
};
