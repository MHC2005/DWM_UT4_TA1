// App.js
import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="app">
      <Card
        titulo="Proyecto A"
        descripcion="Desarrollo de una aplicación web."
        persona="Mateo"
        fechaInicio="2024-09-01"
        fechaFin="2024-09-30"
      />
      <Card
        titulo="Proyecto B"
        descripcion="Implementación de un sistema de seguridad."
        persona="Cecilia"
        fechaInicio="2024-10-01"
        fechaFin="2024-10-31"
      />
      <Card
        titulo="Proyecto C"
        descripcion="Análisis de datos para un cliente."
        persona="Fabio"
        fechaInicio="2024-11-01"
        fechaFin="2024-11-15"
      />
    </div>
  );
}

export default App;

