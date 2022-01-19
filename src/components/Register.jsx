import { useState } from "react"
/* Styled Components */
import { BrandContainer, Container, Form, FormContainer, InputTitles, RelativeCont, Input, PasswordContainer, IconAbs } from "../styles/Home"
import { FirstButtons, Img, P, PWCenter, RelPos, Title } from "../styles/Util"
/* Imgs & Assets*/
import Main from '../assets/img/Main.png'
import Beti from '../assets/icons/Beti.png'
import BetiName from '../assets/icons/BetiName.png'
/* Modules */
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
/* Icons */
import { AiFillEye, AiFillEyeInvisible, AiOutlineLeft } from 'react-icons/ai'
import { Checkbox, CondsYTermsCont, Option, Select, Span } from "../styles/Register"
import { Accounts } from "../accounts"

export const Register = () => {
	const [showPassword, setShowPassword] = useState(false)
	const { register, handleSubmit } = useForm()

	/* Manejar errores */
	const [nombreE, setNombre] = useState(false);
	const [nitE, setNit] = useState(false);
	const [industriaE, setIndustria] = useState(false)
	const [correoE, setCorreo] = useState(false)
	const [contraseñaE, setContraseña] = useState(false)
	const [termsE, setTerms] = useState(false)

	/* Expresiones regulares */
	const NombreRegex = /^[a-zA-Z ]+( [a-zA-Z]+)$/
	const NitRegex = /^[0-9]+([0-9]+)*$/
	const MailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
	const PassRegex = /^[\w]+([\w]+){5}/

	/* Enviar data */
	const onSubmit = data => {
		const {nombre, nit, industria, correo, contraseña, terms} = data;
		/* Manejando Errores */
		/* Nombre */
		nombre.length > 20 ? setNombre('El nombre debe ser menor a 20 caracteres') 
			: nombre.length === 0 ? setNombre('El nombre no puede estar vacio') 
			: !NombreRegex.test(nombre) ? setNombre('El nombre no debe contener caracteres especiales ni numeros')
			: setNombre(true)
		/* NIT */
		nit.length === 0 ? setNit('El NIT es obligatorio')
			: nit.length > 9 || nit.length < 9 ? setNit('Ingresa un NIT Valido')
			: !NitRegex.test(nit) ? setNit('El NIT solo debe contener numeros')
			: setNit(true)
		/* Industria */
		industria === 'option0' ? setIndustria('Elige una opcion valida')
			: setIndustria(true)
		/* Correo */
		!MailRegex.test(correo) ? setCorreo('Ingresa un correo valido')
			: setCorreo(true)
		/* Contraseña */
		!PassRegex.test(contraseña) ? setContraseña('La contraseña no debe tener caracteres especiales')
			: setContraseña(true)
		!terms ? setTerms('Debes aceptar los terminos y condiciones')
			: setTerms(true)
		if(nombreE === true && nitE === true && industriaE === true && correoE === true && contraseñaE === true && termsE === true) Accounts.push(data);	
	}

	return (
		<RelativeCont>
			<BrandContainer>
				<Img src={Beti} width='120px' />
				<Img src={BetiName} width='100px' height='100%' />
			</BrandContainer>
			<Container img={Main}>
				<FormContainer>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<RelPos>
							<Link to='/'><AiOutlineLeft size={28} /></Link>
							<Title>Registra tu negocio</Title>
						</RelPos>
						{/* Nombre */}
						<InputTitles>Nombre del negocio</InputTitles>
						<Input type='text' placeholder="Ej: Beti" name='nombre'
							{...register('nombre')}
						/>
						{/* NIT */}
						<InputTitles>Numero de NIT</InputTitles>
						<Input type='text' placeholder="NIT" name='nit'
							{...register('nit')}
						/>
						{/* Select */}
						<InputTitles>Industria</InputTitles>
						<Select name='industria'
							{...register('industria')}
						>
							<Option defaultValue='Option0' >Selecciona una opcion</Option>
							<Option value='Option1' >Option 1</Option>
							<Option value='Option2' >Option 2</Option>
							<Option value='Option3' >Option 3</Option>
							<Option value='Option4' >Option 4</Option>
						</Select>
						{/* Correo */}
						<InputTitles>Correo</InputTitles>
						<Input type='text' placeholder="Correo" name="correo"
							{...register('correo')}
						/>
						{/* Contraseña */}
						<InputTitles>Contraseña</InputTitles>
						<PasswordContainer>
							<Input type={!showPassword ? 'password' : 'text'} placeholder="Contraseña" name="contraseña"
								{...register('contraseña')}
							/>
							<IconAbs>
								{!showPassword ? <AiFillEye color="#2F2D42" size={20} onClick={() => setShowPassword(true)} />
									: <AiFillEyeInvisible color="#2F2D42" size={20} onClick={() => setShowPassword(false)} />
								}
							</IconAbs>
						</PasswordContainer>
						<CondsYTermsCont>
							<Checkbox type='checkbox'
								{...register('terms')}
							/>
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
