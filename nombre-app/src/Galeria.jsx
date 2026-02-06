import husky from './assets/husky.jpg'
import cafesito from './assets/cafesito.jpg'
import perrito from './assets/perrito.jpg'
import golden from './assets/golden.png'
import rott from './assets/rott.png'
import belga from './assets/belga.png'
import './Galeria.css'

export default function Galeria() {
  return (
    <div className="galeriaSection">
      <h2>Galería</h2>
      <div className="galeriaGrid">
        <img src={husky} alt="foto1" />
        <img src={cafesito} alt="foto2" />
        <img src={perrito} alt="foto3" />
        <img src={golden} alt="golden" />
        <img src={rott} alt="rottweiler" />
        <img src={belga} alt="belga" />
      </div>
    </div>
  );
}
