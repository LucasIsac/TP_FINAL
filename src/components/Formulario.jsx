
import { useState } from 'react';
import "./Formulario.css"; 

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      nombre,
      apellido,
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
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
