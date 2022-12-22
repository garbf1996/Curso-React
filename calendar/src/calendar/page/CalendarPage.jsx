import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { localizer, getMessagesES } from "../../helpers/";
import { CalendarEvent } from "../components/CalendarEvent";
import { CalendarModal } from "../components/CalendarModal";
import { useUiStore, useCalendarStore } from "../../hooks/";

export const CalendarPage = () => {
  const [lastView, setlastView] = useState(
    localStorage.getItem("lastView") || ""
  );
  //Llamado hook en para abrir ventana modal
  const { openDateModal } = useUiStore();
  //Llamado hook para los eventos
  const { event, setActiveEvent } = useCalendarStore();

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    //console.log({dobleClick: event});
    //Abriendo modal con doble click
    openDateModal();
  };
  const onselect = (event) => {
    // console.log({ click: event });
    setActiveEvent(event);
  };

  const onViewChaged = (event) => {
    localStorage.setItem("lastView", event);
    setlastView(event);
  };

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={event}
        startAccessor='start'
        endAccessor='end'
        defaultView={lastView}
        style={{ height: "calc( 100vh - 80px )" }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onselect}
        onView={onViewChaged}
      />
      <CalendarModal />
    </>
  );
};
