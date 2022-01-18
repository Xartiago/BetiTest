import { BrandContainer, Container, Form, FormContainer, InputTitles, RelativeCont, Input, Title1 } from "../styles/Home"
/* Imgs & Assets*/
import Main from '../assets/img/Main.png'
import Beti from '../assets/icons/Beti.png'
import BetiName from '../assets/icons/BetiName.png'
import { FirstButtons, Img, P, PWCenter } from "../styles/Util"
import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <RelativeCont>
      <BrandContainer>
        <Img src={Beti} width='120px' />
        <Img src={BetiName} width='100px' height='100%' />
      </BrandContainer>
      <Container img={Main}>
        <FormContainer>
          <Title1>Ingresa a tu plataforma beti</Title1>
          <Form>
            <InputTitles>Correo</InputTitles>
            <Input type='text' placeholder="Correo" />
            <InputTitles>Contraseña</InputTitles>
            <Input type='password' placeholder="Contraseña"></Input>
            <P>Olvide mi contraseña</P>
            <FirstButtons>Ingresar</FirstButtons>
            <PWCenter>¿No tienes una cuenta?</PWCenter>
            <PWCenter><Link to='/signin'><b>Regisrate</b></Link></PWCenter>
          </Form>
        </FormContainer>
      </Container>
    </RelativeCont>
  )
}
