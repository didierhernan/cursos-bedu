import React from "react";
import PropTypes from "react";

const Boton = (props) =>{
    return (
        <div>
            <button onClick={props.handleClick}>
                El contador con Hook useState esta en {props.texto}
            </button>
        </div>
    )
}

Boton.propTypes = {
    texto: PropTypes.string,
    handleClick: PropTypes.func
}

export default Boton