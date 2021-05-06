/* this page is shown when the user clicks at the img of a product */
import React from "react"
import NavBar from '../components/NavBar';
import FooterBar from '../components/footerBar';
import { Container } from '@material-ui/core';
import { Link } from "react-router-dom"
import { Grid, Button, Icon } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import products from '../Data/fixtures.js';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
	root: {
		width: "70%",
		margin: "auto",
	},
	img: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		maxWidth: "350px",
	},
	txt: {
		textAlign: "justify",
	},
	btn: {
		margin: theme.spacing(1),
	},
	made: {
		textTransform: "uppercase",
	},
}))

function ProductoDetalles (){
	const classes = useStyles();
	const {id} = useParams();
	/*const producto = products.filter((filtro) => filtro.product_id === id).map(comprar =>())*/

	return (
		<div >
        <div className="App-NavBar"> 
          <NavBar /> 
        </div>
        <div component="form">
		{ products.filter((filtro) => filtro.product_id == id).map(comprar =>(
		<Container component="main" maxWidth="md"  > 
		<Grid container direction="row" align="center" alignItems="center" justify="center" className={classes.root}>
			<Grid item xs={12}>
				<h1>{comprar.name}</h1>
			</Grid>
			<Grid item xs={6} className={classes.img}>
				<img src={comprar.img} alt="product" />
			</Grid>
			<Grid item xs={5} className={classes.txt}>
				<h2 className={classes.made}>CATEGORIA: {comprar.categoria}</h2>
				<h3>Precio: ${comprar.price}</h3>
				<p>
					{" "}
					<strong>Informacion adicional del producto: </strong>
				</p>
				<p>{comprar.descripcion}</p>
				<p>{comprar.composicion}</p>
				<Grid item xs={4} className={classes.txt}>
					<TextField id="select" label="TALLE" value="M" select>
						{comprar.size.map((talle) => (
							<MenuItem value={talle}>{talle}</MenuItem>
						))}
					</TextField>				
				</Grid>
				<Grid item xs={4} className={classes.txt}>
					<TextField id="select" label="COLOR" value={comprar.colors.[1]} select>
						{comprar.colors.map((colores) => (
							<MenuItem value={colores}>{colores}</MenuItem>
						))}
					</TextField>				
				</Grid>
				<Grid item xs={12} className={classes.txt}>
				<Button component={Link} to="/shop" variant="contained" className={classes.btn}>
					Regresar a la tienda 
				</Button>
				</Grid>
				<Button
					disabled={  comprar.stock = 0 ? true : false}
					variant="contained"
					color="primary"
					className={classes.btn}
				>
					<Icon>
						<AddShoppingCartIcon /> 
					</Icon>
				</Button>
			</Grid>
		</Grid>
		</Container>
		))}
    </div> 
       <div  > 
          <FooterBar />
       </div>
      </div>
  	);
}



export default ProductoDetalles;