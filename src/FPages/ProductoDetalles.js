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
import Box from '@material-ui/core/Box';

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
		<Grid container direction="row" className={classes.root} spacing={2} >
			<Grid item xs={12} align="center" alignItems="center" justify="center" >
				<h1>{comprar.name}</h1>
			</Grid>
			<Grid item xs={6} className={classes.img}>
				<img src={comprar.img} alt="product" />
			</Grid>
			<Grid item xs={5} className={classes.txt} >
				<h3 className={classes.made}>Categoria: {comprar.categoria}</h3>
				<p>
					{" "}
					<strong>Informacion adicional del producto: </strong>
				</p>
				<p>{comprar.descripcion}</p>
				<p>{comprar.composicion}</p>
				<h3>Precio: ${comprar.price}</h3>
				<Grid item xs={4} className={classes.txt} spacing={2} >
					<TextField id="select" label="TALLE" value="M" select>
						{comprar.size.map((talle) => (
							<MenuItem value={talle}>{talle}</MenuItem>
						))}
					</TextField>				
				</Grid>
				<Grid item xs={4} className={classes.txt} spacing={2}>
					<TextField id="select" label="COLOR" value={comprar.colors.[1]} select>
						{comprar.colors.map((colores) => (
							<MenuItem value={colores}>{colores}</MenuItem>
						))}
					</TextField>				
				</Grid>
				<Grid container item xs={12} className={classes.txt}>
					<Grid  item xs={6}>
						<Button component={Link} to="/shop" variant="contained" className={classes.btn}>
							Regresar
						</Button>
					</Grid>
					<Grid item xs={6}  > <Button
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
			  </Grid>
		</Grid>
		<Box mt={20}>

		</Box>
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