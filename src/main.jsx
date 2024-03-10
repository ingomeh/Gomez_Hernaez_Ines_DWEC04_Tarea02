// Se importan las bibliotecas de React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Se importa el componente principal
import Main from './components/Main';

// Se importa el archivo de estilos 'index.css'
import "./index.css";

// Creamos el elemento raiz de React a partir del elemento con el id "root" del documento HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
// Se renderiza el componente principal (Main) en la raíz creada
root.render(<Main/>);