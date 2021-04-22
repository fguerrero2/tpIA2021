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
import order from '../Data/order.js'; 


const useStyles = makeStyles((theme) => ({
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
    padding: theme.spacing(6),
  },
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function Carrito() {
  const classes = useStyles();
  
  return (
    <React.Fragment>
      <NavBar /> 
      <main >
        {/* Grilla  */}
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5" >
          Recent Orders
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Producto</TableCell>
              <TableCell>  </TableCell>
              <TableCell> Talle</TableCell>
              <TableCell> Color</TableCell>
              <TableCell> Cantidad </TableCell>
              <TableCell> Precio Unitario</TableCell>
              <TableCell align="right"> Subtotal </TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           {order.items.map((x) => (
              <TableRow key={x.producto_id}>
                <TableCell>{x.product.name}</TableCell>
                <TableCell>{x.product.img}</TableCell>
                <TableCell>{x.size}</TableCell>
                <TableCell>{x.color}</TableCell>
                <TableCell>{x.color}</TableCell>
                <TableCell align="right">{x.subtotal}</TableCell>
                <TableCell align="right" >{x.subtotal}</TableCell>
              </TableRow>
            ))}
            <TableRow >
            <TableCell  colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(order.total)}</TableCell>
            </TableRow>     
          </TableBody>
        </Table>
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
export default  Carrito;




/*
   Dashboard - Grid 
   https://material-ui.com/getting-started/templates/dashboard/

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}


*/


/* "/statics/images/productos/Buzo_1.jpg"  
<img src={{x.image}} alt="Portada"  /> 
import { Container } from '@material-ui/core';
import NavBar from '../components/NavBar';
import FooterBar from '../components/footerBar';
import Grid from '@material-ui/core/Grid';


function Carrito() {
  return (
    <div> 
         <div className="App-NavBar"> 
         <NavBar /> 
        </div>
        <div className="App-header" >
           
            <Container fixed className="App-header">
                 <Grid Item MS="12" >
                 
                    Hola 
                 </Grid>
            </Container>
        </div>
        <div className="App-Footer" > 
            <FooterBar />
        </div>
     </div>
 
  );
}
export default Carrito;


*/

/*
<TableRow key={x.item_id}>
                <TableCell>{x.product.name}</TableCell>
                <TableCell>{x.product.img}</TableCell>
                <TableCell>{x.size}</TableCell>
                <TableCell>{x.color}</TableCell>
                <TableCell>{x.quantity}</TableCell>
                <TableCell align="right">{x.subtotal}</TableCell>
                <TableCell align="right" >{x.subtotal}</TableCell>
              </TableRow>
*/