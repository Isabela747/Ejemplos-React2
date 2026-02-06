import miImagen from './assets/Logito.png';
import facebook from './assets/facebook.png';
import instagram from './assets/insta.png';
import x from './assets/wass.png';
import youtube from './assets/youtube.png';
import linkedin from './assets/link.png';
import './Encabezado.css'
import PropTypes from 'prop-types';

function Encabezado({cambiarVista}){
    return (
        <div className='encabezadoDiv'>
            <Logotipo />
            <Menu cambiarVista={cambiarVista}/>
            <Redes />
        </div>
    )
}

function Logotipo(){
    return (
        <div className='logoDiv'>
            <img src={miImagen} alt='Logotipo'/>
        </div>
    )
}

function Menu({cambiarVista}){
    return (
        <div className='menuDiv'>
            <ul>
                <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
                <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
                <li onClick={() => cambiarVista("Productos")}>Productos</li>
                <li onClick={() => cambiarVista("Galeria")}>Galeria</li>
                <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
                <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
            </ul>
        </div>
    )
}

function Redes(){
    return (
        <div className='redesDiv'>
            <ul>
                <li><a href=''><img src={facebook} alt='Logotipo'/></a></li>
                <li><a href=''><img src={instagram} alt='Logotipo'/></a></li>
                <li><a href=''><img src={x} alt='Logotipo'/></a></li>
                <li><a href=''><img src={youtube} alt='Logotipo'/></a></li>
                <li><a href=''><img src={linkedin} alt='Logotipo'/></a></li>
            </ul>
        </div>
    )
}
Menu.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};
export default Encabezado