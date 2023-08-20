import React, { useState } from 'react';
import '../ejercicio3/form.css';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});
  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const validarFormulario = () => {
    const errores = {};

    if (nombre.trim() === '') {
      errores.nombre = 'El nombre es requerido';
    }

    if (!correo.includes('@')) {
      errores.correo = 'Correo electrónico inválido';
    }

    if (contrasena.length < 8) {
      errores.contrasena = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const esValido = validarFormulario();

    if (esValido) {
      setFormularioEnviado(true);
    }
  };

  return (
    <div className="registro-container">
        <h1>Ejercicio 3 formulario</h1>
      <h1>Formulario de Registro</h1>
      {formularioEnviado ? (
        <div className="datos-ingresados">
          <p>Nombre: {nombre}</p>
          <p>Correo Electrónico: {correo}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            {errores.nombre && <span className="error">{errores.nombre}</span>}
          </div>
          <div className="campo">
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            {errores.correo && <span className="error">{errores.correo}</span>}
          </div>
          <div className="campo">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
            {errores.contrasena && <span className="error">{errores.contrasena}</span>}
          </div>
          <button type="submit">Registrarse</button>
        </form>
      )}
    </div>
  );
};

export default Form;