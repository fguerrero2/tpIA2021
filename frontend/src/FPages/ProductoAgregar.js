import '../App.css';
import React from 'react';
import { useHistory } from "react-router-dom";
import Product from "../components/product"

function ProductoAgregar() {
    const [product, setProduct] = React.useState({
      name: "",
      description: "",
      category: "",
      price: 0,
      stock: 0,
    });
    const history = useHistory();
    
    const handleChange = (event) => {
      let name = event.target.name
      setProduct({...product, [name]: event.target.value});
    }

    const createProduct = () => {
      fetch(`http://localhost:4000/api/products/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(product),
      })
      .then(res => res.json())
      .then((x) => {
        console.log(x)
        history.push("/Admin_Productos");
      })
    }

        
    return (
      <Product product={product}
        handleChange={handleChange}
        title="Crear Producto"
        handleSubmit={createProduct}
      />
    );
  }
  
  
  export default ProductoAgregar;

  