import '../App.css';
import { Container } from '@material-ui/core';
import AdminNavBar from '../components/AdminNarBar';
import FooterBar from '../components/footerBar';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import orderlist from '../Data/orderlist.js'; 

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
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.nro_orden}</TableCell>
        <TableCell align="left">{row.usuario}</TableCell>
        <TableCell align="left">{row.fecha}</TableCell>
        <TableCell align="right">$ {ccyFormat (row.total)}</TableCell>
        <TableCell align="right">{row.estado}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Detalle Orden
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Producto</TableCell>
                    <TableCell>Descripcion</TableCell>
                    <TableCell>Talle</TableCell>
                    <TableCell>Color</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Unitario</TableCell>
                    <TableCell align="right">Total ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((items) => (
                    <TableRow key={items.item_id}>
                      <TableCell component="th" scope="row">
                        {items.item_id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {items.product_id}
                      </TableCell>
                      <TableCell>{items.name}</TableCell>
                      <TableCell>{items.size}</TableCell>
                      <TableCell>{items.color}</TableCell>
                      <TableCell align="right">{items.quantity}</TableCell>
                      <TableCell align="right">$ {ccyFormat (items.price)}</TableCell>
                      <TableCell align="right">
                        $ {ccyFormat (Math.round(items.quantity*items.price))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    nro_orden: PropTypes.string.isRequired,
    usuario: PropTypes.string.isRequired,
    fecha: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    estado: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        item_id: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        subtotal: PropTypes.number.isRequired,
        product_id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }),
    ).isRequired,
  }).isRequired,
};




function AdminOrden() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AdminNavBar /> 
      <main >
        {/* Grilla  */}
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5"  className={classes.title} >
          Lista de ordenes 
        </Typography>
        <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Numero Orden</TableCell>
              <TableCell align="left">Usuario </TableCell>
              <TableCell align="left">Fecha</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Estado </TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
          {orderlist.map((row) => (
              <Row key={row.nro_orden} row={row} />
          ))}
          </TableBody>
        </Table>
        </TableContainer>
      </Container>
      


      </main>
      {/* Footer */}
      <div >
           <FooterBar />
      </div>
      {/* End footer */}
    </React.Fragment>
  );
}

export default AdminOrden;
