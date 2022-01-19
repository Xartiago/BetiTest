import { useState } from "react"
/* Styled Components */
import { BrandContainer, Container, Form, FormContainer, InputTitles, RelativeCont, Input, Title1, PasswordContainer, IconAbs } from "../styles/Home"
import { FirstButtons, Img, P, PWCenter, RelPos, Title } from "../styles/Util"
/* Imgs & Assets*/
import Main from '../assets/img/Main.png'
import Beti from '../assets/icons/Beti.png'
import BetiName from '../assets/icons/BetiName.png'
/* Modules */
import { Link } from "react-router-dom"
/* Icons */
import { AiFillEye, AiFillEyeInvisible, AiOutlineLeft } from 'react-icons/ai'
import { Checkbox, CondsYTermsCont, Option, Select, Span } from "../styles/Register"

export const Register = () => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<RelativeCont>
			<BrandContainer>
				<Img src={Beti} width='120px' />
				<Img src={BetiName} width='100px' height='100%' />
			</BrandContainer>
			<Container img={Main}>
				<FormContainer>
					<Form>
						<RelPos>
							<Link to='/'><AiOutlineLeft size={28} /></Link>
							<Title>Registra tu negocio</Title>
						</RelPos>
						{/* Nombre */}
						<InputTitles>Nombre del negocio</InputTitles>
						<Input type='text' placeholder="Ej: Beti" />
						{/* NIT */}
						<InputTitles>Numero de NIT</InputTitles>
						<Input type='text' placeholder="NIT" />
						{/* Select */}
						<InputTitles>Industria</InputTitles>
						<Select name='select' >
							<Option selected disabled>Selecciona una opcion</Option>
							<Option value='Option1' >Option 1</Option>
							<Option value='Option2' >Option 2</Option>
							<Option value='Option3' >Option 3</Option>
							<Option value='Option4' >Option 4</Option>
						</Select>
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
						<CondsYTermsCont>
							<Checkbox type='checkbox' />
							<Span>Aceptar <b>términos y condiciones</b></Span>
						</CondsYTermsCont>
						<FirstButtons>Registrar mi cuenta</FirstButtons>
						<PWCenter>¿Ya tienes una cuenta?<b><Link to='/'> Inicia Sesion</Link></b></PWCenter>
					</Form>
				</FormContainer>
			</Container>
		</RelativeCont>
	)
}
