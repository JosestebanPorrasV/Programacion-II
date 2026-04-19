import React, { useState } from 'react';
import {database} from './firebase';
import { ref, push, set } from 'firebase/database';

function App() {
  const [numero, setNumero] = useState("");
  const [texto, setTexto] = useState("");
  const [errorNumero, setErrorNumero] = useState("");
  const [errorTexto, setErrorTexto] = useState("");

  console.log("Josesteban Porras Villarreal");

  const validarNumero = (valor) => {
  setNumero(valor);
  if (valor ==="" || isNaN(valor)) {
    setErrorNumero("El número es obligatorio y debe ser un valor numérico.");
  } else {
    setErrorNumero("");
  }
};
 const validarTexto = (valor) => {
    setTexto(valor);
    if (valor.length < 5) {
      setErrorTexto("El texto debe tener mínimo 5 caracteres");
    } else {
      setErrorTexto("");
    }
  };
  const handleAceptar = () => {
  if (errorNumero || errorTexto || numero === "" || texto === "") return;

  const coleccion = ref(database, "PorrasVillarreal_Josesteban");
  push(coleccion, {
    numero: numero,
    texto: texto
  });

  setNumero("");
  setTexto("");
  setErrorNumero("");
  setErrorTexto("");
  };

  return (
    <div style ={{ padding: "40px", fontFamily:"Arial"}}>
      <h1>Proyecto 2 Josesteban Porras Villarreal</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <label >Número:</label>
         <br />
         <input
          type="text"
          value={numero}
          onChange={(e) => validarNumero(e.target.value)}
        />
        {errorNumero && <p style={{ color: "red" }}>{errorNumero}</p>}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <label>Texto (mínimo 5 caracteres):</label>
        <br />
        <input
          type="text"
          value={texto}
          onChange={(e) => validarTexto(e.target.value)}
        />
        {errorTexto && <p style={{ color: "red" }}>{errorTexto}</p>}
      </div>
      <button onClick={handleAceptar}>Aceptar</button>
    </div>
  );

} 

export default App;