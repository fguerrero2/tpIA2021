/* this page is shown when the user clicks at the img of a product */
import React from "react"
import NavBar from '../components/NavBar';
import FooterBar from '../components/footerBar';
import { Container } from '@material-ui/core';
import { Link } from "react-router-dom"
import { Grid, Button, Icon } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useParams } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
	root: {
		width: "70%",
		margin: "auto",
	},
	root1: {
		'& > *': {
		  margin: theme.spacing(1),
		},
		padding: theme.spacing(2, 1, 1),
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
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	  },
	  paper: {
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	  },
}))

function ProductoDetalles (){
	const classes = useStyles();
	const {id} = useParams();
	const [data, setData] = React.useState(null);
	const [open, setOpen] = React.useState(false);

	const handleClose = () => {setOpen(false)};
	const handleSubmit = async () => {
		let token = localStorage.getItem("token")
		let res = await fetch(`http://localhost:4000/api/orders/cart/add`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `token ${token}`,
			},
			body: JSON.stringify({
				product_id: data._id,
				quantity: data.quantity,
				price: data.price,
				size: data.size,
				color: data.color,
			}),
		})
		if (res.ok) {
			res = await res.json()
			setOpen(true)
		}
	};

	const handleChange = (event) => {
		let name = event.target.name
		setData({...data, [name]: event.target.value});
	}

    React.useEffect(() => {
		fetch(`http://localhost:4000/api/products/${id}`, {
			method: 'GET'})
		.then(res => res.json())
		.then(res => setData({
			...res,
			quantity: 1,
			size: res.sizes[0],
			color: res.colors[0],
		}))
    }, [id])

	console.log("Product::::", data)
	if (!data) {
		return (<div></div>)
	}
	return (
		<div >
			<div className="App-NavBar"> 
				<NavBar /> 
			</div>
        <div component="form">
		<Container component="main" maxWidth="md"  > 
			<Grid container direction="row" className={classes.root} spacing={2} >
				<Grid item xs={12} align="center" alignItems="center" justify="center" >
					<h1>{data.name}</h1>
				</Grid>
				<Grid item xs={6} className={classes.img}>
					<img src={data.img} alt="product" />
				</Grid>
				<Grid item xs={5} className={classes.txt} >
					<h3 className={classes.made}>Categoria: {data.category}</h3>
					<p>
						{" "}
						<strong>Informacion adicional del producto: </strong>
					</p>
					<p>{data.description}</p>
					<h3>Precio: ${data.price}</h3>
					<Grid item xs={4} className={classes.txt} spacing={2} >
						<TextField name="size" label="TALLE" value={data.size} select onClick={handleChange}>
							{data.sizes.map((size) => (
								<MenuItem value={size}>{size}</MenuItem>
							))}
						</TextField>				
					</Grid>
					<Grid item xs={4} className={classes.txt} spacing={2}>
						<TextField name="color" label="COLOR" value={data.color} select onClick={handleChange}>
							{data.colors.map((color) => (
								<MenuItem value={color}>{color}</MenuItem>
							))}
						</TextField>
					</Grid>
					
					<p> Stock Disponible: {data.stock}</p>
					
					<TextField  name="quantity"
						label="cantidad"
						type="number"
						value={data.quantity}
						InputLabelProps={{
            				shrink: true,
          				}}
						onChange={handleChange} />
					<div className={classes.root1}  >
						<Button component={Link} to="/shop" variant="contained" className={classes.btn}>
							Regresar
						</Button>
						<Button
							disabled={data.quantity > data.stock ? true : false}
							variant="contained"
							color="primary"
							className={classes.btn}
							onClick={handleSubmit}>  
							<Icon>
								<AddShoppingCartIcon /> 
							</Icon>
						</Button> 
						<Modal className={classes.modal} open={open} onClose={handleClose} BackdropComponent={Backdrop} >
							<Fade in={open}>
								<div className={classes.paper}>
									<h2>  Producto Agregado al Carrito </h2>
									<p > </p>
									<div className={classes.root1}>
									<Button variant="contained" component={Link}  to="/shop" className={classes.btn} >
										Seguir Comprando 
									</Button>
									<Button variant="contained" component={Link}  color="primary" to="/carrito" >
										Finalizar Compra 
									</Button>
									</div>
									<Box/>
								</div>
							</Fade>
  						</Modal>
					</div>	
				</Grid>
			</Grid>
			<Box mt={20}></Box>
		</Container>
    </div> 
       <div  > 
          <FooterBar />
       </div>
	</div>
  	);
}



export default ProductoDetalles;