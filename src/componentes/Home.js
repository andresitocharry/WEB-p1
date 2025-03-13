import { useEffect, useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/homep.json?key=65a5a440")
      .then((res) => res.json())
      .then((resultado) => setDatos(resultado))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  if (!datos) return <p>Cargando...</p>;

  return (
    <div className="contenedor" style={{ backgroundImage: `url(${datos.fondo})` }}>
      <div className="tarjeta">
        {Object.entries(datos)
          .filter(([clave]) => clave !== "fondo")
          .map(([clave, url]) => (
            <div key={clave} className="opcion">
              <img src={url} alt={clave} />
              <p>{clave.toUpperCase()}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
