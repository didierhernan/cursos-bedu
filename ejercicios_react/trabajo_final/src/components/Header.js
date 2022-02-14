import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'
import { ROUTES } from '../helpers/Constants';

import HomeIcon from '@mui/icons-material/Home';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import BuildIcon from '@mui/icons-material/Build';
import Logo from '../resources/logo-ciclismo.png';

const Header = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} 
            spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center"
            alignItems="center">
            <Box sx={{ width: 530, alignContent: 'center' }}>
                <div align="center"><img src={Logo} alt="Logo"/></div>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >

                    <BottomNavigationAction
                        component={Link}
                        to={ROUTES.HOME}
                        label="Inicio" icon={<HomeIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to={ROUTES.TOPIC_RUTA}
                        label="Ciclismo de Ruta" icon={<DirectionsBikeIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to={ROUTES.TOPIC_MTB}
                        label="Ciclismo MTB" icon={<PedalBikeIcon />}
                    />
                    <BottomNavigationAction
                        component={Link}
                        to={ROUTES.TOPIC_TOOLS}
                        label="Herramientas" icon={<BuildIcon />}
                    />
                </BottomNavigation>
            </Box>
        </Stack>
    );
};

export default Header;
