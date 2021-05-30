const orderlist = [
    {
    nro_orden:"100",
    usuario:"yessi.gallo",
    fecha:"21/03/2020 18:53",
    total: 11800.0,
    modo_entrega: "Retira",
    lugar_retiro: "Palermo1",
    direccion_entrega: "Local Alto Palermo",
    estado:"Entregado",
    fecha_entrega: "24/03/2020 14:00",
    items: [
        {
            item_id: 1,
            size: "M",
            color: "AZUL",
            quantity: 1,
            subtotal: 7500,
            product_id: 102,
            name: "Jean Paula",
            price: 7500.0,
        },
        {
            item_id: 2,
            size: "M",
            color: "ROJO",
            quantity: 1,
            subtotal: 7500,
            product_id: 102,
            name: "Jean Paula",
            price: 7500.0,
        },
    ]
    },
    {
    nro_orden:"120",
    usuario:"yessi.gallo",
    fecha:"25/03/2020 21:00",
    total: 17700.0,
    modo_entrega: "Retira",
    lugar_retiro: "Abasto1",
    direccion_entrega: "Abasto Shopping",
    estado:"Pendiente",
    fecha_entrega: "",
    items: [
        {
            item_id: 1,
            size: "M",
            color: "VERDE",
            quantity: 1,
            subtotal: 5900,
            product_id: 101,
            name: "Jean Clara",
            price: 5900.0,
        },
        {
            item_id: 2,
            size: "M",
            color: "ROJO",
            quantity: 1,
            subtotal: 5900,
            product_id: 101,
            name: "Jean Clara",
            price: 5900.0,
        },
        {
            item_id: 3,
            size: "M",
            color: "AZUL",
            quantity: 1,
            subtotal: 5900,
            product_id: 101,
            name: "Jean Clara",
            price: 5900.0,
        },
    ]
    },
    {
        nro_orden:"125",
        usuario:"yessi.gallo",
        fecha:"26/03/2020 21:00",
        total: 17700.0,
        modo_entrega: "Envio",
        lugar_retiro: "",
        direccion_entrega: "Av. Cordoba 3525, 3 B",
        estado:"Pendiente",
        fecha_entrega: "",
        items: [
        {
            item_id: 1,
            size: "M",
            color: "VERDE",
            quantity: 1,
            subtotal: 5900,
            product_id: 101,
            name: "Jean Clara",
            price: 5900.0,
        },
        {
            item_id: 2,
            size: "M",
            color: "ROJO",
            quantity: 1,
            subtotal: 5900,
            product_id: 101,
            name: "Jean Clara",
            price: 5900.0,
        },
        {
            item_id: 3,
            size: "M",
            color: "AZUL",
            quantity: 1,
            subtotal: 5900,
            product_id: 101,
            name: "Jean Clara",
            price: 5900.0,
        },
    ]
    },
    {
        nro_orden:"130",
        usuario:"yessi.gallo",
        fecha:"28/03/2020 21:00",
        total: 17700.0,
        modo_entrega: "Retira",
        lugar_retiro: "Recoleta1",
        direccion_entrega: "Recoleta Mall",
        estado:"Pendiente",
        fecha_entrega: "",
        items: [
            {
                item_id: 1,
                size: "M",
                color: "VERDE",
                quantity: 1,
                subtotal: 5900,
                product_id: 101,
                name: "Jean Clara",
                price: 5900.0,
            },
            {
                item_id: 2,
                size: "M",
                color: "ROJO",
                quantity: 1,
                subtotal: 5900,
                product_id: 101,
                name: "Jean Clara",
                price: 5900.0,
            },
            {
                item_id: 3,
                size: "M",
                color: "AZUL",
                quantity: 1,
                subtotal: 5900,
                product_id: 101,
                name: "Jean Clara",
                price: 5900.0,
            },
        ]
    },
]

 
export default orderlist;


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
                colors: ["azul", "rojo", "verde"],
            }
        }, */