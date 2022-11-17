import React from 'react'
import Eli from '../Images/Eli.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../Css/About.css";

const About = () => {
  return (
    <>
      <section className="hero container">
        <div className="container-image-about">
         <div className="col">
        <h3 className="title-hero">SOBRE MÍ</h3>
          <div>
            <p>Soy Front-End developer, a partir de mi formación como developer en Laboratoria he podido desarrollar páginas interactivas que resuelven problemas reales. Me apasiona desarrollar productos enfocados en el usuario, con mucha curiosidad por aprender nuevas tecnologías, con conocimientos en metodología ágiles (SCRUM), experiencia de usuario, lista para recibir y dar feedback, solución de problemas, comunicación asertiva. Mi objetivo es especializarme y tener un perfil de Full Stack, estoy convencida de que el trabajo en equipo es la mejor forma de avanzar en cualquier proyecto.</p>
          </div>
          <button type="button" className="container-btn">
                <a className="btn-cv" href="" download target="_blank">DESCARGAR CV </a>
          </button>
          </div>
          <div className="col-md-3 container-image">
            <img src={Eli} alt="Foto Elizabeth Ch" className="image-hero"/>
          </div>

          </div>
          <div className="col container-networks-social">
            <div className="social-icons">
            <a href="https://github.com/ElizabethChillcce" target="_blank" rel="noreferrer"><FaGithub/></a>
            </div>
            <div className="social-icons">
            <a href="https://www.linkedin.com/in/elizabeth-chillcce-95b13523b/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            </div>
        </div>

              
              {/* <i class="bi bi-windows"></i>   este es un icono de bootstrap */}
       </section>
        
    </>
  )
}

export default About