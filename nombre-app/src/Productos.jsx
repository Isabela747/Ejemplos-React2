import { useEffect, useState } from 'react';
import api from './Services/api'
import './Productos.css'

function Productos() {
 
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await api.get('/products');
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      } finally {
        setLoading(false);
      }
    };
    obtenerProductos();
  },[]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <main className='classMain'>
        <header>
          <h1>Nuestro Catalogo</h1>
        </header>

        <section className='classSection'>

        {productos.map((producto)=>(
          <article key={producto.id} className='classArticle'>
            <p>{producto.title}</p>
            <p>{producto.description}</p>
            <img 
              src={producto.image}
              alt={producto.title} 
              className='classImg'
            />
            <p>${producto.price}</p>
          
          </article>

        ))}

        </section>

      </main>
    </div>
  )

}

export default Productos;
