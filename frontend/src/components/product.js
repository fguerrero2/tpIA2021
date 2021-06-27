import '../App.css';
import React from 'react';
import AdminNavBar from '../components/AdminNarBar';
import FooterBar from '../components/footerBar';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from "react-router-dom"
import categorias from '../Data/categorias.js'; 


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',/*center */
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
   },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
}));

export default function Product({product, handleChange, title, handleSubmit}) {
    const classes = useStyles();
    return (
        <div >
            <div className="App-AdminNavBar"> 
                <AdminNavBar /> 
            </div>
        <div component="form">
            <Container component="main" maxWidth="md"  > 
                <CssBaseline />
                <Container   component="main" maxWidth="md"  >
                    <CssBaseline />
                    <Typography component="h1" variant="h5" className={classes.paper}>
                        {title}
                    </Typography>
                
                    <Grid container spacing={2}>
                    <Grid item xs={10} >
                        <TextField
                        value={product.name || ""}
                        variant="outlined"
                        required
                        fullWidth
                        name="name"
                        label="Nombre"
                        autoFocus
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={10}>
                        <TextField
                        value={product.description || ""}
                        name="description"
                        variant="outlined"
                        required
                        fullWidth
                        label="Description"
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                        name="category"
                        label="Categoria"
                        value={product.category || ""} 
                        variant="outlined"
                        onChange={handleChange}
                        select
                        required
                        fullWidth
                        helperText="Por favor seleccionar categoria"
                        >
                            {categorias.map((option) => (
                                <MenuItem key={option.value} value={option.value} selected={option.value === product.category ? 1: 0}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                        value={product.price || 0}
                        variant="outlined"
                        required
                        fullWidth
                        name="price"
                        label="Precio"
                        type="amount"
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                        value={product.stock || 0}
                        variant="outlined"
                        required
                        fullWidth
                        name="stock"
                        label="Stock"
                        type="amount"
                        onChange={handleChange}
                        />
                    </Grid>
                    <Grid spacing={4}  item xs={4}>
                            <input label='subir imagen' accept="image/*" className={classes.input} id="imagen-file" type="file" />
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image= {product.img}
                                />
                            </Card>
                    </Grid>
                    </Grid>
                    <Grid  container spacing={2}  >
                        <Grid m xs={4}>  </Grid>
                        <Grid item xs={3}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    component={Link} to="/Admin_Productos"
                                >
                                    Regresar
                                </Button>  
                            </Grid>
                        <Grid item xs={3}  >
                        <Button  type="submit"  fullWidth  variant="contained" color="primary" onClick={handleSubmit}>
                            Guardar
                        </Button>  
                        </Grid>
                    </Grid>
            </Container>
    
            </Container>
        </div> 
        <div  > 
            <FooterBar />
        </div>
        </div>
    );
}
