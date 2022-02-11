import React from 'react'
import Luz from './Luz'

const Foco = (props) =>{
    return(
        <div className="foco">
           {props.tamano}
            <Luz/>
        </div>
    )
}

export default Foco