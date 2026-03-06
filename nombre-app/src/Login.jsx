import { useState } from "react";
import "./Login.css";
import {useAuth} from './AuthContext'
import 



 const Login =({}) => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
   const credenciales = {usuario, password}
  

  try{
    const respuesta = await api.post('/auth/Login/', credenciales);
    console.log ("Respuesta del servidor", respuesta.data.token);
    if (respuesta.data.token){
      Login(respuesta.data.token);
      alert('Autenticacion autorizada');
    }else{
      alert('Credenciales invalidas');

    }

  }catch (error){
    alert ('Error', error);
    console.error("Error", error);
  }

  };



  const handleCancel = () => {
    setUsuario("");
    setPassword("");
  };



  return (
    <div className="login-container">

      <form onSubmit={handleSubmit}>

        <div className="icono">
          
        </div>

        <h2>LOGIN</h2>

        <label>
          Usuario
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Ingresa tu usuario"
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </label>

        <div className="botones">
          <button type="submit">Iniciar</button>
          <button type="button" onClick={handleCancel}>Cancelar</button>
        </div>

        <div className="links">
          <a href="#">Recordar contraseña</a>
          <a href="#">Registrar</a>
        </div>

      </form>

    </div>
  );
}



export default Login;