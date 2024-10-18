import React from 'react'
import NivelEstudoMensagem from './components/NivelEstudoMensagem'
import './App.css'

function App() {

  return (
    <>
     <h1> Exemplo de Mensagem por Nivel de Estudo</h1>
     <NivelEstudoMensagem nivelEstudo="Iniciado"/>
     <NivelEstudoMensagem nivelEstudo="intermediario"/>
     <NivelEstudoMensagem nivelEstudo="avançado"/>
     <NivelEstudoMensagem nivelEstudo="desconhecido"/>
    </>
  );
}

export default App
