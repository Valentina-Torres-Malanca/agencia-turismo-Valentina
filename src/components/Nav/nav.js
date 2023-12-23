import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

export default function Nav({ itemMenu }) {
  return (
    <nav className="container-fluid NavFondo">
      <div className="navFondo row align-items-center">
        <h1 className="col-12 col-lg-4 text-center text-lg-start">
          <NavLink to="/home" className="NavHome text-decoration-none" exact>
            Valentina Agencia de Turismo
          </NavLink>
        </h1>

        <div className="col-12 col-lg-8 text-center text-lg-end mt-3 mt-lg-0">
          <div className="menu-container">
            <NavLink to="/cities" className={`boton`} activeClassName="active">
              Cities
            </NavLink>
            <NavLink to="/contact" className={`boton`} activeClassName="active">
              Contact
            </NavLink>
            <NavLink to="/register" className={`boton`} activeClassName="active">
              Register
            </NavLink>
            <NavLink to="/login" className={`boton`} activeClassName="active">
              Login
            </NavLink>
            <NavLink to="/ShoppingCart" className={`boton`} activeClassName="active">
              Ir al Carrito
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
