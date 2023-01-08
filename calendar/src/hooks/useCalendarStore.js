import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";

import { calendarApi } from "../api";
import { convertDataEvents } from "../helpers";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backend

    // Todo bien
    if (calendarEvent._id) {
      // Actualizando
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // Creando
      const { data } = await calendarApi.post("/events", calendarEvent);

      console.log({ data });
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };

  const startDeletingEvent = () => {
    // Todo: Llegar al backend

    dispatch(onDeleteEvent());
  };

  const starLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/events");
      const eventos = convertDataEvents(data.events);
      dispatch(onLoadEvents(eventos));
    } catch (error) {
      console.log("Error cargando events");
      console.log(error);
    }
  };

  return {
    //* Propiedades
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,

    //* Métodos
    startDeletingEvent,
    setActiveEvent,
    startSavingEvent,
    starLoadingEvents,
  };
};
