import '../App.css';
import NavBar from '../components/NavBar';
import { Container } from '@material-ui/core';
import FooterBar from '../components/footerBar';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   root: {
     height: '100vh',
   },
   image: {
      backgroundImage: 'url(https://marketplace.canva.com/t8b5k/MAES21t8b5k/1/s2/canva-white-plastic-clothes-hanger-on-white-paper-MAES21t8b5k.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
     backgroundSize: 'cover',
     backgroundPosition: 'center',
   },
   paper: {
     margin: theme.spacing(8, 4),
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
   },
   avatar: {
     margin: theme.spacing(1),
     backgroundColor: theme.palette.secondary.main,
   },
   form: {
     width: '100%', // Fix IE 11 issue.
     marginTop: theme.spacing(1),
   },
   submit: {
     margin: theme.spacing(3, 0, 2),
   },
 }));



function Nosotros() {
   const classes = useStyles();
   return (
    <div>
     <div className="App-NavBar"> 
       <NavBar /> 
       </div>
     <div className="App-header" >
     <Container fixed >
      <Grid container component="main"  className={classes.root}>
       <CssBaseline />
         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
         <div  style={{ padding: 20 }} >
             <Typography  variant="h4" gutterBottom paragraph={true} >
               Nosotros 
            </Typography>

            <Typography  variant="body1" paragraph>
              Isabella es una marca que busca valorizar la actitud de la mujer y potenciar su atractivo físico, creando una conciencia de género que ponga en evidencia los encantos innatos que cada una tiene ocultos a la espera de ser descubiertos.
            </Typography>
            <Typography  variant="body1" paragraph>
            La marca se creo en el  2002, por isabella cumpliendo un sueño. 
            </Typography>
         
            </div>
         </Grid>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
      </Container>
     </div> 
      <div > 
         <FooterBar />
      </div>
     </div>
   );
}

export default Nosotros;
