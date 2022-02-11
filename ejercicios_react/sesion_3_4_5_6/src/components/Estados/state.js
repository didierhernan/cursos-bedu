import React, { Component } from "react";

class ClockUsingClass extends Component {

    //Ciclo de vida
    constructor(props) {
        super(props);
        //estado inicial
        this.state = {
            date: new Date(),
        };
    }

    componentDidMount() {
        //Modifico mi estado - estructura o funcion para modificar el estado
        //Tengo la información
        this.time = setInterval(() => {
            this.changeTime()
        }, 1000)

    }

    changeTime() {
        this.setState({date: new Date()})
    }

    componentWillUnmount() {
        //Limpio la información o estado fallecido
        clearInterval(this.state)
    }

    render() {
        return (
            <>
                <div>Hola Mundo desde una componente clase</div>
                <div>
                    <h1>La hora es : {this.state.date.toLocaleTimeString()}</h1>
                </div>
            </>
        )
    }
}

export default ClockUsingClass