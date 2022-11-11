import React from 'react'
import cover from '../Images/cover.png'
/* import './HomeStyle.css'; */
import style from "styled-components";


const Home = () => {


    const HomeStyle = style.section`
    background-color: rgba(254, 171, 222, 1);
    `
   const ContainerHome = style.div`
    height: 100vh;

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
    padding-top: 13%;
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
   `

    const Paragraph = style.p`
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
    `
    const ContainerImagenButton = style.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    `

    const Button = style.button`
    cursor: pointer;
    font-size: 1em;
    margin-top: 11%;
    border: 2px solid #19ad99;
    color: #19ad99;
    background-color: rgba(254, 171, 222, 1);
    font-weight: bold;
    border-radius: 7px;
    transition: all .3s ease;
    padding: 6px 12px;
    text-transform: uppercase;

    &:hover {
        background: #19ad99;
        color: white;
    }

    @media only screen and (min-width: 768px) {
      margin-top: 0;
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
    <ContainerHome>
        <ContainerTitleParagraph>
            <Title>Hola, <br/>soy Elizabeth Chillcce, <br/>web developer</Title>
            <Paragraph>Front-End developer</Paragraph>
        </ContainerTitleParagraph>
        <ContainerImagenButton>
        <ImageCover src={cover} alt="cover" /> 
          <Button>Contáctame</Button>
        </ContainerImagenButton>
    </ContainerHome>
    </HomeStyle>

    </>
  )
}

export default Home

