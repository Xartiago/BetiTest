import { BrandContainer, Container, Form, FormContainer, InputTitles, RelativeCont, Input, Title1, PasswordContainer, IconAbs } from "../styles/Home"
import { FirstButtons, Img, P, PWCenter } from "../styles/Util"
import { ErrorsSpan } from '../styles/Register'
/* Imgs & Assets*/
import Main from '../assets/img/Main.png'
import Beti from '../assets/icons/Beti.png'
import BetiName from '../assets/icons/BetiName.png'
/* Modules */
import { Link, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
/* React */
import { useState } from "react"
/* React Icons */
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Accounts } from "../accounts"

export const Home = () => {
  /* React form */
  const { register, handleSubmit } = useForm()
  /* React Router */
  const navigate = useNavigate();
  /* States */
  const [showPassword, setShowPassword] = useState(false)
  const [correoE, setCorreo] = useState(false)
  const [contraseñaE, setContraseña] = useState(false)
  const [formE, setForm] = useState('')
  /* Regex */
  const MailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

  const submit = data => {
    const { correo, contraseña } = data
    if (MailRegex.test(correo) && contraseña !== '') {
      let Signin = Accounts.some(acc => acc.correo === correo && acc.contraseña === contraseña)
      !Signin ? setForm('Contraseña o usuario incorrecto') : navigate('/home')
    }
    !correo ? setCorreo('Este campo es obligatorio')
      : !MailRegex.test(correo) ? setCorreo('Ingresa un correo valido')
        : setCorreo(true)
    !contraseña ? setContraseña('Ingresa tu contraseña')
      : setContraseña(true)
  }

  return (
    <RelativeCont>
      <BrandContainer>
        <Img src={Beti} width='120px' />
        <Img src={BetiName} width='100px' height='100%' />
      </BrandContainer>
      <Container img={Main}>
        <FormContainer>
          <Title1>Ingresa a tu plataforma beti</Title1>
          <Form onSubmit={handleSubmit(submit)}>
            {/* Correo */}
            <InputTitles>Correo</InputTitles>
            {correoE !== Boolean && <ErrorsSpan>{correoE}</ErrorsSpan>}
            <Input type='text' placeholder="Correo"
              {...register('correo')}
            />
            {/* Contraseña */}
            <InputTitles>Contraseña</InputTitles>
            {contraseñaE !== Boolean && <ErrorsSpan>{contraseñaE}</ErrorsSpan>}
            <PasswordContainer>
              <Input type={!showPassword ? 'password' : 'text'} placeholder="Contraseña"
                {...register('contraseña')}
              />
              <IconAbs>
                {!showPassword ? <AiFillEye color="#2F2D42" size={20} onClick={() => setShowPassword(true)} />
                  : <AiFillEyeInvisible color="#2F2D42" size={20} onClick={() => setShowPassword(false)} />
                }
              </IconAbs>
            </PasswordContainer>
            <P>Olvide mi contraseña</P>
            {formE !== Boolean && <ErrorsSpan>{formE}</ErrorsSpan>}
            <FirstButtons>Ingresar</FirstButtons>
            <PWCenter>¿No tienes una cuenta?</PWCenter>
            <PWCenter><Link to='/login'><b>Registrate</b></Link></PWCenter>
          </Form>
        </FormContainer>
      </Container>
    </RelativeCont>
  )
}
