
import "./InicioSesion.css";

const InicioSesion = () => {
  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <label>
          Correo:
          <input type="email" name="correo" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" name="contrasena" />
        </label>
        <br />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default InicioSesion;
