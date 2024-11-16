
import { useState } from 'react';
import "./Formulario.css"; 

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [tarjetaNumero, setTarjetaNumero] = useState('');
  const [tarjetaNombre, setTarjetaNombre] = useState('');
  const [tarjetaFechaExp, setTarjetaFechaExp] = useState('');
  const [tarjetaCVV, setTarjetaCVV] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      nombre,
      apellido,
      fechaInicio,
      fechaFin,
      tarjetaNumero,
      tarjetaNombre,
      tarjetaFechaExp,
      tarjetaCVV,
    };

    try {
      // Usando fetch para enviar los datos al backend
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Enviamos los datos como JSON
      });

      if (response.ok) {
        alert('Usuario guardado exitosamente');
      } else {
        throw new Error('Hubo un error al guardar el usuario');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Hubo un error al guardar el usuario');
    }
  };

  return (
    <div className="form-container">
      <h2>Formulario de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fecha de inicio:
          <input
            type="date"
            name="fechaInicio"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fecha de fin:
          <input
            type="date"
            name="fechaFin"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
          />
        </label>
        <br />
        {/* Campos de tarjeta */}
        <label>
          Número de tarjeta:
          <input
            type="text"
            name="tarjetaNumero"
            value={tarjetaNumero}
            onChange={(e) => setTarjetaNumero(e.target.value)}
            placeholder="XXXX XXXX XXXX XXXX"
          />
        </label>
        <br />
        <label>
          Nombre en la tarjeta:
          <input
            type="text"
            name="tarjetaNombre"
            value={tarjetaNombre}
            onChange={(e) => setTarjetaNombre(e.target.value)}
          />
        </label>
        <br />
        <label>
          Fecha de vencimiento:
          <input
            type="month"
            name="tarjetaFechaExp"
            value={tarjetaFechaExp}
            onChange={(e) => setTarjetaFechaExp(e.target.value)}
          />
        </label>
        <br />
        <label>
          CVV:
          <input
            type="text"
            name="tarjetaCVV"
            value={tarjetaCVV}
            onChange={(e) => setTarjetaCVV(e.target.value)}
            placeholder="XXX"
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;

