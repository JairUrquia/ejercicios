import React, { useState } from 'react';
import '../ejercicio2/toDolist.css'


const Tareas = () => {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
      setNuevaTarea('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      agregarTarea();
    }
  };

  const eliminarTarea = (indice) => {
    const nuevasTareas = tareas.filter((_, i) => i !== indice);
    setTareas(nuevasTareas);
  };

  const marcarCompletada = (indice) => {
    const nuevasTareas = tareas.map((tarea, i) =>
      i === indice ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  return (
    
    <div className="tareas-container">
        <h1>Ejercicio 2: contador</h1>
      <h1>Lista de Tareas</h1>
      
      <div className="input-container">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ingrese una tarea..."
        />
        <button className="agregar-button" onClick={agregarTarea}>Agregar</button>
      </div>
      <ul className="lista-tareas">
        {tareas.map((tarea, indice) => (
          <li key={indice} className={tarea.completada ? 'completada' : ''}>
            <span>{tarea.texto}</span>
            <button onClick={() => marcarCompletada(indice)}>
              {tarea.completada ? 'No Completada' : 'Completada'}
            </button>
            <button onClick={() => eliminarTarea(indice)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tareas;