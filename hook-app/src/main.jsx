import React from 'react'
import ReactDOM from 'react-dom/client'
import { FormWithCustomHook } from './02-userEffect/FormWithCustomHook'
//import { SimpleForm } from './02-userEffect/SimpleForm'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
//import {HooksApp} from './HooksApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FormWithCustomHook />
  </React.StrictMode>
)
