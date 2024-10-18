import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensagem from './components/Mensagem'

const App = () => {
  const usuarioAutenticado = true;
  return(
    <>
    <Mensagem autenticado={usuarioAutenticado}/>
    </>
  );

};

export default App
