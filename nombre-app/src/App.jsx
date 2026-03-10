import { useState } from "react";
import Tarjetas from "./Tarjetas";
import Encabezado from "./Encabezado";
import Footer from "./Footer";
import Promos from "./Promos";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";

function App() {
  const [vista, setVista] = useState("Inicio");

  return (
    
      <div className="app-container">
        <AuthProvider>
        <Encabezado cambiarVista={setVista} />
        <Tarjetas vista={vista} />
        <Promos />
        <Login/>
         </AuthProvider>
        <Footer />
      </div>
   
  );
}

export default App;