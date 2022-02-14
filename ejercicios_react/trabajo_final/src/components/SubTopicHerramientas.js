import React from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SubTopicHerramientas = () => {

    const [datos, setDatos] = React.useState({
        age: '',
        fcR: '',
        fcEffort: {
            _50: '',
            _60: '',
            _70: '',
            _80: '',
            _90: '',
            _100: '',
        },
    })

    const handleInputChangeAge = (event) => {
        setDatos({
            ...datos,
            age: event.target.value
        })
    }

    const handleInputChangefcR = (event) => {
        setDatos({
            ...datos,
            fcR: event.target.value
        })
    }

    const calcular = () => {
        setDatos({
            ...datos,
            fcEffort: {
                _50: ecuation(0.5),
                _60: ecuation(0.6),
                _70: ecuation(0.7),
                _80: ecuation(0.8),
                _90: ecuation(0.9),
                _100: ecuation(1),
            },
        })
    }

    const limpiar = () => {
        setDatos({
            age: '',
            fcR: '',
            fcEffort: {
                _50: '',
                _60: '',
                _70: '',
                _80: '',
                _90: '',
                _100: '',
            }
        })
    }

    const ecuation = (fcTarget) => {
        return (Math.round((220 - datos.age - datos.fcR) * fcTarget) + Number(datos.fcR))
    }

    return (
        <div>
            <Container fixed>A continuación puedes incluir tu edad y tus pulsaciones por minuto cuando estas en reposo.
                Esto te calculará los intervalos minimos y máximos de frecuencia por minuto en cada zona de entrenamiento
            </Container>
            <Stack direction={{ xs: 'column', sm: 'row' }} mb={2}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent="center"
                alignItems="center">
                <Item>
                    <TextField style={{ width: 100 }} type="number" size="small" wd={1} label="Edad:" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }} value={datos.age} color="secondary" onChange={handleInputChangeAge} />
                </Item>
                <Item>
                    <TextField style={{ width: 150 }} type="number" size="small" label="Pulsaciones en reposo:" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        ),
                    }} color="success" value={datos.fcR} onChange={handleInputChangefcR} /></Item>

            </Stack>
            <hr />
            <Stack direction="row" spacing={4} justifyContent="center"
                alignItems="flex-start">
                <Button onClick={calcular} variant="contained" endIcon={<SendIcon />} size="small">Calcular</Button>
                <Button onClick={limpiar} variant="outlined" startIcon={<CleaningServicesIcon />} size="small" color="secondary" >Limpiar</Button>
            </Stack>            
            <hr />
            <Stack spacing={1} justifyContent="flex-start"
                alignItems="center" mb={2}>
                <Item style={{ color:"gray"}}>Z1
                    <TextField style={{ width: 110,margin: 5 }} size="small" label="50%" value={datos.fcEffort._50} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} />
                    <TextField style={{ width: 110,margin: 5 }}  size="small" label="60%" value={datos.fcEffort._60} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} />
                    Entrenamiento
                </Item>
                <Item style={{ color:"blue"}}>Z2
                    <TextField label="60% " style={{ width: 110,margin: 5 }} size="small" value={datos.fcEffort._60} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} />
                    <TextField label="70%" style={{ width: 110,margin: 5 }} size="small" value={datos.fcEffort._70} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} />
                    Esfuerzo Ligero
                </Item>
                <Item style={{ color:"yellow"}}>Z3 
                    <TextField label="70%" style={{ width: 110,margin: 5 }} size="small" value={datos.fcEffort._70} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} /> 
                    <TextField label="80%" style={{ width: 110,margin: 5 }} size="small" value={datos.fcEffort._80} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} /> 
                    Esfuerzo moderado
                    </Item>
                <Item style={{ color:"orange"}}>Z4 
                    <TextField label="80%" style={{ width: 110,margin: 5 }} size="small" value={datos.fcEffort._80} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} /> 
                    <TextField label="90%" style={{ width: 110,margin: 5 }} size="small" value={datos.fcEffort._90} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} /> 
                    Esfuerzo alto
                    </Item>
                <Item style={{ color:"red"}}>Z5 
                    <TextField label="90%" style={{ width: 110,margin: 5 }} size="small" value={datos.fcEffort._90} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} /> 
                    <TextField label="100%" style={{ width: 110,margin: 5 }} size="small" value={datos.fcEffort._100} InputProps={{
                        readOnly: true, startAdornment: (
                            <InputAdornment position="start">
                                <FavoriteIcon />
                            </InputAdornment>
                        )
                    }} /> 
                    Esfuerzo máximo
                    </Item>
            </Stack>

        </div>
    )

}

export default SubTopicHerramientas