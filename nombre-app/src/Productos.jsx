import pro from './assets/pro.png'
import produ from './assets/produ.png'
import productos from './assets/productos.png'
import './Productos.css'

export default function Productos() {
  return (
    <div className="productosSection">
      <h2>Productos</h2>
      <div className="productosGrid">
        <div className="productoCard">
          <img src={pro} alt="pro" />
          <h3>Capsulas</h3>
          <p>Pastillas para el mal de estómago tanto para perritos como gatos.</p>
          <button>Comprar</button>
        </div>
        <div className="productoCard">
          <img src={produ} alt="Produ" />
          <h3>Pastillas</h3>
          <p>Pastillas para la tos de cualquier animalito, ayuda a mejorar su salud.</p>
          <button>Comprar</button>
        </div>
        <div className="productoCard">
          <img src={productos} alt="Accesorio" />
          <h3>Accesorios</h3>
          <p>Calidad y diseño en cada producto ´para tus mascotas.</p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
}
