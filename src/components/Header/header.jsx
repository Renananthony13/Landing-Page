import styled from "styled-components";
import { ScreenContext } from "../../Context/ScreenContext";
import { useContext, useState } from "react";
import { AiOutlineMenu as MenuBtn, AiOutlineClose as ExitBtn } from "react-icons/ai";

import Modal from "react-modal";

const Title = styled.h1`
    font-size: 2rem;
    color: 	#ffffff;
    font-family: 'Alata', sans-serif;
`


const HeaderComp = styled.header`
    width: 70%;
    height: 4rem;
    
    margin: 0 auto;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 4rem 0rem;
   
    position: absolute;
    z-index: 999;

    button {
        background-color: transparent;
        border: none;

    }

    @media (max-width: 940px) {
        width: 80%;
    }


`

const UlStyle = styled.ul`
    display: flex;
    
`


const ListStyle = styled.li`
    list-style: none;
    padding: 0.5rem;
    margin-left: 0.7rem;

    color: 	#ffffff;
    font-family: 'Alata', sans-serif;
    cursor: pointer;

    &:hover{
        animation: alternate-reverse;
        border-bottom: solid 2px #ffffff;
        filter: brightness(0.99);
    }
`


const ModalDiv = styled.div`
    button {
        background-color: transparent;
        border: none;


        svg {
            width: 100%;
            height: 32px;
           

            color: #fff;
        }

       

    }

    
    
`;


const StyleContentModal = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background-color: transparent;
            border: none;

            svg {
                color: #fff;
                width: 100%;
                height: 32px;
            }
        }
    }



    ul {
        flex-direction: column;
        margin-top: 5rem;
       

        li {
            margin: 0;
            font-size: 26px;

            &:hover {
                border-top: solid 1px #fff;
                /* padding-left: 1rem; */
                animation: scale .5s .0s backwards ;
            }

         
        }

      
    }

    @keyframes scale {
        from {
            opacity: 1;
            transform: translateX(0);
        }

        to {
            opacity: 2;
            transform: translateX(-30px);
            transform: translateY(-10px);
        }
    }

`;



export default function Header() {

    const { dimensionScreen, setDimensionScreen } = useContext(ScreenContext);

    const [ openModal, setOpenModal ] = useState(false)
 
    // console.log(dimensionScreen)

    const ScreenModal = () => {
        return (
            <StyleContentModal>
                 <div>
                    <Title>Loopstudios</Title>
                    <button onClick={() => setOpenModal(false)}><ExitBtn/></button>
                </div>
    
                <UlStyle>
                    <ListStyle>About</ListStyle>
                    <ListStyle>Carrers</ListStyle>
                    <ListStyle>Events</ListStyle>
                    <ListStyle>Products</ListStyle>
                    <ListStyle>Support</ListStyle>
                </UlStyle>
            </StyleContentModal>
        )
    
    }

    return(
        <HeaderComp>

            <Title>Loopstudios</Title>

            {
                dimensionScreen.widthPage > 660 ?
                   <UlStyle>
                        <ListStyle>About</ListStyle>
                        <ListStyle>Carrers</ListStyle>
                        <ListStyle>Events</ListStyle>
                        <ListStyle>Products</ListStyle>
                        <ListStyle>Support</ListStyle>
                    </UlStyle>
                : 
                    <ModalDiv>
                        <button onClick={() => setOpenModal(true)}><MenuBtn /></button>

                        <Modal
                        isOpen={openModal}
                        aria={{
                            labelledby: "heading",
                            describedby: "full_description"
                            }}
                        style={{
                        
                            overlay: {
                                zIndex: 9999,
                                backgroundColor: '#00000000',
                            },
                            content: {
                                backgroundColor: '#000'

                                
                            }
                        }}

                        >
                            <ScreenModal />
                           
                        </Modal>

                    </ModalDiv>
                    
            }

        </HeaderComp>
    )
}

