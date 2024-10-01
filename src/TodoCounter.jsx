import { useContext } from "react"
import { TodoContext } from "./TodoContext/TodoContext"

export const TodoCounter = () => {

      const { todosTotal, completedTodo} = useContext(TodoContext)

  return (
    <>
    <h1>Has completado <span>{completedTodo.length}</span>  de <span>{todosTotal}</span> todos</h1>
    </>
  )
}