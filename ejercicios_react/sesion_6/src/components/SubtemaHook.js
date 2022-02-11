import React from "react";
import {useParams} from "react-router-dom"

const SubtemaHook = () => {

    const {Subtema} = useParams();

    return(
        <div>
            <h1>{Subtema}</h1>
        </div>
    )
}

export default SubtemaHook