import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

const tempEvent = {
  title: "Praticar React",
  note: "Todo dias",
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: "#fafafa",
  user: {
    _id: "123",
    name: "Garber",
  },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    event: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    increment: (state /* action */) => {
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = calendarSlice.actions;
