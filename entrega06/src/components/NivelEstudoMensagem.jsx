import React from "react";

const NivelEstudoMensagem = ({ nivelEstudo}) =>{
    let mensagem;

    if (nivelEstudo === 'iniciado'){
        mensagem = 'Voce esta no inicio dos seus estudos';
    }else if (nivelEstudo === 'intermediario'){
        mensagem = 'voce esta no nivel intermediario.';
    }else if (nivelEstudo === 'avançado'){
        mensagem = 'voce esta no nivel avançado.';
    }else {
        mensagem = 'Nivel de estudo e desconhecido.';
    }
    return (
        <>
        <p>{mensagem}</p>
        </>
    );
};

export default NivelEstudoMensagem