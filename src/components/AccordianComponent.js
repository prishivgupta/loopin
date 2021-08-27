import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));

const AccordianComponent = (props) => {

    const classes = useStyles();

    return (
        
        <Accordion>

            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
            <Typography className={classes.heading}>{props.name}</Typography>
            </AccordionSummary>

            <AccordionDetails>

            <Typography>

                Author Details <br/><br/>

                Birth Date: {props.birth} <br/>
                Top work: {props.work} <br/>
                Total Books: {props.books} 

            </Typography>

            </AccordionDetails>

        </Accordion>

    )
}

export default AccordianComponent;
