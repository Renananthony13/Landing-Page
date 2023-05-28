import React,{ memo, useState, useEffect, useContext } from 'react';
import { ScreenContext } from '../../Context/ScreenContext';

import styled from 'styled-components';
// import "../../img/desktop/image-deep-eartg.jpg"

// imagens Desktop
import imgDeepEarth from "../../img/desktop/image-deep-earth.jpg";
import imgCuriosity from "../../img/desktop/image-curiosity.jpg";
import imgFisheye from "../../img/desktop/image-fisheye.jpg";
import imgFromAbrove from "../../img/desktop/image-from-above.jpg";
import imgGrid from "../../img/desktop/image-grid.jpg";
import imgNightArcade from "../../img/desktop/image-night-arcade.jpg";
import imgPocketBo from "../../img/desktop/image-pocket-borealis.jpg";
import imgSoccer from "../../img/desktop/image-soccer-team.jpg";

// imagens Mobile
import imgDeepEarthMob from "../../img/mobile/image-deep-earth.jpg";
import imgCuriosityMob from "../../img/mobile/image-curiosity.jpg"
import imgFisheyeMob from "../../img/mobile/image-fisheye.jpg";
import imgFromAbroveMob from "../../img/mobile/image-from-above.jpg";
import imgGridMob from "../../img/mobile/image-grid.jpg";
import imgNightArcadeMob from "../../img/mobile/image-night-arcade.jpg";
import imgPocketBorealisMob from "../../img/mobile/image-pocket-borealis.jpg";
import imgSoccerMob from "../../img/mobile/image-soccer-team.jpg";

const SectionStyle = styled.section`
    width: 70%;
    margin: 10rem auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1rem;
    

    .divButton {
        width: 100%;
        display: flex;
        justify-content: end;
    }

    @media (max-width: 940px) {
        width: 90%;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 0;
        row-gap: 2rem;

       h1 {
            grid-column-start: 4;
            grid-column-end: 1;
            grid-row-start: 1;
            grid-row-end: 4;

            text-align: center;
       }

       .divButton {
            justify-content: center;
            
            button {
                font-size: 22px;
                letter-spacing: 3px;
                font-weight: 500;
            }
       }

    }
`;


const ContainerGridImages = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    grid-column-start: 4;
    grid-column-end: 1;
    grid-row-start: 4;
    grid-row-end: 4;


    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: start;

        div {
            /* width: 100%; */
            /* background-color: red; */
            padding: 1rem;

            position: absolute;
            z-index: 1000;
        }

        &:hover {
            
            img {
                filter: contrast(0.4);
            }

            h3 {
                color: #000;
            }

        }

        
    }

    h3 {
        width: 150px;
        font-size: 22px;
        color: #ffff;
        font-family: 'Josefin Sans', sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        word-break: break-all;
        word-spacing: 2px;
        line-height: 26px;
       
        /* position: absolute; */
       

    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);

        
    }

  
`;




const StyleImage = styled.img`
    width: 100%;
    height: 100%;

    filter: brightness(0.7);
    z-index: 0;
`

const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-size: clamp(2.5rem, 0.5vh + 2rem, 1rem);
    font-weight: 300;

    margin-bottom: 1rem;

    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
   
`;



const StyleButton = styled.button`
    padding: 0.8rem 3rem;
    background-color: transparent;
    border: solid 1px black;
    font-weight: 500;
    
    letter-spacing: 1px;

    &&:hover {
        background-color: #000;
        border: solid 1px #fff;
        color: #fff;
    }
`;



function SectionImgs() {

    const { dimensionScreen, setDimensionScreen } = useContext(ScreenContext);


    const images = [
        {
            id: 'deep earth',
            image: imgDeepEarth
        },
        {
            id: 'Night arcade',
            image: imgNightArcade
        },
        {
            id: 'Soccer team vr',
            image: imgSoccer
        },
        {
            id: 'The grid',
            image: imgGrid
        },
        {
            id: 'From up above vr',
            image: imgFromAbrove
        },
        {
            id: 'Pocket borealis',
            image: imgPocketBo
        },
        {
            id: 'The curiosity',
            image: imgCuriosity
        },
        {
            id: 'Make it fisheye',
            image: imgFisheye
        }
    
    ]
    

    const imagesMobile = [
        {
            id: 'deep earth',
            image: imgDeepEarthMob
        },
        {
            id: 'Night arcade',
            image: imgNightArcadeMob
        },
        {
            id: 'Soccer team vr',
            image: imgSoccerMob
        },
        {
            id: 'The grid',
            image: imgGridMob
        },
        {
            id: 'From up above vr',
            image: imgFromAbroveMob
        },
        {
            id: 'Pocket borealis',
            image: imgPocketBorealisMob
        },
        {
            id: 'The curiosity',
            image: imgCuriosityMob
        },
        {
            id: 'Make it fisheye',
            image: imgFisheyeMob
        }
    ]


    useEffect(() => {
        function handleResize() {
            setDimensionScreen({
                widthPage: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)

    }, [])


    return (
        <SectionStyle>

            <Title>OUR CREATIONS</Title>

            <div className='divButton'>
                <StyleButton>SEE ALL</StyleButton>
            </div>

            <ContainerGridImages>
                {
                   dimensionScreen.widthPage > 900 
                   ?  images.map((value) => {
                    return (
                        <div key={value.id}>
                            <StyleImage src={value.image} alt=""></StyleImage>
                            <div><h3>{value.id}</h3></div>
                        </div>
                    )
                })
                   :  imagesMobile.map((value) => {
                    return (
                        <div key={value.id}>
                            <StyleImage src={value.image} alt=""></StyleImage>
                            <div><h3>{value.id}</h3></div>
                        </div>
                    )
                })
                }
            </ContainerGridImages>

           
        </SectionStyle>
    )
}


export const SectionImages = memo(SectionImgs)




// images.map((value) => {
//     return (
//         <div key={value.id}>
//             <StyleImage src={value.image} alt=""></StyleImage>
//             <h3>{value.id}</h3>
//         </div>
//     )
// })