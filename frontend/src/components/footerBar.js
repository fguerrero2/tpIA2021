import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css';


const useStyles = makeStyles((theme) => ({
 
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },   
}));

const FooterBar = () => {
  const classes = useStyles();
  return ( 
      <Typography className={classes.footer}>
      <Grid container spacing="3" alignItems="center"  >
        <Grid item xs="6"> 
            <Box component="span" m={3}>
                <Link variant="h7" underline="none" color="inherit" className={classes.rightLink} href="/nosotros"> Nosotros </Link>
            </Box>
            <Box component="span" m={3}> 
              <Link variant="h7" underline="none" color="inherit" href="#"> Contacto   </Link>
            </Box>
            <Box component="span" m={3}> 
              <Link variant="h7" underline="none" color="inherit" href="#"> Terminos y Condiciones   </Link>
            </Box>
        </Grid>
        <Grid item xs="3"> 
            &copy; 2021, made with Grupo 7 API
        </Grid> 
      </Grid>
    </Typography> 
  );
};

export default FooterBar;

/*
import PersonIcon from '@material-ui/icons/Person'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
*/