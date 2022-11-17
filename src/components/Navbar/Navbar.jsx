import React from 'react'
import logo from '../Images/E2.png'
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {


  /* const LogoNavbar = style.img`
    background-color: #070743,
    
    @media (min-width: 1024px){
      width: 7%,
   }

   @media (min-width: 768px){
    width: 12%,
 }
   ` */



  return (
    <>
       <nav className="navbar navbar-expand-md navbar-light fixed-top">      {/* con md permite q la letra se siga viendo hasta tablet, recien dspues de 770px cambia a burger */}
  <div className="container-fluid">          {/* container-fluid permite q se extienda al 100% del ancho */}
    <img src={logo} width="50" alt="logo de la pagina web"  />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarToggler">
      <ul className="navbar-nav ms-auto">      {/* ms-auto sirve p enviar a la derecha los link */}
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">Sobre mí</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Habilidades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
}

export default Navbar;