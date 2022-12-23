import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  _id: new Date().getTime(),
  title: "Curso de udemy",
  notes: "Ver curso de React",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Garber Batista",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    event: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    //Agregar nuevo eventos
    onAddNewEvent: (state, { payload }) => {
      state.event.push(payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, { payload }) => {
      state.event = state.event.map((event) => {
        if (event._id === payload) {
          return payload;
        }
        return event;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent } =
  calendarSlice.actions;
