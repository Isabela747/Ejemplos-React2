import husky from './assets/husky.jpg'
import golden from './assets/golden.png'
import rott from './assets/rott.png'
import './Tarjetas.css'
import './Contacto.css'
import PropTypes from 'prop-types'
import AcercaDe from './AcercaDe'
import Productos from './Productos'
import Galeria from './Galeria'
import Sucursales from './Sucursales'

function Tarjetas({vista}){
    const vistas={
        Inicio: <Inicio />,
        AcercaDe: <AcercaDe />,
        Productos: <Productos />,
        Galeria: <Galeria />,
        Sucursales: <Sucursales />,
        Contacto: <Contacto />
    }
    return (
        <div className='ContenedorDiv'>
            {vistas[vista] || <Inicio />}
        </div>
    )
}
function Inicio() {
  return (
    <>
      <TarjetaComponent 
        imagen={husky} 
        titulo="Husky Siberiano"
        descripcion="Los huskys son perritos energéticos y amigables, conocidos por sus hermosos ojos azules y temperamento leal."
      />
      <TarjetaComponent 
        imagen={golden} 
        titulo="Golden Retriever"
        descripcion="Los golden retriver son perritos inteligentes y cariñosos, perfectos como compañeros familiares. Excelentes nadadores."
      />
      <TarjetaComponent 
        imagen={rott} 
        titulo="Rottweiler"
        descripcion="Los rottweiler son perritos fuertes y protectores, leales a su familia. Requieren educación y socialización temprana."
      />
    </>
  );
}

function Contacto() {
  return (
    <div className='contactoContainer'>
      <h2>Contacto</h2>
      <form className='contactoForm'>
        <div className='formGroup'>
          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div className='formGroup'>
          <label>Apellidos:</label>
          <input type="text" placeholder="Apellidos" />
        </div>

        <div className='formGroup'>
          <label>Email:</label>
          <input type="email" placeholder="tu@email.com" />
        </div>
        <div className='formGroup'>
          <label>Teléfono:</label>
          <input type="tel" placeholder="+52 746 130 1397" />
        </div>
       
        <button type="submit" className='submitBtn'>Enviar</button>
      </form>
    </div>
  );
}
function TarjetaComponent({imagen, titulo = "Titulo prueba", descripcion = "Hola, esta es una targeta de prueba para utilizar en el componente como información de ejemplo presentada para todos"}){
    return(
        <div className='TarjetaDiv'>
            <img src={imagen} alt={titulo}/>
            <h3>{titulo}</h3>
            <p>{descripcion}</p>
            <a href='#'>Ver más</a>
        </div>
    )
}

Tarjetas.propTypes = {
  vista: PropTypes.string.isRequired
};

export default Tarjetas