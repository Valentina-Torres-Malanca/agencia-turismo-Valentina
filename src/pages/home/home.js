import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import './home.css';
import Nav from '../../components/Nav/nav';  

export default function Home() {
    return (
      <Fragment>
        <div className="home-container">
          <Nav/>
       <h1 className='title titulo-principal'>Bienvenido a Valentina Agencia de Viajes</h1>
        <h2 className='title titulo-secundario'>Tu sueño esta al alcance de un click</h2>
                <p className='parrafo text-center p2'>Podes reservar los mejores lugares del mundo para ir a conocer!!</p>
                <p className='parrafo text-center p3'>No te quedes sin tu cupo</p>
                <p className='parrafo text-center p3'>Dreams comes true !</p>
                <h3 className='titulo-secundario'>Let's go!</h3>
                <div className='container-botones'>
                <Link to="/cities" className='boton'>Cities</Link>
                <Link to="/Contact" className='boton'>Contact</Link>
                <Link to="/Register" className='boton'>Register</Link>
                 <div style={{ marginBottom: '20px' }}></div>
                 <div className='container-botones'>
                  <Link to="/login" className='boton'>Iniciar Sesión</Link>
                  <Link to="/ShoppingCart" className='boton'>Ir al Carrito</Link>
                   </div>


        </div>
    </div>
    </Fragment>


  
  );
}




