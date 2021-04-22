import Button from '@material-ui/core/Button';
import {Paper, Grid} from '@material-ui/core';
import React from 'react';

function ProductCard({product}) { 
    return (
    <Grid item>
        <Paper/>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <Button  variant="contained" color="primary">Comprar</Button>
    </Grid>
    )
};

export default ProductCard;