import Mapa from './Mapa';
import './Sucursales.css'
function Sucursales() {
    const sedes = [
        { id: 1, ciudad: "Sonora", direccion: "Calle Reforma 123", tel: "+52 7822543107", mapa: "https://maps.google.com", lat: 19.438872567132496, lng: -99.15966103461886, nombre: "Sucursal SONORA" },
        { id: 2, ciudad: "Chiapas", direccion: "Av. Siempre Viva 456", tel: "+52 7461301397", mapa: "https://maps.google.com", lat: 19.438872567132496, lng: -99.15966103461886, nombre: "Sucursal CHIAPAS" },
        { id: 3, ciudad: "Durango", direccion: "Calle pricipal 500", tel: "+52 682346 5022", mapa: "https://maps.google.com", lat: 19.438872567132496, lng: -99.15966103461886, nombre: "Sucursal DURANGO" },
        { id: 4, ciudad: "México", direccion: "Calle centro 202", tel: "+34 912 345 678", mapa: "https://maps.google.com", lat: 19.438872567132496, lng: -99.15966103461886, nombre: "Sucursal MÉXICO" }
    ];
    return (
        <div className="classSuc">
            <h2>Nuestras Sedes</h2>
            <div className="classSedes">
                {sedes.map((sede) => (
                    <address key={sede.id}>
                        <h3>{sede.ciudad}</h3>
                        <p> {sede.direccion}</p>
                        <p> <strong>{sede.tel}</strong></p>
                        <Mapa
                            lat={sede.lat}
                            lng={sede.lng}
                            nombre={sede.nombre} />
                        <a
                            href={sede.mapa}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver en Google Maps →
                        </a>
                    </address>
                ))}
            </div>
        </div>
    )
}
export default Sucursales