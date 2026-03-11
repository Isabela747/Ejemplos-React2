import { useState } from "react";
import Tarjetas from "./Tarjetas";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import Promos from "./Promos";
import { AuthProvider } from "./AuthContext";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    <div className="app-container">
      <AuthProvider>
        <Encabezado cambiarVista={setVista} />
        <Tarjetas vista={vista} chVista={setVista} />
        <Promos />
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;