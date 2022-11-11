import React from 'react'
import Eli from '../Images/Eli.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="container-about">
        <h2>SOBRE MÍ</h2>
        <div>
          <p>Soy Front-End developer, a partir de mi formación como developer en Laboratoria he podido desarrollar páginas interactivas que resuelven problemas reales. Me apasiona desarrollar productos enfocados en el usuario, con mucha curiosidad por aprender nuevas tecnologías, con conocimientos en metodología ágiles (SCRUM), experiencia de usuario, lista para recibir y dar feedback, solución de problemas, comunicación asertiva. Mi objetivo es especializarme y tener un perfil de Full Stack, estoy convencida de que el trabajo en equipo es la mejor forma de avanzar en cualquier proyecto.</p>
        </div>
         
         <div>
            <img src={Eli} alt="logo"/> 
         </div>
         <div>
            <a><a href="https://github.com/ElizabethChillcce" target="_blank" rel="noreferrer"><FaGithub/></a>
              
            </a>

            <a href="https://www.linkedin.com/in/elizabeth-chillcce-95b13523b/" target="_blank" rel="noreferrer"><FaLinkedin/></a> 
        </div>

              <li className="navbar-brand">
                <a className="btn-cv" href="" download target="_blank">DESCARGAR CV </a>
              </li>
      </section>
        
    </>
  )
}

export default About