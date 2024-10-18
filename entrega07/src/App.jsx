import React from 'react'
import MensagemDesconto from './components/MensagemDesconto'
import './App.css'

function App() {

  return (
    <>
     <h1>Exemplo de desconto</h1>
     <MensagemDesconto temDesconto={true}/>
     <MensagemDesconto temDesconto={false}/>
    </>
  )
}

export default App
