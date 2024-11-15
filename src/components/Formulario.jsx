
import "./Formulario.css"; 
const Formulario = () => {
  return (
    <div className="form-container">
      <h2>Formulario de Disponibilidad</h2>
      <form>
        <label>
          Nombre: 
          <input type="text" name="nombre" />
        </label>
        <br />
        <label>
          Correo:
          <input type="email" name="correo" />
        </label>
        <br />
        <label>
          Fecha de llegada:
          <input type="date" name="fechaLlegada" />
        </label>
        <br />
        <label>
          Fecha de salida:
          <input type="date" name="fechaSalida" />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
