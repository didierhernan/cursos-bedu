import React from "react";

const BotonOperaciones = (props) => {

    return (
            <button onClick={props.operaciones}>{props.texto}</button>
    )
}

export default BotonOperaciones