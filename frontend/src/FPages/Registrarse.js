import '../App.css';
import NavBar from '../components/NavBar';
import FooterBar from '../components/footerBar';
import { Container } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

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


function Registrarse() {
  const classes = useStyles();
  const [data, setData]= React.useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    tyc: false,
    error: "",
  });
  const history = useHistory();

  const handleChange = (event) => {
    let name = event.target.name
    setData({...data, [name]: event.target.value});
  }

  const handleCheck = (event) => {
    let name = event.target.name
    setData({...data, [name]: !data[name]});
  }

  const handleSubmit = async () => {
    if (!data.tyc) {
      setData({...data, error: "por favor, acepta los terminos y condiciones"})
    } else {
      let res = await fetch(`http://localhost:4000/api/users/registration/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password,
        }),
      })
      if (!res.ok) {
        let error = await res.json()
        setData({...data, error: "uno o mas datos es invalido"})
      } else {
        let user = await res.json()
        localStorage.setItem("token", user.token)
        localStorage.setItem("is_staff", user.is_staff)
        localStorage.setItem("name", user.first_name)
        history.push("/")
      }
    }
  }

  return (
    <div >
      <div className="App-NavBar"> 
        <NavBar /> 
      </div>
      <div component="form">
        <Container component="main" maxWidth="xs"  > 
          <CssBaseline />
          <Container   component="main" maxWidth="xs"  >
              <CssBaseline />
              <Typography component="h1" variant="h5" className={classes.paper}>
                  Registro
               </Typography>
            
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    name="first_name"
                    variant="outlined"
                    required
                    fullWidth
                    label="Nombre"
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Apellido"
                    name="last_name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value={data} name="tyc" color="primary" onChange={handleCheck} />}
                    label="Acepto Terminos y Condiciones"
                  />
                </Grid>
              </Grid>
              { data.error && <p>{data.error}</p> }
              <Button type="submit"  fullWidth variant="contained" color="primary" onClick={handleSubmit}               >
                Registrarse
              </Button>  
        </Container>
        <Box mt={30}> </Box>
  </Container>
  </div> 
     <div  > 
        <FooterBar />
     </div>
    </div>
  );
}

export default Registrarse;