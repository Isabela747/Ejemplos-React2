import { useState } from "react";
import "./Login.css";

function Login() {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", usuario);
    console.log("Password:", password);
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