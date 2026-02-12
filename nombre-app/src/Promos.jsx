import Mapa from './Mapa'
import './Promos.css'
function Promos(){
    return (
        <div className="PromoContenedor">
            <h2>¡Hola bienvenido a nuestro sitio!</h2>
            <p>¡Ofertas en todos los productos!</p>
            <Mapa
                lat={19.4326}
                lng={-99.1332}
                nombre={"ServiTec Sucursal Centro"}
            />
        </div>
    )
}

export default Promos