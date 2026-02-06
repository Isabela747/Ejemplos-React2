
import './AcercaDe.css'
import vete from './assets/vete.png';

export default function AcercaDe() {
  return (
    <div className="aboutSection">
      <h2>Acerca de nosotros</h2>
      <p>
        En nuestra veterinaria trabajamos con amor, compromiso y respeto por cada mascota que llega a nuestras manos. Nuestro equipo está formado por profesionales apasionados por el bienestar animal, dedicados a brindar atención médica de calidad, orientación responsable y un trato cálido tanto a las mascotas como a sus familias. Creemos que cada animal merece una vida sana y feliz, y por eso estamos aquí para cuidarlos en cada etapa de su vida.
      </p>
      <img src={vete} alt="Equipo" className="sectionImage" />
    </div>
  );
}
