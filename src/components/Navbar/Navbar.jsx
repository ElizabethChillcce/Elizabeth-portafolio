import React from 'react'
import logo from '../Images/E2.png'
import style from "styled-components";
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
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
              <img src={logo} className="img-fluid" width="7%" alt="logo"  />
              <button className="navbar-toggler btn-menu" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">     {/* aqui agregue el clas btn-menu */}
              <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ms-auto">                     {/* ms-auto sirve p enviar a la derecha los link */}
                  <li className="nav-item">
                    <a className="nav-link" >
                      <Link  to="/" className="linkStyle">Inicio</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">
                      <Link  to="/about" className="linkStyle">Sobre mi</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >
                      <Link  to="/projects" className="linkStyle">Proyectos</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >
                      <Link  to="/skills" className="linkStyle">Habilidades</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" >
                      <Link  to="/contact" className="linkStyle">Contacto</Link>
                    </a>
                  </li>
                </ul>
    </div>
  </div>
</nav>






    </>
  );
}

export default Navbar;