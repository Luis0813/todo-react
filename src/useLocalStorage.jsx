import { useEffect, useState } from "react";

export const useLocalStorage = ( itemName, initialValue) => {

  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

    useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem=localStorage.getItem(itemName);
          let valueStorage;
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue))
              valueStorage =initialValue
            }else{
              valueStorage= JSON.parse(localStorageItem)
              setItem(valueStorage)
            } 
            setLoading(false)
        } catch (error) {
            setError(error)
        }
      },2000);
      
    }, [])
  
  const saveItem= (newItem)=>{
    localStorage.setItem( itemName, JSON.stringify(newItem))
     setItem(newItem)
    
  }
  return {item,saveItem, loading, error}
  
}

  