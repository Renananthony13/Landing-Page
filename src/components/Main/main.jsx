import styled from "styled-components";

import { SectionImages } from "./SectionImgs";
import SectionLeader from "./SectionLeader";
import SectionTop from "./SectionTop";

const MainStyle = styled.main`
    width: 100%;

`;


export default function Main() {

    return (
        <MainStyle>
            <SectionTop />
            <SectionLeader />
            <SectionImages />
        </MainStyle>
    )
}
