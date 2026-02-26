import React, { useState, useEffect } from 'react'
import api from './Services/api'
import './Carrito.css'

function Carrito() {
	const [carts, setCarts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const obtenerCarritos = async () => {
			try {
				const response = await api.get('carts')
				setCarts(response.data)
			} catch (error) {
				console.error('Error al obtener los carritos:', error)
			} finally {
				setLoading(false)
			}
		}
		obtenerCarritos()
	}, [])

	if (loading) {
		return <p>Cargando carritos...</p>
	}

	return (
		<div className="contenedorCarrito">
			<h1>Carritos</h1>
			{carts.map((cart) => {
				const totalProductos = cart.products?.reduce((sum, p) => sum + p.quantity, 0) || 0
				const fecha = new Date(cart.date).toLocaleDateString()
				return (
					<div key={cart.id} className="cartItem">
						<p><strong>ID:</strong> {cart.id}</p>
						<p><strong>Usuario:</strong> {cart.userId}</p>
						<p><strong>Fecha:</strong> {fecha}</p>
						<p><strong>Productos:</strong> {totalProductos}</p>
						{cart.products && cart.products.length > 0 && (
							<div className="productsList">
								<h4>Detalles de productos</h4>
								{cart.products.map((p) => (
									<div key={p.productId} className="productEntry">
										<span>ID #{p.productId}</span> &times; {p.quantity}
									</div>
								))}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}

export default Carrito;