import React from "react";
import PropTypes from 'prop-types'
import {Link, withRouter} from "react-router-dom"


const PlanRedux = (props) => {

    const {
        match:{url}
    } = props

    return(
        <div>
            <h1>Redux</h1>
            <Link to={`${url}/reducers`}> Reducers</Link>
            <Link to={`${url}/store`}> Store</Link>            
        </div>
    )
}

PlanRedux.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}

export default withRouter(PlanRedux)