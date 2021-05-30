const order = {
    total: 11198.0,
    usuario:"yessi.gallo",
    modo_entrega: "",
    direccion_entrega: "",
    lugar_retiro: "",
    items: [
        {
            item_id: 1,
            size: "M",
            color: "AZUL",
            quantity: 1,
            subtotal: 6190,
            product: {
                product_id: 101,
                img: "/statics/images/Productos/jean_1.jpg",
                name: "Jean Clara",
                price: 6599.0,
                size: ["M", "S", "L"],
                colors: ["AZUL", "ROJO", "VERDE"],
            }
        },
        {
            item_id: 2,
            size: "M",
            color: "ROJO",
            quantity: 1,
            subtotal: 6190,
            product: {
                product_id: 101,
                img: "/statics/images/Productos/jean_1.jpg",
                name: "Jean Clara",
                price: 6599.0,
                size: ["M", "S", "L"],
                colors: ["AZUL", "ROJO", "VERDE"],
            }
        },
    ]
}

 
export default order;


/*export default const profile = {
    username: "usuario",
    name: "usuario",
    is_staff: false,
};*/

// GET /api/v1/orders/<order_id>/

/*         {
            item_id: 2,
            size: "M",
            color: "AZUL",
            quantity: 1,
            subtotal: 1234,
            product: {
                product_id: 201,
                img: "/statics/images/Productos/Remera_1.jpg",
                name: "Remera Wanda",
                price: 4599.0,
                size: ["M", "S", "L"],
                colors: ["AZUL", "ROJO", "VERDE"],
            }
        }, */