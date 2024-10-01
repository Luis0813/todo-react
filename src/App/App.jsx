import { TodoProvider } from "../TodoContext/TodoContext"
import { AppInterfaz } from "./AppInterfaz"

export const App=() => {
   return (
    <TodoProvider>
         <AppInterfaz/>
     </TodoProvider> 
  )
}

   