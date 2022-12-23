import { useCalendarStore, useUiStore } from "../../hooks";

export const FabDelete = () => {
  const { deleEvent, hasEventSelect } = useCalendarStore();
  const EventDelete = () => {
    deleEvent();
  };

  return (
    <button
      onClick={EventDelete}
      className='btn btn-danger fab-danger '
      style={{ display: hasEventSelect ? "" : "none" }}
    >
      <li className='fas fa-trash-alt'></li>
    </button>
  );
};
