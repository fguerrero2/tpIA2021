import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person'; 
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LIsabella from '../images/Logo_Isabella.png';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
      textAlign: 'center',
     },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    flex: 1,
    justifyContent: 'flex-end',
    padding: 50,
  },   
    textAlign: 'center',
  },
}));


const AdminNavBar = () => {
  const classes = useStyles();
  return ( 
    <React.Fragment>
    <CssBaseline />
    <AppBar position="relative" color="white">
      <Typography className={classes.root}   >
      <Grid container spacing="3" alignItems="center" >
       <Grid item xs="3"> 
            <Link href="/" >  
               <img src={LIsabella} className="App-LogoIsabella"  alt="LogoIsabella" />  
               </Link>
      </Grid>
      <Grid item xs="6">
          <Box component="span" m={5}>
            <Link  variant="h6" underline="none" color="inherit" className={classes.rightLink}  href="/Admin_OrdenesCompra" >  {'Ordenes de Compra  '}   </Link>
            </Box>
          <Box component="span" m={5}>
             <Link variant="h6" underline="none" color="inherit" className={classes.rightLink} href="/Admin_Productos"> Lista Productos </Link>
          </Box>
      </Grid> 
      <Grid item xs="2" >
        <div align="right" >
				  <p>Usuario: Admin</p>
        </div>
      </Grid> 
      <Grid item xs="1" >
        <div align="right" >
          <IconButton color="#607d8b" aria-label="add to shopping cart" href="/#" >
            <PersonIcon />
          </IconButton>
        </div>
      </Grid> 
    </Grid>
    </Typography> 
    </AppBar>
    </React.Fragment>
  );
};

export default AdminNavBar;

/*
import PersonIcon from '@material-ui/icons/Person'; 
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
*/