import '../App.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Product from "../components/product"

function ProductoModificar() {
    const {id} = useParams();
    const [product, setProduct]= React.useState({
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

    const updateProduct = () => {
      let token = localStorage.getItem("token")
      fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `token ${token}`
        },
        body: JSON.stringify(product),
      })
      .then(res => res.json())
      .then((x) => {
        history.push("/Admin_Productos");
      })
    }

    React.useEffect(() => {
      fetch(`http://localhost:4000/api/products/${id}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      })
      .then(res => res.json())
      .then(res => setProduct(res))
    }, [id])
    
        
    return (
      <Product product={product}
        handleChange={handleChange}
        title="Modificar Producto"
        handleSubmit={updateProduct}
      />
    );
  }
  
  export default ProductoModificar;
  