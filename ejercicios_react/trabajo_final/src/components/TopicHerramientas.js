import React from "react";
import PropTypes from 'prop-types'
import {Link, withRouter} from "react-router-dom"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ftp from '../resources/ftp.png';

const TopicHerramientas = (props) => {

    const {
        match:{url}
    } = props

    return(
        <div>
            <h1 align="center">Herramientas</h1>
        <BottomNavigation showLabels>
            

            <BottomNavigationAction
                component={Link}
                to={`${url}/ftp`}
                label="Cálculo FTP" icon={<FavoriteIcon />}
            />
        </BottomNavigation>
        <img src={ftp} alt="Logo" class="images"/>
        </div>

    )
}

TopicHerramientas.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}

export default withRouter(TopicHerramientas)