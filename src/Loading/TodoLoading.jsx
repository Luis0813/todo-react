import React from 'react'
import '../styles/Loading.css'

export const TodoLoading = () => {
  return (
        <>
          <div className="container">
            <div className="cargando">
              <div className="pelotas"></div>
              <div className="pelotas"></div>
              <div className="pelotas"></div>
              <span className="texto-cargando">Cargando Todos...</span>
            </div>
          </div>
        </>
)
}
