import React from "react";
import BotonOperaciones from "./BotonOperaciones"

const FormOperaciones = () => {

    const [contador, setState] = React.useState(1)

    const sumar = () => {
         setState(contador + 1)
    }

    const restar = () => {
        setState(contador - 1)
    }

    return (
        <div>
            <BotonOperaciones operaciones={sumar} texto="Sumar (pa arriba)" />
            &nbsp;Resultado: &nbsp;{contador} &nbsp;
            <BotonOperaciones operaciones={restar} texto="Restar (pa abajo" />
        </div>
    )

}

export default FormOperaciones