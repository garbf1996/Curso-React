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
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: llegar al backend

    try {
      // Todo bien
      if (calendarEvent.id) {
        // Actualizando
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }

      // Creando
      const { data } = await calendarApi.post("/events", calendarEvent);

      console.log({ data });
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    } catch (error) {
      Swal.fire("Error de guadar", error.response.data.msg, "error");
    }
  };

  const startDeletingEvent = async () => {
    // Todo: Llegar al backend

    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      Swal.fire("Error de borrar", error.response.data.msg, "error");
    }
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
