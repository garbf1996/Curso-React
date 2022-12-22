import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks";

export const FabAddNew = () => {
  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const getModal = () => {
    //Limpar nota
    setActiveEvent({
      title: "",
      notes: "",
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: "#fafafa",
      user: {
        _id: "123",
        name: "Garber Batista",
      },
    });
    openDateModal();
  };

  return (
    <button onClick={getModal} className='btn btn-primary fab'>
      <li className='fas fa-plus'></li>
    </button>
  );
};
