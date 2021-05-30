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
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import order from '../Data/order.js'; 
import modosEntrega from '../Data/modosEntrega.js'; 
import sucursales from '../Data/sucursales.js'

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
    border: '2px solid #000',
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
  const [modoEntrega,setModoEntrega] = React.useState('');
  const [sucursal,setSucursal] = React.useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeModoEntrega = (event) => {
    setModoEntrega(event.target.value);
  };

  const handleChangeSucursal = (event) => {
    setSucursal(event.target.value);
  };

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
           {order.items.map((x) => (
              <TableRow key={x.producto_id}>
                <TableCell>
                <Avatar variant="square" src={x.product.img} />
                
                </TableCell>
                <TableCell>{x.product.name}</TableCell>
                <TableCell>{x.size}</TableCell>
                <TableCell>{x.color}</TableCell>
                <TableCell>{x.color}</TableCell>
                <TableCell align="right">  $ {ccyFormat (x.subtotal)}  </TableCell>
                <TableCell align="right" > $ {ccyFormat (x.subtotal)} </TableCell>
                <TableCell >
                  <IconButton aria-label="delete" className={classes.margin}>
                   <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow >
            <TableCell  colSpan={2}> <Typography variant="h6"  component="h6" > Total</Typography></TableCell>
            <TableCell align="right"><Typography component="h6" > $ {ccyFormat(order.total)} </Typography></TableCell>
            </TableRow>     
          </TableBody>
        </Table>
        <Container className={classes.cardGrid}   maxWidth="lg" >
        <Button variant="contained" color="primary" onClick={handleOpen} >
          comprar
        </Button>
        </Container>
       <Box mt={30}> 
       </Box>
       <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Modo de entrega</h2>
            <p id="transition-modal-description">Elija el modo de entrega y la direccion</p>
            <TextField
              id="modoEntrega"
              name="modoEntrega"
              label="Modo de entrega"
              defaultValue={modoEntrega}
              select
              variant="outlined"
              required
              fullWidth
              onChange={handleChangeModoEntrega}
              helperText="                     ."
              >
                {modosEntrega.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField
              id="sucursal"
              name="sucursal"
              label="Sucursal de retiro"
              defaultValue={sucursal}
              select
              variant="outlined"
              required
              fullWidth
              onChange={handleChangeSucursal}
              helperText="                    ."
              >
                {sucursales.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.value+' - '+option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Box/>
            <TextField
                      defaultValue=""
                      name="direccion"
                      variant="outlined"
                      required
                      fullWidth
                      id="direccion"
                      label="Direccion de entrega"
                      helperText="                      ."
                    >
            </TextField>
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