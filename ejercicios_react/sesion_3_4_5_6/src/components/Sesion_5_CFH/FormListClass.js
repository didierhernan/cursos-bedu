import React from "react";
import Nombre from "./Nombre";

class FormListClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            mensaje: '',
            listaNombres: ['Bedu']
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.listaNombres !== prevState.listaNombres)
            this.setState({
                mensaje: ` Longitud de la lista es: ${this.state.listaNombres.length}`
            })
    }

    // En los componentes de clase state inicia el estado y tambien retiene 
    //el valor modificado por el set state que es modificador del estado 
    // Modificar el estado.  //DidMount WillUnmount DidUpdate

    // Los ciclos de vida

    handleInputChange = (event) => {
        this.setState({
            nombre: event.target.value
        })

    }

    handleClick = () => {
        const nombreEnEstado = this.state.nombre
        if (!nombreEnEstado) return;

        const listaActualizada = [
            ...this.state.listaNombres,
            nombreEnEstado
        ]

        this.setState({
            nombre: '',
            listaNombres: listaActualizada
        })

    }



    // Validar si el nombre existe (que no este vacio )
    // Añadir el nombre a la lista de nombres.
    //Actualizar el estado (añadir nombre a la lista i limpiar el nombre)

    borrarNombreDeLista = (key) => {
        const tempLista = [...this.state.listaNombres]
        tempLista.splice(key, 1)

        this.setState({
            listaNombres: tempLista
        })
    }


    render() {
        return (
            <div>
                {this.state.mensaje}
                <br />
                <input value={this.state.nombre} onChange={this.handleInputChange} />
                <button onClick={this.handleClick}>Agregar</button>
                <br />
                Lista de nombres:
                <ul>
                    {this.state.listaNombres.map((nmbr, key) => (
                        <li key={key}>
                            <Nombre nombre={nmbr}
                                borrarNombreDeLista={this.borrarNombreDeLista} />
                        </li>
                    ))}

                </ul>
            </div>
        )
    }

}

export default FormListClass