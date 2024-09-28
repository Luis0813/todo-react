import { useState } from "react"
import { AppInterfaz } from "./AppInterfaz"
import { useLocalStorage } from "../useLocalStorage"


export const App=() => {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
    } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setsearchValue] = useState('')
  const completedTodo= todos.filter((todo)=> todo.completed == true     
  )
 
  const filtrarTodos = todos.filter((todo)=>{
     const todoText = todo.text.toLowerCase()
     const searchTodo=searchValue.toLowerCase()
      return todoText.includes(searchTodo)
  })
  const todosTotal = todos.length

  

 const completeTodo = (text)=>{
    const newTodos =[...todos]
    const indexTodos= newTodos.findIndex(
      (todo)=> todo.text == text) 
      newTodos[indexTodos].completed = true
      console.log(newTodos);
      newTodos.filter((todo)=>{
          if (todo.completed == true) {
            tareaPendiente[indexTodos].className = 'tarea-hecha'
          }
      })
      saveTodos(newTodos)
 }
 const deleteTodo =(text)=> {
      const newTodos = [...todos]
      const indexTodo = newTodos.findIndex(
          (todo)=> todo.text==text
         )
        newTodos.splice(indexTodo,1)
  saveTodos(newTodos)
 }
 const nuevaTarea = ()=>{
      if (inputTarea.checked == true) {
          inputtarea.className = 'inputTareaChecked'
          btnTarea.className = 'inputTareaChecked'
      } else if (inputTarea.checked == false) {
        inputtarea.className = 'input-tarea'
        btnTarea.className = 'input-tarea'
      }
}

   return (
  <AppInterfaz
  loading={loading}
  error={error}
  completedTodo={completedTodo}
  todosTotal={todosTotal}
  searchValue={searchValue}
  setsearchValue={setsearchValue}
  filtrarTodos={filtrarTodos}
  completeTodo={completeTodo}
  deleteTodo={deleteTodo}
  nuevaTarea={nuevaTarea}
  />
  )
}

   