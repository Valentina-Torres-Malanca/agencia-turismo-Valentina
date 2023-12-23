import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/nav';
import Login from '../Login/login';
import ShoppingCart from '../shoppingCart/ShoppingCart';

import './register.css'; // Asegúrate de tener el archivo CSS correspondiente

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();

    try {
      // Enviar la solicitud de registro al servidor
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          firstName,
          lastName,
          email,
          phone,
        }),
      });

      if (response.ok) {
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
      } else {
        alert('Error al registrar. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error('Error al registrar:', error);
      alert('Error al registrar. Inténtalo de nuevo.');
    }
  };

  return (
    <>
      <Nav itemMenu="Register" />
      <main className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <section className="ContactColor w-75 m-5 p-5 contact-container">
          <h2 className="tituloContact d-flex flex-column align-items-center">Registro y Reserva</h2>
          <form className="formulario row g-3" onSubmit={handleRegistrationSubmit}>
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
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleShowPasswordToggle}
                >
                  {showPassword ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="firstName" className="tituloContact form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="tituloContact form-label">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="tituloContact form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="tituloContact form-label">
                Teléfono
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="col-12">
              <button type="submit" className="botonsend-tamaño inputColor">
                Registrarse y Reservar
              </button>
            </div>
          </form>
          <p className="register-link">
            ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
          </p>
        </section>
      </main>
    </>
  );
}
