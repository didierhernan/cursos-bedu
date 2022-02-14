import React from "react";
import { BIOGHRAPHIES } from "../helpers/Constants";
import {useParams, useLocation} from "react-router-dom"

const SubTopicBiografia = (props) => {

    const {subtopic} = useParams();
    const location = useLocation()
    const {className } = location.state

    return(
        <div className={className}>
            <h1>{BIOGHRAPHIES[subtopic].name}</h1>
            <img alt={subtopic} src= {BIOGHRAPHIES[subtopic].photo} />
            <p>{BIOGHRAPHIES[subtopic].bio}</p>            
        </div>
    )
}
export default SubTopicBiografia