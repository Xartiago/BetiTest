import { BrandContainer, Container } from "../styles/Home"
/* Imgs & Assets*/
import Main from '../assets/img/Main.png'
import Beti from '../assets/icons/Beti.png'
import BetiName from '../assets/icons/BetiName.png'
import { Img } from "../styles/Util"

export const Home = () => {
    return (
        <Container img={Main}>
            <BrandContainer>
                <Img src={Beti} width='120px' />
                <Img src={BetiName} width='100px' height='100%' />
            </BrandContainer>
        </Container>
    )
}
