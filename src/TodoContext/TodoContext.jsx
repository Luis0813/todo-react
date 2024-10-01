
import React, { createContext, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";

const TodoContext  = createContext()

const TodoProvider =({children})=>{
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
        } = useLocalStorage('TODOS_V1', [])
      const [searchValue, setsearchValue] = useState('')
      const [openModal, setOpenModal] = useState(false)

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

    const agregarTarea= ()=> {
      setOpenModal(true)
    }
    const tareaLista =(e) => {
      if (textarea.value == '') {
        e.preventDefault()
        return
      }else{
        const newTodos = [...todos,{
          text:textarea.value,
          completed:false
        }] 
        console.log(newTodos);
      saveTodos(newTodos)
      }
      e.preventDefault()
    }
    const cancelTarea =(e)=> {
      setOpenModal(false)
      e.preventDefault()
    }





    return(
    <TodoContext.Provider value ={{
        todos,
        loading,
        error,  
        completedTodo,
        todosTotal,
        searchValue,
        setsearchValue,
        filtrarTodos, 
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        agregarTarea,
        tareaLista,
        cancelTarea
  }}>
    {children}
    </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider}