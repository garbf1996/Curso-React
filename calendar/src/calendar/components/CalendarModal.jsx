import React, { useMemo, useState, useEffect } from "react";
import Modal from "react-modal";
import { addHours, differenceInSeconds } from "date-fns";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import Swal from "sweetalert2";
import { useUiStore, useCalendarStore } from "../../hooks";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

export const CalendarModal = () => {
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const [formSubmitted, setformSubmitted] = useState(false);
  const { activeEvent, starSavingEvent } = useCalendarStore();
  const oncloseModal = () => {
    closeDateModal();
  };

  //Validar formulario
  const onSumit = async (e) => {
    e.preventDefault();
    setformSubmitted(true);
    const difference = differenceInSeconds(formValue.end, formValue.start);
    if (isNaN(difference) || difference <= 0) {
      Swal.fire({
        icon: "Error",
        title: "Error",
        text: "Fecha incorrectas",
      });
      return;
    }

    if (formValue.title.length <= 0) return;
    console.log(formValue);
    //Todo:
    await starSavingEvent(formValue);
    closeDateModal();
    setformSubmitted(false);
  };

  const [formValue, setformValue] = useState({
    title: "",
    notes: "",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const titleClass = useMemo(() => {
    if (!formSubmitted) return "";

    return formValue.title.length > 0 ? "" : "is-invalid";
  }, [formValue.title, formSubmitted]);

  useEffect(() => {
    if (activeEvent !== null) {
      setformValue({ ...activeEvent });
    }
  }, [activeEvent]);

  const onInputChaged = ({ target }) => {
    setformValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const onDateChanget = (event, changing) => {
    setformValue({
      ...formValue,
      [changing]: event,
    });
  };

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={oncloseModal}
      style={customStyles}
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className='container' onSubmit={onSumit}>
        <div className='form-group mb-2'>
          <label>Fecha y hora inicio</label>
          <DatePicker
            selected={formValue.start}
            onChange={(event) => onDateChanget(event, "start")}
            className='form-control'
            dateFormat='Pp'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <div className='form-group mb-2'>
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={formValue.star}
            selected={formValue.end}
            onChange={(event) => onDateChanget(event, "end")}
            className='form-control'
            dateFormat='Pp'
            showTimeSelect
            locale='es'
            timeCaption='Hora'
          />
        </div>

        <hr />
        <div className='form-group mb-2'>
          <label>Titulo y notas</label>
          <input
            type='text'
            className={`form-control ${titleClass}`}
            placeholder='Título del evento'
            name='title'
            autoComplete='off'
            value={formValue.title}
            onChange={onInputChaged}
          />
          <small id='emailHelp' className='form-text text-muted'>
            Una descripción corta
          </small>
        </div>

        <div className='form-group mb-2'>
          <textarea
            className='form-control'
            placeholder='Notas'
            name='notes'
            value={formValue.notes}
            onChange={onInputChaged}
          ></textarea>
          <small id='emailHelp' className='form-text text-muted'>
            Información adicional
          </small>
        </div>

        <button type='submit' className='btn btn-outline-primary btn-block'>
          <i className='far fa-save'></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
