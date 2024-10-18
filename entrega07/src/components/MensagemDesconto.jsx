import React from "react";

const MensagemDesconto = ({ temDesconto }) => {
    return(
        <>
        <p>{temDesconto ? 'Desconto aplicado' : 'Sem desconto'}</p>
        </>
    );
};
export default MensagemDesconto