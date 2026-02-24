import React, { useState } from 'react';
import api from './Services/api';
import './RegistrarProducto.css';

function RegistrarProducto() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = {
            title,
            price: parseFloat(price) || 0,
            description,
            category,
            image,
        };

        try {
            setLoading(true);
            const respuesta = await api.post('/products', nuevoProducto);
            console.log('Producto registrado:', respuesta.data);
            alert('¡Producto guardado exitosamente!');
            setTitle('');
            setPrice('');
            setDescription('');
            setCategory('');
            setImage('');
        } catch (error) {
            console.error('Error al registrar el producto:', error);
            alert('Error al guardar el producto');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contenedorRegistro">
            <h1>Registrar Producto</h1>
            <form className="formRegistro" onSubmit={handleSubmit}>
                <input
                    className="inputRegistro"
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="inputRegistro"
                    type="text"
                    placeholder="Categoría"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <input
                    className="inputRegistro"
                    type="number"
                    placeholder="Precio"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    className="inputRegistro"
                    type="text"
                    placeholder="Imagen (URL)"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                <textarea
                    className="inputRegistro textareaRegistro"
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button className="btnRegistro" type="submit" disabled={loading}>
                    {loading ? 'Guardando...' : 'Registrar'}
                </button>
            </form>
        </div>
    );
}

export default RegistrarProducto;
