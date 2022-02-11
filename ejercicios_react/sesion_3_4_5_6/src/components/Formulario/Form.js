import React from "react";
// Formulario para una escuela
// Formulario para dar de alta a profesores y Alumnos nombre (cantidad de cada caso)

const Form = (props) => {

    const [nombre, setNombre] = React.useState('')
    const [state, setstate] = React.useState(
        {
            profesores: 0,
            alumnos: 0
        }
    )

    const editarNombre = (event) => { setNombre(event.target.value) }

    const editarState = (atributo) => (event) => setstate({
        ...state,
        [atributo]: event.target.value
    })


    //####### RETO
    const [states, setNombres] = React.useState({
        nombre: '',
        apellido: [
            '', // Materno
            '' // Paterno
        ]
    })

    const editarNombres = (atributo) => (event) => setNombres({
        ...states,
        [atributo]: event.target.value
    })

    const editarApellidos = (key) => (event) => {
        const tempApellidos = [...states.apellido];
        tempApellidos[key] = event.target.value

        setNombres({
            ...states,
            apellido: tempApellidos
        })
    }


    return (
        <>
        <div>
        <br/><br/>
            ----RETO NOMBRE - APELLIDOS PATERNO/MATERNO----
            <br/>
        <input onChange={editarNombres('nombre')}/>
        <input onChange={editarApellidos(0)}/>
        <input onChange={editarApellidos(1)}/>
        <br/>
        Mi nombre es:
        <br/>
        <b>{states.nombre} {states.apellido[0]} {states.apellido[1]}</b>
        </div>

        <div className="margen">
            Formulario Alumnos y Profesores
            <br /><br />
            {/*nombre profesor/Alumno*/}
            Nombre:
            <input onChange={editarNombre} />
            {nombre}
            <br /><br />
            # Profesores
            {/*numero de profesores*/}
            <input type="number" onChange={editarState('profesores')} />
            {state.profesores}
            <br /><br />
            # Alumnos
            {/*numero de Alumnos*/}
            <input type="number" onChange={editarState('alumnos')} />
            {state.alumnos}
        </div>
        </>
    )
}

export default Form;