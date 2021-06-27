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
import { useHistory } from "react-router-dom";
import React from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [user, setUser]= React.useState({});
  const [error, setError]= React.useState(false);
  const history = useHistory(); 
  
  const handleChange = (event) => {
    let name = event.target.name
    setUser({...user, [name]: event.target.value});
  }

  const handleSubmit = async () => {
    let res = await fetch(`http://localhost:4000/api/users/login/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user),
    })
    if (!res.ok) {
      setError(true)
    } else {
      let data = await res.json()
      localStorage.setItem("token", data.token)
      localStorage.setItem("is_staff", data.is_staff)
      localStorage.setItem("name", data.first_name)
      if (data.is_staff) {
        history.push("/Admin_OrdenesCompra")
      } else {
        history.push("/shop")
      }  
    }
  }

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
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          {error && <p>Email o Password inválidos.</p>}
          <Button fullWidth variant="contained"
            color="primary" className={classes.submit}
            onClick={handleSubmit} >
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