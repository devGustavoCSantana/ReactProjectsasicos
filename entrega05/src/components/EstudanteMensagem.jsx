import React from "react";

const EstudanteMensagem = ({ estudante }) => {
    return(
        <>
        {estudante ? (
            <p>Voce e um estudante</p>
        ) : (
            <p>Voce não é um estudante</p>
        
        )}
        </>
    );
};
export default EstudanteMensagem