import React from "react";
import PropTypes from 'prop-types'
import { Link, withRouter } from "react-router-dom"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import Valentina from "../resources/valentina.jpg"

const TopicMTB = (props) => {

    const {
        match: { url }
    } = props

    return (
        <div>
            <h1  align="center">Ciclismo MTB</h1>
            <BottomNavigation showLabels>
                <BottomNavigationAction
                    component={Link}
                    to={{
                        pathname: `${url}/leonardo`,
                        state: {
                            className: "mtb-leonardo"
                        }
                    }}
                    label="Leonardo Paez" icon={<PedalBikeIcon
                    />}
                />
                <BottomNavigationAction
                    component={Link}
                    to={{
                        pathname: `${url}/valentina`,
                        state: {
                            className: "mtb-valentina"
                        }
                    }}
                    label="Valentina Abril" icon={<PedalBikeIcon />}
                />
            </BottomNavigation>
            <img src={Valentina} alt="Logo" class="images"/>
        </div>
    )
}

TopicMTB.propTypes = {
    match: PropTypes.shape({
        url: PropTypes.string
    })
}

export default withRouter(TopicMTB)