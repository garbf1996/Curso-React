import React from 'react'

export const CalendarEvent = ({event,start}) => {
  console.log(event);
  const {title,user  } = event;
  return (
  <>
  
<strong>{title}</strong>
<br />
<span>Creado: {user.name}</span>
 
  </>
  )
}

