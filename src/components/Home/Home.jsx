import React from 'react'
import cover from '../Images/cover.png'
/* import { HomeStyle } from './HomeStyle'; */
import style from "styled-components";


const Home = () => {


    const HomeStyle = style.section`
    background-color: rgba(254, 171, 222, 1);
    `
   const ContainerHome = style.div`
    height: 100vh;
    `

    const Title = style.h1`
    fond-size: 1.8rem;
    font-family: font-file-82132;
    font-weight: 400;
    padding-top: 3%;
    `

    const Paragraph = style.p`
    fond-size: 1.4rem;
    font-family: "Open Sans",sans-serif;
    `

    const Button = style.button`
    cursor: pointer;
    font-size: 1em;
    margin: 1em;
    border: 2px solid #19ad99;
    color: #19ad99;
    background-color: rgba(254, 171, 222, 1);
    font-weight: bold;
    border-radius: 5px;
    transition: all .3s ease;

    &:hover {
        background: #19ad99;
        color: white;
    }

    `
   const ImageCover = style.img `
    whith: 30%;
   `

    return (
    <>
    <HomeStyle>
    <ContainerHome>
        <Title>Hola, <br/>soy Elizabeth Chillcce, <br/>web developer</Title>
        <Paragraph>Front-End developer</Paragraph>
        <div>
          <Button>Contáctame</Button>
        </div>
        <div>
        <ImageCover src={cover} width="16%" alt="cover" /> 
        </div>
    </ContainerHome>
    </HomeStyle>

    </>
  )
}

export default Home

