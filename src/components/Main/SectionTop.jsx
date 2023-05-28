import styled from "styled-components";

import imgHero from "../../img/desktop/imageHero.jpg";
import imgHeroMobile from "../../img/mobile/image-hero.jpg";


const Container = styled.div`
    width: 100%;
    height: min(90vh);
    
    background-image: url(${imgHero});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    filter: brightness(0.7);

    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 940px) {

        div {
            width: 80%;
            justify-content: center;
        }

        h1 {
            width: 100%;

        }
    }

    @media (max-width: 660px) {
        background-image: url(${imgHeroMobile});


        h1 {
            font-size: clamp(2.8rem, 0.5vh + 2rem, 10rem);

        }
    }

    @media (max-width: 320px) {

        div {
            margin-top: 2rem;
        }

        h1 {
            font-size: 2rem;
        }
    }

`;


const DivContext = styled.div`
    width: 70%;
    margin: 0 auto;

    /* padding: 0rem 10rem; */

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;


const Title = styled.h1`
    width: min(60%, 1200px);
    

    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    padding: 2rem;
    border: solid 3px white;
    font-size: clamp(3.8rem, 0.5vh + 2rem, 10rem);
    
    word-wrap: break-word;

    filter: brightness(0.9);
`;


export default function SectionTop() {
    return (
        <Container>
            <DivContext>
                <Title>IMMERSIVE EXPERIENCES THAT DELIVER</Title>
            </DivContext>
        </Container>
    )
}
