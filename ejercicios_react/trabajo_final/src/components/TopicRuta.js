import React from "react";
import PropTypes from 'prop-types'
import { Link, withRouter } from "react-router-dom"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import EganYNairo from "../resources/eganynairo.jpg"

const TopicRuta = (props) => {

    const {
        match: { url }
    } = props

    return (
        <div>
            <h1 align="center">Ciclismo de ruta</h1>
        <BottomNavigation showLabels>
            <BottomNavigationAction
                component={Link}
                to={{
                    pathname: `${url}/nairo`,
                    state: {
                        className: "ruta-nairo"
                    }
                }}
                label="Nairo Quintana" icon={<DirectionsBikeIcon />}
            />
            <BottomNavigationAction
                component={Link}
                to={{
                    pathname: `${url}/egan`,
                    state: {
                        className: "ruta-egan"
                    }
                }}                
                label="Egan Bernal" icon={<DirectionsBikeIcon />}
            />
            
        </BottomNavigation>
        <img src={EganYNairo} alt="Logo" class="images"/>
        </div>
    )
}

TopicRuta.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}

export default withRouter(TopicRuta)