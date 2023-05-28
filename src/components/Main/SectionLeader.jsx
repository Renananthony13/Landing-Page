import styled from "styled-components";
import React,{ useState, useEffect, useContext } from "react";
import { ScreenContext } from "../../Context/ScreenContext";

import imgInteractive from "../../img/desktop/image-interactive.jpg";
import imgInteractiveMobi from "../../img/mobile/image-interactive.jpg";


const SectionStyle = styled.section`
    width: 70%;
    height: 50vh;

    margin: 5rem auto;

    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;

    @media (max-width: 940px) {
        width: 80%;
        height: 60vh;
        justify-content: space-around;
        gap: 2rem;

        margin: 8rem auto;
    }

    @media (max-width: 900px) {
        width: 90%;
    }
`;


const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-size: clamp(2.3rem, 0.5vh + 2rem, 1rem);
    font-weight: 300;

    margin-bottom: 1rem;

`;

const Paragraph = styled.p`
    font-size: 14px;
    font-family: "Alata",sans-serif;
    text-align: start;

    line-height: 1.3rem;
    letter-spacing: 0.7px; 
    word-spacing: -1px;
`;


const ImgInteractive = styled.img`
    width: 100%;
    height: 100%;

    display: block;
`;

const ContainerImg = styled.div`
    width: 60%, 900px;

    background-image: url(${imgInteractive});
    background-repeat: no-repeat;
    background-position: contain;
    background-size: cover;

    position: relative;

    z-index: 100;

    @media (min-width: 941px) {
        height: 100%;
    }

    @media (max-width: 940px) {
        width: 80%;
        margin: 0 auto;
    }
`;

const ContainerText = styled.div`
    width: 50%;
    /* height: 40%; */

    margin: 0rem 2rem 0rem 0rem;
    /* margin: 3rem 0rem 10rem 10rem; */
    padding: 4rem 0rem 2rem 4rem;
   
    background-color: #ffffff;
    
    position: absolute;
    right: 3rem;
    
    z-index: 200;

    @media (max-width: 940px) {
        position: relative;
        right: 0;
        padding: 0;
        margin: 0;
        width: 100%;

        p {
            text-align: center;
            letter-spacing: 2px;
        }

        h1 {
            font-size: clamp(2.2rem, 4vh + 2rem, 1rem);
            text-align: center;
        }
    }
`;


export default function SectionLeader() {

    const { dimensionScreen, setDimensionScreen } = useContext(ScreenContext);

    const [medid, useMedid] = useState({
        screenWidth: window.innerWidth
    })


    useEffect(() => {
        function measure() {
            setDimensionScreen({
                widthPage: window.innerWidth
            })
        }

        window.addEventListener('resize', measure)

    }, [])

    // console.log(medid.screenWidth)

    return (
        <SectionStyle>
            <ContainerImg>
                {
                    dimensionScreen.widthPage <= 900 
                    ? <ImgInteractive src={imgInteractiveMobi}></ImgInteractive>
                    : <ImgInteractive src={imgInteractive}></ImgInteractive>
                }
            </ContainerImg>
            <ContainerText>
                <Title>THE LEADER IN INTERACTIVE VR</Title>
                <Paragraph>Foundef in 2011, Loopstudios hos been producing world-class virtual reality projects for some of the best companis around the globe. Our award-winning creations have transformed businesses through digital experiences that bind fe their brand.</Paragraph>
            </ContainerText>
        </SectionStyle>
    )
}
