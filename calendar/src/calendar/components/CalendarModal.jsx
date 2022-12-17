import React, { useState } from 'react'
import Modal from 'react-modal';
import {addHours, differenceInSeconds} from 'date-fns'
import DatePicker,{registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }; 
  Modal.setAppElement('#root');

export const CalendarModal = () => {


  const [isOpe, setisOpe] = useState(true)
  


 const oncloseModal = ()=>{
  setisOpe(false);
 }

 const onSumit = (e)=>{
  e.preventDefault();
  const difference = differenceInSeconds(formValue.end, formValue.star);
if(isNaN(difference) || difference <= 0){
 alert("Error de fecha")
  return;
}
 }

 const [formValue, setformValue] = useState({
  title: 'Garber',
  notes: 'Todos el dia',
  star: new Date(),
  end: addHours (new Date(), 2)
})


const onInputChaged = ({target}) =>{
setformValue ({
  ...formValue,
  [target.name]:target.value
})
}

const onDateChanget = (event,changing)=>{
setformValue({
  ...formValue,
  [changing]: event
})
}

  return (
    <Modal
    isOpen = {isOpe}
   
        onRequestClose={oncloseModal}
        style={customStyles}
        className = "modal"
        overlayClassName = "modal-fondo"
        closeTimeoutMS = {200}
       
    >

     <h1> Nuevo evento </h1>
     <hr />
    <form className="container" onSubmit={onSumit}>

    <div className="form-group mb-2">
        <label>Fecha y hora inicio</label>
        <DatePicker
        selected={formValue.star}
        onChange = {(event)=> onDateChanget(event,'start')}
        className = "form-control"
        dateFormat="Pp"
        showTimeSelect
        locale="es"
        timeCaption='Hora'
        />
    </div>

    <div className="form-group mb-2">
        <label>Fecha y hora fin</label>
        <DatePicker
        minDate={formValue.star}
        selected={formValue.end}
        onChange = {(event)=> onDateChanget(event,'end')}
        className = "form-control"
        dateFormat="Pp"
        showTimeSelect
        locale="es"
        imeCaption='Hora'
        />
    </div>

    <hr />
    <div className="form-group mb-2">
        <label>Titulo y notas</label>
        <input 
            type="text" 
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValue.title}
            onChange= {onInputChaged}
        />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
    </div>

    <div className="form-group mb-2">
        <textarea 
            type="text" 
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValue.note}
            onChange= {onInputChaged}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
    </div>

    <button
        type="submit"
        className="btn btn-outline-primary btn-block"
    >
        <i className="far fa-save"></i>
        <span> Guardar</span>
    </button>

        </form>
       
    </Modal>
  )
}
