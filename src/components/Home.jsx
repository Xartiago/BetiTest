import { BrandContainer, Container, Form, FormContainer, InputTitles, RelativeCont, Input, Title1, PasswordContainer, IconAbs } from "../styles/Home"
import { FirstButtons, Img, P, PWCenter } from "../styles/Util"
/* Imgs & Assets*/
import Main from '../assets/img/Main.png'
import Beti from '../assets/icons/Beti.png'
import BetiName from '../assets/icons/BetiName.png'
/* Modules */
import { Link } from "react-router-dom"
/* React */
import { useState } from "react"
/* React Icons */
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export const Home = () => {
  const [showPassword, setShowPassword] = useState(false)

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
            {/* Correo */}
            <InputTitles>Correo</InputTitles>
            <Input type='text' placeholder="Correo" />
            {/* Contraseña */}
            <InputTitles>Contraseña</InputTitles>
            <PasswordContainer>
              <Input type={!showPassword ? 'password' : 'text'} placeholder="Contraseña" />
              <IconAbs>
                {!showPassword ? <AiFillEye color="#2F2D42" size={20} onClick={() => setShowPassword(true)} />
                  : <AiFillEyeInvisible color="#2F2D42" size={20} onClick={() => setShowPassword(false)} />
                }
              </IconAbs>
            </PasswordContainer>
            <P>Olvide mi contraseña</P>
            <FirstButtons>Ingresar</FirstButtons>
            <PWCenter>¿No tienes una cuenta?</PWCenter>
            <PWCenter><Link to='/signin'><b>Registrate</b></Link></PWCenter>
          </Form>
        </FormContainer>
      </Container>
    </RelativeCont>
  )
}
