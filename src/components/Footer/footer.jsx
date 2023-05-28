import React from "react"
import { RiFacebookBoxFill as FaceLogo,
    RiTwitterFill as TwitterLogo,
    RiPinterestFill as PinterestLogo,
    RiInstagramLine as InstaLogo
} from "react-icons/ri";

import styled from "styled-components";


const FooterStyle = styled.footer`
    width: 100%;
    padding: 2rem 0rem;
    
    bottom: 0;
    left: 0;
    right: 0;

    background-color: #000000;

    div {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    li {
        list-style: none;

        &:hover{
            animation: alternate-reverse;
            border-bottom: solid 2px #ffffff;
            filter: brightness(0.99);
        }
    }


    @media (max-width: 900px) {
        width: 100%;

        div {
            width: 100%;
            flex-direction: column;
            align-items: center;
        }
    }

`;


const Title = styled.h1`
    font-size: 1.5rem;
    color: 	#ffffff;
    font-family: 'Alata', sans-serif;
`


const ContainerLogo = styled.nav`

    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1rem 0rem;
    gap: 1rem;

    ul {
        display: flex;
        justify-content: space-between;
        /* padding-top: 1.5rem; */
    }

    li {
        margin-right: 1rem;

        color: 	#ffffff;
        font-family: 'Alata', sans-serif;
        cursor: pointer;

    }

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;

        ul {
            align-items: center;
            
        }
        
        li {
            margin: 0.5rem;
        }
    }

    @media (max-width: 660px) {
        ul {
            flex-direction: column;
        }
    }
    
`;


const ContainerNav = styled.nav`
    width: 80%;
    display: flex;
    
    flex-direction: column;
    align-items: end;
    gap: 1.5rem;
    /* padding: 1rem; */

    ul {
        display: flex;
        /* padding-bottom: 1rem; */
    }

    li {
        color: #ffff;

        margin-left: 1rem;

        svg {
            width: 22px;
            height: 22px;
        }
    }

    p {
        font-size: 11px;
        color: 	#ffffff;
        font-family: 'Alata', sans-serif;
        cursor: pointer;
    }


    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;

        li {
            margin: 1rem;
        }
        
    }


`;



export default function Footer() {
    return (
        <FooterStyle>

           <div>
           <ContainerLogo>
                <Title>Loopstudios</Title>
                <ul>
                    <li>About</li>
                    <li>Carrers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </ContainerLogo>
               
            <ContainerNav>
                 <ul>
                    <li><FaceLogo /></li>
                    <li><TwitterLogo /></li>
                    <li><PinterestLogo /></li>
                    <li><InstaLogo /></li>
                </ul>
                <p>@2021 Loopstudios. Allrights reserved.</p>
            </ContainerNav>
           </div>

        </FooterStyle>
    )
}



