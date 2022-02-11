import React, { useState } from "react";
import Boton from "../Sesion_4_ContadorHooks/Boton";

// Contador con hooks useState()

const Contador = () => {
    const [contador, setContador] = useState(0)
    //     stateinicial   setState

    const handleClick = () => {
        setContador(contador + 1)
    }


    return (
        <>
            <div>
                <Boton
                    texto={contador}
                    handleClick={handleClick}
                />
            </div>
        </>
    )
}

export default Contador