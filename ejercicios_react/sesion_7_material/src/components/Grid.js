import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";


// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '50%'
//     }
// }))

function GridComp() {
    // const classes = useStyles();
    return (
        <Fragment>
            <Container className="container">
                <Grid container spacing={3}>
                    <Grid item className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 1</Grid>
                    <Grid item className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 2</Grid>
                    <Grid item className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 3</Grid>
                    <Grid item className="gridItem" item lg={3} md={4} sm={6} xs={12}>Grid 4</Grid>

                    <Grid item className="gridItem" item sm={6} xs={12}>
                        Grid item container
                        <Grid item item lg={3} md={4} sm={6} xs={12}>
                            <div>Otro Grid</div>
                        </Grid>
                    </Grid>

                </Grid>
            </Container>
        </Fragment>
    )
}

export default GridComp