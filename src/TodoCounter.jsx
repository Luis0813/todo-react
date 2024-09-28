
export const TodoCounter = ({completeTodo, tareas }) => {
  console.log(completeTodo)

  return (
    <>
    <h1>Has completado <span>{completeTodo}</span>  de <span>{tareas}</span> todos</h1>
    </>
  )
}