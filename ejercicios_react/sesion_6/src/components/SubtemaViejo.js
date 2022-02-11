import React from "react";
import {useParams} from "react-router-dom"


const SubtemaViejo = () => {
    const {Subtema} = useParams();


    return(
        <div>
            <h1>{Subtema}</h1>
        </div>
    )
}

export default SubtemaViejo