import React, { useContext } from 'react'
import { TodoButton } from "../TodoButton"
import { TodoCounter } from "../TodoCounter"
import { TodoItem } from "../TodoItem"
import { TodoList } from "../TodoList"
import { TodoSearch } from "../TodoSearch"
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoLoading } from "../Loading/TodoLoading";
import { PrimerTodo } from "../Loading/PrimerTodo";
import { TodoError } from "../Loading/TodoError";
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";

export const AppInterfaz = () => {
  const{
    loading,
    error,
    completedTodo,  
    filtrarTodos,
    completeTodo,
    deleteTodo,
    todos,
    openModal,
    setopenModal, 
  }= useContext(TodoContext)
  return (
    <>

    <TodoCounter/>

    <div className="contenedor-search">
        <TodoSearch/> 
    </div>
          
            <TodoList>
              {loading && <TodoLoading/>}
              {error && <TodoError/>}
              {(!loading && todos.length == 0) && <PrimerTodo/>}

              {filtrarTodos.map(item =>(
                <TodoItem
                text={item.text} 
                key={item.text}
                onCompleted={()=>completeTodo(item.text)}
                deleteTodo={()=>deleteTodo(item.text)}
                />
              ))}
          </TodoList>
    <TodoButton/>
    {openModal && (
      <Modal>
        <TodoForm/>
      </Modal>
    )}
  </>
  )
}
