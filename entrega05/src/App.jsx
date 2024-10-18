import React from 'react'
import EstudanteMensagem from './components/EstudanteMensagem'
import './App.css'

function App() {


  return (
    <>
     <h1>Exemplo de Componente</h1>
     <EstudanteMensagem esstudante = {true}/>
     <EstudanteMensagem esstudante = {false}/>
    </>
  );
}

export default App
