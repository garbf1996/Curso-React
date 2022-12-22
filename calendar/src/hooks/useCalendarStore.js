import { useDispatch, useSelector } from "react-redux";

export const useCalendarStore = () => {
  const dispatch = useDispatch();

  const { event, activeEvent } = useSelector((state) => state.caledar);

  return {
    event,
    activeEvent,
  };
};
