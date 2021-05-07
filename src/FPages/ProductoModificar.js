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
import categorias from '../Data/categorias.js'; 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import products from '../Data/fixtures.js';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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

  

function ProductoModificar() {
    const classes = useStyles();
    const [categoria,setCategoria] = React.useState('');
    const [name, setName] = React.useState('');
    const {id} = useParams();
    
    const handleChangeCategoria = (event) => {
        setCategoria(event.target.value);
      };
    const handleChangeName = (event) => {
        setName(event.target.value);
      };
    
        
    return (
      <div >
        <div className="App-AdminNavBar"> 
          <AdminNavBar /> 
        </div>
        <div component="form">
        { products.filter((filtro) => filtro.product_id == id).map(comprar =>(
          <Container component="main" maxWidth="md"  > 
            <CssBaseline />
            <Container   component="main" maxWidth="md"  >
                <CssBaseline />
                <Typography component="h1" variant="h5" className={classes.paper}>
                    Modificar Producto
                 </Typography>
              
                <Grid container spacing={2}>
                  <Grid item xs={10} >
                    <TextField
                      defaultValue={comprar.name}
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      id="name"
                      label="Nombre"
                      autoFocus
                      /*value={name}*/
                      onChange={handleChangeName}
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      defaultValue={comprar.descripcion}
                      name="descripcion"
                      variant="outlined"
                      required
                      fullWidth
                      id="descripcion"
                      label="Descripcion"
                    />
                  </Grid>
                  <Grid item xs={10}>
                    <TextField
                      defaultValue={comprar.composicion}
                      name="composicion"
                      variant="outlined"
                      required
                      fullWidth
                      id="composicion"
                      label="Composicion"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      id="categoria"
                      name="categoria"
                      label="Categoria"
                      defaultValue={comprar.categoria}
                      select
                      variant="outlined"
                      required
                      fullWidth
                      onChange={handleChangeCategoria}
                      helperText="Por favor seleccionar categoria"
                      >
                        {categorias.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      defaultValue={comprar.price}
                      id="price"
                      variant="outlined"
                      required
                      fullWidth
                      name="price"
                      label="Precio"
                      type="amount"
                    />
                  </Grid>
                  <Grid item xs={4}>
                        <input label='subir imagen' accept="image/*" className={classes.input} id="imagen-file" type="file" />
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image= {comprar.img}
                            />
                        </Card>
                   </Grid>
                </Grid>
                <Grid item xs={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            component={Link} to="/Admin_Productos"
                        >
                            Regresar
                        </Button>  
                    </Grid>
                <Grid item xs={5}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Modificar producto
                        </Button>  
                    </Grid>
          </Container>
  
    </Container>
		))}
    </div> 
       <div  > 
          <FooterBar />
       </div>
      </div>
    );
  }
  
  export default ProductoModificar;
  