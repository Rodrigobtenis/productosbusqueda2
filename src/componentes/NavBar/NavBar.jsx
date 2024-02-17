import React from 'react'
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
      <h1 className="navbar-logo">Insumos by Estudio Datri</h1>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#" className="navbar-link">Inicio</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Productos</a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
);
};

export default NavBar