import { useReducer } from "react"
import { TodoAdd } from "./components/TodoAdd"
import { TodoList } from "./components/TodoList"
import { todoRedecer } from "./todoRedecer"


export const TodoApp = () => {
  

    //estados inicial
    const initialState = [
        
        {
        id: new Date().getTime(),
        description: 'Hacer tarea',
        done: false
    },
    {
        id: new Date().getTime(),
        description: 'Hacer comprar',
        done: false
    },


]



 
    const [todos, dispatch] = useReducer(todoRedecer, initialState)

  return (
  <>
  <h1>TodoApp</h1>
  
   <TodoList todos={todos} />
<hr></hr>
<TodoAdd />
  </>
  )
}
