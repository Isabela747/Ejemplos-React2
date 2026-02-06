import { useState } from "react";
import Tarjetas from "./Tarjetas"
import Encabezado from "./Encabezado"
import Footer from "./Footer"
import Promos from "./Promos"

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
    <div>
      <Encabezado cambiarVista={setVista} />
      <Tarjetas vista={vista}/>
      <Promos/>
      <Footer/>
    </div>
  )
}

export default App