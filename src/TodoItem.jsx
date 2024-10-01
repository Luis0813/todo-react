
export const TodoItem = ({text, onCompleted, deleteTodo}) => {
  
  return (
    <>
        <li className="tarea-pendiente" id="tareaPendiente">
          <div className="iconos">
            <span className="icon1" onClick={onCompleted}>✔️</span>
            <p>{text}</p>
          </div>
          <span className="icon2" onClick={deleteTodo}>❌</span>
        </li>
    </>
  )
}
