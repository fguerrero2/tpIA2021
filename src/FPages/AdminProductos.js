import '../App.css';
import React from 'react';
import { Container } from '@material-ui/core';
import AdminNavBar from '../components/AdminNarBar';
import FooterBar from '../components/footerBar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import products from '../Data/fixtures.js'; 
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  name: {
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
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  cardBoton: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(80),
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


function AdminProductos() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AdminNavBar/> 
      <main >
        {/* Grilla  */}
        <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5"  className={classes.name} >
          Lista de Productos 
        </Typography>
        <Container className={classes.cardBoton}   maxWidth="lg" >
        <Button align="right " variant="contained" color="primary" Link href="/productoagregar">
          Agregar Producto
        </Button>
        </Container>
        <Table size="small" className={classes.heroContent}>
          <TableHead>
            <TableRow>
              <TableCell>  </TableCell>
              <TableCell>Nro producto</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Categoria </TableCell>
              <TableCell>Stock</TableCell>
              <TableCell align="right">Precio</TableCell>
              <TableCell >   </TableCell>
              <TableCell >   </TableCell>
           </TableRow>
          </TableHead>
          <TableBody>
           {products.map((x) => (
              <TableRow key={x.producto_id}>
                <TableCell>
                <Avatar variant="square" src={x.img} />
                
                </TableCell>
                <TableCell>{x.product_id}</TableCell>
                <TableCell>{x.name}</TableCell>
                <TableCell>{x.categoria}</TableCell>
                <TableCell>{x.stock}</TableCell>
                <TableCell align="right">$ {ccyFormat (x.price)}</TableCell>
                <TableCell >
                  <IconButton aria-label="modify" className={classes.margin}>
                   <CreateIcon />
                  </IconButton>
                </TableCell>
                <TableCell >
                  <IconButton aria-label="delete" className={classes.margin}>
                   <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
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

export default AdminProductos;
