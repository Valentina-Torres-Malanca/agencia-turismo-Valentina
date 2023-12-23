import React, { useState, useEffect } from 'react';

import Nav from '../../components/Nav/nav';
import './contact.css';

export default function Contact() {


  const [selectedCity, setSelectedCity] = useState('');
  const [selectedAttraction, setSelectedAttraction] = useState('');
  const [numAdults, setNumAdults] = useState(0);
  const [numMinors, setNumMinors] = useState(0);
  const [prices, setPrices] = useState({
    torreEiffel: { adult: 0, minor: 0 },
    louvre: { adult: 0, minor: 0 },
    versalles: { adult: 0, minor: 0 },
    arcoTriunfo: { adult: 0, minor: 0 },
    notreDame: { adult: 0, minor: 0 },
    parkGuell: { adult: 0, minor: 0 },
    batllo: { adult: 0, minor: 0 },
    palau: { adult: 0, minor: 0 },
    sagradaFamilia: { adult: 0, minor: 0 },
    coliseo: { adult: 0, minor: 0 },
    foroRomano: { adult: 0, minor: 0 },
    pantheon: { adult: 0, minor: 0 },
    vaticano: { adult: 0, minor: 0 },
    fontanaDiTrevi: { adult: 0, minor: 0 },
    duomo: { adult: 0, minor: 0 },
    uffizi: { adult: 0, minor: 0 },
    laAcademia: { adult: 0, minor: 0 },
  });
  const [totalPrice, setTotalPrice] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedAttraction('');
  };

  const handleAttractionChange = (event) => {
    setSelectedAttraction(event.target.value);
  };

  const handleNumAdultsChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumAdults(value >= 0 ? value : 0);
  };

  const handleNumMinorsChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setNumMinors(value >= 0 ? value : 0);
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

  useEffect(() => {
    const newPrices = {
      torreEiffel: { adult: 50, minor: 25 },
      louvre: { adult: 40, minor: 20 },
      versalles: { adult: 35, minor: 18 },
      arcoTriunfo: { adult: 30, minor: 15 },
      notreDame: { adult: 25, minor: 12.5 },
      parkGuell: { adult: 45, minor: 22.5 },
      batllo: { adult: 35, minor: 17.5 },
      palau: { adult: 40, minor: 20 },
      sagradaFamilia: { adult: 50, minor: 25 },
      coliseo: { adult: 40, minor: 20 },
      foroRomano: { adult: 30, minor: 15 },
      pantheon: { adult: 25, minor: 12.5 },
      vaticano: { adult: 55, minor: 27.5 },
      fontanaDiTrevi: { adult: 30, minor: 15 },
      duomo: { adult: 40, minor: 20 },
      uffizi: { adult: 35, minor: 17.5 },
      laAcademia: { adult: 40, minor: 20 },
    };
    setPrices(newPrices);
  }, []);

  useEffect(() => {
    const attractionPrice = prices[selectedAttraction] || { adult: 0, minor: 0 };
    const total = numAdults * attractionPrice.adult + numMinors * attractionPrice.minor;
    setTotalPrice(total);
  }, [selectedAttraction, numAdults, numMinors, prices]);

  return (
    <>
      <Nav itemMenu="Contact" />
      <main className="w-100 vh-100 d-flex align-items-center justify-content-center">
        <section className="ContactColor w-75 m-5 p-5 contact-container">
          <h2 className="tituloContact d-flex flex-column align-items-center">Reserva con Nosotros!!</h2>
          <h3 className="tituloContact titulosecundario">Deja un mensaje para que te podamos contactar.</h3>
          <form className="formulario row g-3" action="/your-server-endpoint" method="post">
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
            <div className="col-md-6">
              <label htmlFor="numAdults" className="tituloContact form-label">
                Adultos (+18)
              </label>
              <input
                type="number"
                className="form-control"
                id="numAdults"
                name="numAdults"
                value={numAdults}
                onChange={handleNumAdultsChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="numMinors" className="tituloContact form-label">
                Menores (-18)
              </label>
              <input
                type="number"
                className="form-control"
                id="numMinors"
                name="numMinors"
                value={numMinors}
                onChange={handleNumMinorsChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="city" className="tituloContact form-label">
                Ciudad de interés
              </label>
              <select
                className="form-select"
                id="city"
                name="city"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">Selecciona una ciudad</option>
                <option value="paris">París</option>
                <option value="rome">Roma</option>
                <option value="florence">Florencia</option>
                <option value="barcelona">Barcelona</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="attraction" className="tituloContact form-label">
                Atracciones de interés
              </label>
              <select
                className="form-select"
                id="attraction"
                name="attraction"
                value={selectedAttraction}
                onChange={handleAttractionChange}
              >
                <option value="">Selecciona una atracción</option>
                {selectedCity === 'paris' && (
                  <>
                    <option value="torreEiffel">Torre Eiffel</option>
                    <option value="louvre">Louvre</option>
                    <option value="versalles">Versalles</option>
                    <option value="arcoTriunfo">Arco Triunfo</option>
                    <option value="notreDame">Notre Dame</option>
                  </>
                )}
                {selectedCity === 'rome' && (
                  <>
                    <option value="coliseo">Coliseo</option>
                    <option value="foroRomano">Foro Romano</option>
                    <option value="pantheon">Pantheon</option>
                    <option value="vaticano">Vaticano</option>
                    <option value="fontanaDiTrevi">Fontana di Trevi</option>
                  </>
                )}
                {selectedCity === 'florence' && (
                  <>
                    <option value="duomo">Duomo</option>
                    <option value="uffizi">Uffizi</option>
                    <option value="laAcademia">La Academia</option>
                  </>
                )}
                {selectedCity === 'barcelona' && (
                  <>
                    <option value="parkGuell">Park Güell</option>
                    <option value="batllo">Batlló</option>
                    <option value="palau">Palau</option>
                    <option value="sagradaFamilia">Sagrada Familia</option>
                  </>
                )}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="message" className="Message-form form-label">
                Mensaje
              </label>
              <textarea id="message" name="message" className="w-100"></textarea>
            </div>
            <div className="boton-send">
              <input className="botonsend-tamaño inputColor" type="submit" value="Send" />
            </div>
            <div className="col-12">
              <label htmlFor="price" className="tituloContact form-label">
                Precio Total: {totalPrice} USD
              </label>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}