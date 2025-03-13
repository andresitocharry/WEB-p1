import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login2.css";

const Login2 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 5 || password.length > 8) {
      alert("La contraseña debe tener entre 5 y 8 caracteres");
      return;
    }

    try {
      const response = await fetch("https://my.api.mockaroo.com/users.json?key=65a5a440");
      const users = await response.json();
      console.log(users);
      const user = users.find((u) => u.username === username);
      if (user) {
        alert(`Bienvenido, ${user.name}!`);
        navigate("/home");
      } else {
        alert("Usuario no encontrado");
      }
    } catch (error) {
      alert("Error al conectar con la API");
    }
  };

  return (
    <div className="login-container">
      <div className="izquierda"></div>

      <div className="derecha">
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            className="custom-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            className="custom-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login2;
