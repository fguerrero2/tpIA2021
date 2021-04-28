import '../App.css';
import NavBar from '../components/NavBar';
import { Container, Grid } from '@material-ui/core';
import products from '../Data/fixtures.js';
import FooterBar from '../components/footerBar';
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


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
    padding: theme.spacing(3),
  },
}));

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function Shop() {
  const classes = useStyles();
  let items = products;
  
  return (
    <React.Fragment>
      <NavBar /> 
      <main>
        {/* Productos  */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {items.map((x) => (
              <Grid item key={x} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image= {x.img}
                    name= {x.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography >
                      {x.name}
                    </Typography>
                    <Typography>
                      Precio: $  {ccyFormat (x.price)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                       Comprar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
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

export default Shop;

