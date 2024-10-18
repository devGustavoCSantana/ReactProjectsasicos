import React from "react";

const Mensagem = ({ autenticado}) =>{
    if(autenticado){
        return <h1>Bem vindo, Usuario</h1>;

    };
    return null; 
};
export default Mensagem