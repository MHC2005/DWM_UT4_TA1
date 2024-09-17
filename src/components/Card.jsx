import React from 'react';
import './Card.css'; 

const Card = ({ titulo, descripcion, persona, fechaInicio, fechaFin }) => {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <p><strong>Asignado a:</strong> {persona}</p>
      <p><strong>Fecha de inicio:</strong> {fechaInicio}</p>
      <p><strong>Fecha de fin:</strong> {fechaFin}</p>
    </div>
  );
}

export default Card;
