import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/nav';


import './login.css'; 


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      // Enviar la solicitud de inicio de sesión al servidor
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (response.ok) {
        alert('Inicio de sesión exitoso.');
        navigate('/carrito'); // Utiliza navigate para redirigir al carrito
      } else {
        alert('Error al iniciar sesión. Verifica tus credenciales.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };


  return (
    <>
      <Nav itemMenu="Login" />
      <main className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <section className="ContactColor w-75 m-5 p-5 contact-container">
          <h2 className="tituloContact d-flex flex-column align-items-center">Iniciar Sesión</h2>
          <form className="formulario row g-3" onSubmit={handleLoginSubmit}>
            <div className="col-md-6">
              <label htmlFor="username" className="tituloContact form-label">
                Nombre de Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="password" className="tituloContact form-label">
                Contraseña
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}/>
                <button type="button" className="btn colorOcultar btn-outline-secondary" 
                onClick={handleShowPasswordToggle}>
                   {showPassword ? 'Ocultar' : 'Mostrar'}
                   </button>

              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="botonsend-tamaño inputColor">
                Iniciar Sesión
              </button>
            </div>
          </form>
          <p className="register-link">
            ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
          </p>
        </section>
      </main>
    </>
  );
}