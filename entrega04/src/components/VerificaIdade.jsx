import React from "react";

const VerificaIdade = ({ idade }) => {
    if(idade >= 18){
        return <h1> Voce é adulto</h1>;
    } else{
        return <h1>Voce é menor de idade</h1>;
    }
};
export default VerificaIdade