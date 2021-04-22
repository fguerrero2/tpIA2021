import {Container} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import FooterBar from '../components/footerBar';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();

  return (
    <div>
      <div className="App-NavBar"> 
      <NavBar /> 
      </div>
      <div >
         <Container  component="main" maxWidth="xs" >
          <CssBaseline />
           <div className={classes.paper}>
         Acceder
         <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">  Te olvidaste la contaseña ? </Link>
            </Grid>
            <Grid item> 
              <Link href="/registrarse" variant="body2"> Registrarse </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={30}>

      </Box>
    </Container>
    </div> 
     <div className="App-NavBar"> 
        <FooterBar />
     </div>
    </div>
  );
}

export default Login;
