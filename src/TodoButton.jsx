
export const TodoButton = ({agregarTarea, nuevaTarea}) => {

  return (
    <div className="content-button">
                 <button id="btnTarea" onClick={agregarTarea}>agregar</button>
           <input type="text" className="input-tarea"  id="inputtarea" placeholder="Nueva Tarea"/>

           <label htmlFor="inputTarea" className="btn btn1">
               <input type="checkbox" name="inputTarea" id="inputTarea" className="ocultar" onClick={nuevaTarea}/>+
           </label>           
    </div>
  )
}
