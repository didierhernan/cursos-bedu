import React from "react";
import NombreCFH from "./NombreCFH";

const FormListCFH = () => {

    const [state, setState] = React.useState({
        nombre: '',
        mensaje: '',
        listaNombres: ["Bedu"],
    })

    const didUpdate = () => {
        setState({
            ...state,
            mensaje: `Longitud de la lista es: ${state.listaNombres.length}`
        })
    }

    React.useEffect(didUpdate,[state.listaNombres])

    const handleInputChange = (event) => {
        setState({
            ...state,
            nombre: event.target.value
        })
    }

    const handleClick = () => {
        const nombreEnEstado = state.nombre
        if (!nombreEnEstado) return;

        const listaActualizada = [
            ...state.listaNombres,
            nombreEnEstado
        ]

        setState({
            nombre: '',
            listaNombres: listaActualizada
        })
    }

    const borrarNombreDeLista = (key) => {
        const tempLista = [...state.listaNombres]
        tempLista.splice(key, 1)

        setState({
            listaNombres: tempLista
        })
    }

    return (
        <div>
            {state.mensaje}
            <br />
            <input value={state.nombre} onChange={handleInputChange} />
            <button onClick={handleClick}>Agregar</button>
            <br />
            Lista de nombres:
            <ul>
                {state.listaNombres.map((nmbr, key) => (
                    <li key={key}>
                        <NombreCFH nombre={nmbr}
                            borrarNombreDeLista={() => borrarNombreDeLista (key)} />
                    </li>
                ))}

            </ul>
        </div>
    )

}

export default FormListCFH