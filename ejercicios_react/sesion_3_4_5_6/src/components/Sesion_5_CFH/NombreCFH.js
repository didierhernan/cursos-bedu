import React from "react";
import PropTypes from "prop-types"

const NombreCFH = (props) => {
    const didMount = () =>{
        console.log('Te damos la bienvenida ' + props.nombre);
    }

    React.useEffect(didMount,[])

    const willUnmount = () => {
        return ()=>{
            console.log('Adios');
        }
    }

    React.useEffect(willUnmount,[])

    return (
        <div>
            {props.nombre}
            <button onClick={props.borrarNombreDeLista}>x</button>
        </div>
    )
}

NombreCFH.propTypes = {
    nombre: PropTypes.string.isRequired,
    borrarNombreDeLista: PropTypes.func.isRequired
}

export default NombreCFH