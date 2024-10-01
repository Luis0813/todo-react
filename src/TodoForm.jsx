import React, { useContext } from 'react'
import './styles/TodoForm.css'
import { TodoContext } from './TodoContext/TodoContext'
export const TodoForm = () => {
    const {tareaLista,cancelTarea} = useContext(TodoContext)
  return (
    <form className='form-container'>
        <div className='contenedor'>
         
            <label htmlFor="textarea" className='label-agregar'>Crear Todo</label>
            <textarea  name="textarea" id="textarea" className='Textarea'></textarea>
     
            <div className="buttons">
                <button onClick={tareaLista}>Agragar</button>
                <button onClick={cancelTarea}>Cancelar</button>
            </div>
        </div>
    </form>
  )
}
