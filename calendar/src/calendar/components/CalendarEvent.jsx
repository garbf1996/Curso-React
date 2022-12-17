import React from 'react'

export const CalendarEvent = ({event,start}) => {

  const {title,user  } = event;
  return (
  <>
  
<strong>{title}</strong>
<br />
<span>Creado: {user.name}</span>
 
  </>
  )
}

