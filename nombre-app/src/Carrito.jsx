import React, { useState, useEffect } from 'react'
import api from './Services/api'
import './Carrito.css'

function Carrito() {

	const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerOrdenes = async () => {
            try {
                const response = await api.get("carts");
                setOrdenes(response.data);
            } catch (error) {
                console.error('Error al obtener las órdenes:', error);
            } finally {
                setLoading(false);
            }
        };
        obtenerOrdenes();
    }, []);

    if (loading) {
        return <p>Cargando Pedidos...</p>
    }

    return(
        <div className="contenedorCarrito">
            <h1>Carrito de Compras</h1>
            <p>Aquí podrás ver los pedidos y sus productos.</p>

            {ordenes.map((orden) => (
                    <div key={orden.id} className="orden-container">
                    <h3>Pedido #{orden.id}</h3>
                    <p><strong>Usuario:</strong> {orden.userId}</p>
                    <p><strong>Fecha:</strong> {new Date(orden.date).toLocaleDateString()}</p>
                    
                    <h4>Productos:</h4>
                    <ul>
                        {orden.products.map((producto) => (
                            <li key={producto.productId}>
                                Producto ID: {producto.productId} - Cantidad: {producto.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Carrito;