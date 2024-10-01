import { useContext } from "react"
import { TodoContext } from "./TodoContext/TodoContext"

export const TodoButton = () => {
 const {agregarTarea} = useContext(TodoContext)  

  return (
    <div className="content-button">
           <label htmlFor="inputTarea" className="btn btn1">
               <input type="checkbox" name="inputTarea" id="inputTarea" className="ocultar" onClick={agregarTarea}/>+
           </label>           
    </div>
  )
}
