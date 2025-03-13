import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./componentes/Home.js"; // Importa Home correctamente
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos Bootstrap

import Login2 from "./componentes/Login2.js"; // Importa Login2 

function App() {
  return (
    <Router>
      <Routes>
        {/* Página de Login (cuando el usuario entra a "/") */}
        <Route path="/" element={<Login2 />} />
        <Route path="/home" element={<Home />} /> {/* Home se muestra en /home */}
      </Routes>
    </Router>
  );
}

export default App;
