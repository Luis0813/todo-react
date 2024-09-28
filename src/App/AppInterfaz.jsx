import React from 'react'
import { TodoButton } from "../TodoButton"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"
import { TodoLoading } from '../Loading/TodoLoading' 

export const AppInterfaz = ({
    loading,
    error,  
    completedTodo,
    todosTotal,
    searchValue,
    setsearchValue,
    filtrarTodos,
    completeTodo,
    deleteTodo,
    nuevaTarea,
   
}) => {
  return (
    <>
    <TodoCounter completeTodo={completedTodo.length} tareas={todosTotal}/>
    <div className="contenedor-search">
        <TodoSearch searchValue={searchValue} setsearchValue={setsearchValue}/> 
    </div>

    <TodoList>
            {loading && <TodoLoading/>}
            {error && <TodoError/>}
            {(!loading && completeTodo.length == 0) && <PrimerTodo/>}

       {filtrarTodos.map(item =>(
          <TodoItem
          text={item.text} 
          key={item.text}
          onCompleted={()=>completeTodo(item.text)}
          deleteTodo={()=>deleteTodo(item.text)}
          />
       ))}
    </TodoList>
    <TodoButton nuevaTarea={nuevaTarea}/>
  </>
  )
}
