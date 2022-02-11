import React, { useState } from 'react';

// Renderizado condicional

// Directa
// Ternaria
// Por funciona


const RenderizadoCondicional = () => {
    const [mostrarUsuarios, setMostrarUsuarios] = useState(true)

    const componente = <span>Hola Mundo!!</span>
    const componente2 = <span>Hola Universo!!</span>

    const renderizarUsuarios = () => {
        if (mostrarUsuarios)
            return componente
        return componente2

    }

    return (
        <>
            {/* 
            // Directa
            {mostrarUsuarios && componente} */}

            {/* Ternaria
            {mostrarUsuarios ? componente : componente2} */}

            {/*Por funcion*/}
            {renderizarUsuarios()}
        </>
    )
}

export default RenderizadoCondicional