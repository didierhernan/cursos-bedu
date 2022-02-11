import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
//import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

  const Accordion = withStyles({
    root: {
      background: "transparent",
      margin: "20px 0px",
      border :"16px",
      borderRadius: "16px",
      borderTop:"none"
      
    },
  })(MuiAccordion);


const AccordionDetails = withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flexStart",
    padding: "10px",
    width: "712px",
    height: "auto",
    margin: "0px 0px",
    background: "transparent",
    border: "none",
  },
}))(MuiAccordionDetails)


  const SimpleAccordion = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Acordeon 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Esta es la informacion del acordeon 1
              </Typography>
            </AccordionDetails> 
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Acordeon 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                El segundo acordeon en información
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion disabled>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography className={classes.heading}>Un acordeon deshabilitado</Typography>
            </AccordionSummary>
          </Accordion>
        </div>
      );
  }

  export default SimpleAccordion