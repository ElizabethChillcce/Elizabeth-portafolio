import React from 'react'
import cover from '../Images/cover.png'
/* import './HomeStyle.css'; */
import style from "styled-components";
import About from "./About";


const Home = () => {


    const HomeStyle = style.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
     }
    `
    const Title = style.h1`
    fond-size: 1.8rem;
    font-family: font-file-82132;
    font-weight: 600;
    color: #19ad99;

    @media only screen and (min-width: 768px) {
      font-weight: 900;
      padding-top: 0;
      font-size: 3rem;
    }
    `

   const ContainerTitleParagraph= style.div`
   display: flex;
   flex-direction: column;
   align-content: center;
   align-items: center;
   margin-top: 100px;
   color: white;

   @media only screen and (min-width: 768px) {
    background-color: green;
     margin-top: 20%;
   }
   `

    /* const Paragraph = style.p`
    fond-size: 1.4rem;
    font-family: "Open Sans",sans-serif;
    color: white;
    padding-top: 5px;
    padding-right: 40%;
    font-size: 15px;

    @media only screen and (min-width: 768px) {
     font-size: 20px;
     padding-right: 46%;
    }
    ` */
    const ContainerImagen = style.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;

    @media only screen and (min-width: 768px) {
      background-color: red;
      margin-top: 15%;
      width: 37%;
    }
    `

    const Button = style.button`
    cursor: pointer;
    font-size: 1em;
    margin-top: 1%;
    margin-bottom: 30px;
    border: 2px solid #19ad99;
    color: #19ad99;
    background-color: rgba(254, 171, 222, 1);
    font-weight: bold;
    border-radius: 7px;
    transition: all .3s ease;
    padding: 6px 12px;
    text-transform: uppercase;
    margin-left: 29%;

    &:hover {
        background: #19ad99;
        color: white;
    }

    @media only screen and (min-width: 768px) {
      margin-top: 8%;
      padding: 10px 25px;
     }
    `
   const ImageCover = style.img `
   width: 80%;

    @media only screen and (min-width: 768px) {
      width: 80%;
     }
   `

    return (
    <>
    <HomeStyle>
        <ContainerTitleParagraph>
              <h2>Hola soy, </h2>
              <Title>Elizabeth Chillcce </Title>
              <h3>Front-End developer</h3>
        </ContainerTitleParagraph>
        <ContainerImagen>
            <ImageCover src={cover} alt="cover" />
        </ContainerImagen>
    </HomeStyle>
        <Button>Contáctame</Button>

      <section id="about">
        <About />
      </section>
    </>
  )
}

export default Home

