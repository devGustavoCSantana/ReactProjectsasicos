import React from 'react'
import VerificaIdade from './components/VerificaIdade'
import './App.css'


const App = () => {
  const idadeUsuario = 20;


  return (
    <>
     <VerificaIdade idade={idadeUsuario}/>
    </>
  );
};

export default App
