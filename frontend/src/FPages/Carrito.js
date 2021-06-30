import React from 'react';
import NavBar from '../components/NavBar';
import FooterBar from '../components/footerBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingBottom: theme.spacing(2),
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
    padding: theme.spacing(6),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}




function Carrito() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null);
  const history = useHistory();
  
  React.useEffect(() => {
    let token = localStorage.getItem("token")
		fetch(`http://localhost:4000/api/orders/cart`, {
			method: 'GET',
      headers: {
				'Content-Type': 'application/json',
				'Authorization': `token ${token}`,
      },
    })
		.then(res => res.json())
		.then(res => setData(res))
  }, [])

  function deleteItem(id) {
    let token = localStorage.getItem("token")
    fetch(`http://localhost:4000/api/orders/cart/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `token ${token}`,
      },
    })
    let newData = {...data, items: data.items.filter((x) => x.id !== id)}
    newData.total = newData.items.reduce((a,b) => a + b.subtotal, 0);
    setData(newData)
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleOk = () => {
    let token = localStorage.getItem("token")
    fetch(`http://localhost:4000/api/orders/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `token ${token}`,
      },
      body: JSON.stringify({}),
    })
    history.push("/");
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };
  if (!data){
    return (<div></div>)
  }
  return (
    <React.Fragment>
      <NavBar /> 
      <main >
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5"  className={classes.title} >
          Compras 
        </Typography>
        <Table size="small" className={classes.heroContent}>
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>  </TableCell>
              <TableCell> Talle</TableCell>
              <TableCell> Color</TableCell>
              <TableCell> Cantidad </TableCell>
              <TableCell> Precio Unitario</TableCell>
              <TableCell align="right"> Subtotal </TableCell>
              <TableCell >   </TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           {data.items.map((x) => (
              <TableRow key={x.product_id}>
                <TableCell>
                <Avatar variant="square" src={x.product.img} />
                </TableCell>
                <TableCell>{x.product.name}</TableCell>
                <TableCell>{x.size}</TableCell>
                <TableCell>{x.color}</TableCell>
                <TableCell>{x.quantity}</TableCell>
                <TableCell align="right">  $ {ccyFormat (x.price)}  </TableCell>
                <TableCell align="right" > $ {ccyFormat (x.subtotal)} </TableCell>
                <TableCell >
                  <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteItem(x.id)} >
                   <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow >
            <TableCell  colSpan={2}> <Typography variant="h6"  component="h6" > Total</Typography></TableCell>
            <TableCell align="right"><Typography component="h6" > $ {ccyFormat(data.total)} </Typography></TableCell>
            </TableRow>     
          </TableBody>
        </Table>
        <Container className={classes.cardGrid}   maxWidth="lg" >
        <div> <p> El pedido se retira por la Suscural </p></div>
        <Button variant="contained" color="primary" onClick={handleOpen} >
          comprar
        </Button>
        </Container>
       <Box mt={30}>  </Box>
       <Modal className={classes.modal} open={open}
              onClose={handleClose}
              BackdropComponent={Backdrop} >
          <Fade in={open}>
            <div className={classes.paper}>
              <h2>  Pedido Confirmado  </h2>
              <p > El Pedido fue confirmado y  se puede retirar despues de 5 dias habiles por la sucursal</p>
              <Button variant="contained" color="primary" onClick={handleOk} >
                Aceptar 
              </Button>
              <Box/>
            </div>
          </Fade>
        </Modal>
      </Container>  
      </main>
      <div >
           <FooterBar />
      </div>
     </React.Fragment>
  );
}
export default  Carrito;