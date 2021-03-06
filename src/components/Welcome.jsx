import { useState } from "react"
/* Styled Components */
import { Containers, Img, Ption, PtionP, PtionText, PtionTle, SpanMin } from "../styles/Util";
import { Input } from '../styles/Home'
import { CentFlex, Errors, FlexCont, FormCnt, Img1, ImgModal, InputTles, ModalCont1, ModalCont2, ModButt1, RadioInp, Radioinput, RelModCont, SpanMod, SubmitBttn, TextMod1, TextMod2, SpanMod2, Icon } from "../styles/Welcome";
import { ErrorsSpan, Option, Select } from "../styles/Register";
/* Imgs */
import Beti from '../assets/icons/Beti.png'
import Modal1 from '../assets/img/Modal1.png'
/* Modules */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillCheckCircle } from 'react-icons/ai'
import { Navbar } from "./Navbar";


export const Welcome = () => {
	const [bienvenida, setBienvenida] = useState(true);
	const { register, handleSubmit } = useForm()
	const [success, setSuccess] = useState(null)

	const navigate = useNavigate()

	const firstModal = <ModalCont1>
		<RelModCont>
			<ImgModal><Img1 src={Modal1} /></ImgModal>
			<FlexCont>
				<TextMod1>Queremos ayudarte a cumplir tus sueños y llevar tu negocio al siguiente nivel.</TextMod1>
				<SpanMod>Completa las siguientes preguntas</SpanMod>
				<CentFlex>
					<ModButt1 onClick={() => setBienvenida(false)} >Completar ahora</ModButt1>
				</CentFlex>
			</FlexCont>
		</RelModCont>
	</ModalCont1>

	const SecondModal = <ModalCont2>
		<FlexCont>
			<CentFlex>
				<Icon>
					<AiFillCheckCircle size={80} color="#265877" />
				</Icon>
			</CentFlex>
			<TextMod2>¡Genial, hemos terminado!</TextMod2>
			<CentFlex>
				<SpanMod2>A continuación puedes ver el diagnostico que tenemos para ti  y podamos seguir hablando segun tus condiciones especificas</SpanMod2>
			</CentFlex>
		</FlexCont>
		<CentFlex>
			<SubmitBttn type="submit" onClick={() => navigate('/home/results')}>Ver resultados</SubmitBttn>
		</CentFlex>
	</ModalCont2>

	const Enviar = data => {
		const { vende, ventasSemanales, variacion, tiempoOperando, prestamos, inventario, acuerdos, descuentos, constituido } = data
		vende && ventasSemanales !== 'Option0' && variacion && tiempoOperando && prestamos && inventario && acuerdos && descuentos && constituido ? setSuccess(true) : setSuccess(false)
	}

	return (
		<div>
			<Navbar />
			<Containers modal={success} modal2={bienvenida}>
			{bienvenida && firstModal}
			{success && SecondModal}
			<SpanMin><Link to='/'><b>Volver</b></Link></SpanMin>
			<Ption>
				<Img src={Beti} width='70px' height='65px' />
				<PtionText>
					<PtionTle>Beti test</PtionTle>
					<PtionP>Completa las siguientes preguntas</PtionP>
				</PtionText>
				{/* Preguntas */}
			</Ption>
			<form onSubmit={handleSubmit(Enviar)}>
				<FormCnt>
					<div>
						<InputTles>¿Que vendes?</InputTles>
						<Input type='text' placeholder="Escribe aqui" {...register('vende')} />
					</div>
					<div>
						<InputTles>¿En promedio cuantos dias a la semana estas vendiendo?</InputTles>
						<Select name='industria' {...register('ventasSemanales')}>
							<Option defaultValue='Option0' value='Option0' >Selecciona una opcion</Option>
							<Option value='1' >1</Option>
							<Option value='2' >2</Option>
							<Option value='3' >3</Option>
							<Option value='4 ' >4</Option>
						</Select>
					</div>
					<div>
						<InputTles>¿Cuanto tiempo lleva tu negocio operando?</InputTles>
						<Input type='text' placeholder="Escribe aqui" {...register('tiempoOperando')} />
					</div>
					<div>
						<InputTles>¿Actualmente estas constituido?</InputTles>
						<RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="constituido" value='Si' {...register('constituido')} />
								<span>Si</span>
							</RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="constituido" value='No' {...register('constituido')} />
								<span>No</span>
							</RadioInp>
						</RadioInp>
					</div>
					<div>
						<InputTles>¿Tienes un acuerdo escrito con tus trabajadores socios o proveedores?</InputTles>
						<RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="acuerdos" value='Si' {...register('acuerdos')} />
								<span>Si</span>
							</RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="acuerdos" value='No' {...register('acuerdos')} />
								<span>No</span>
							</RadioInp>
						</RadioInp>
					</div>
					<div>
						<InputTles>¿Conoces tus deducciones o descuentos de impuestos a la Renta?</InputTles>
						<RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="descuentos" value='Si' {...register('descuentos')} />
								<span>Si</span>
							</RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="descuentos" value='No' {...register('descuentos')} />
								<span>No</span>
							</RadioInp>
						</RadioInp>
					</div>
					<div>
						<InputTles>¿Sabes cada cuanto estas rotando tu inventario?</InputTles>
						<RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="inventario" value='Si' {...register('inventario')} />
								<span>Si</span>
							</RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="inventario" value='No' {...register('inventario')} />
								<span>No</span>
							</RadioInp>
						</RadioInp>
					</div>
					<div>
						<InputTles>¿Si te piden que pages el dinero prestado sabes si puedes pagarlo en menos de 1 año?</InputTles>
						<RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="prestamos" value='Si' {...register('prestamos')} />
								<span>Si</span>
							</RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="prestamos" value='No' {...register('prestamos')} />
								<span>No</span>
							</RadioInp>
						</RadioInp>
					</div>
					<div>
						<InputTles>¿Conoces la variacion financiera de tu negocio?</InputTles>
						<RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="variacion" value='Si' {...register('variacion')} />
								<span>Si</span>
							</RadioInp>
							<RadioInp>
								<Radioinput type='radio' name="variacion" value='No' {...register('variacion')} />
								<span>No</span>
							</RadioInp>
						</RadioInp>
					</div>
				</FormCnt>
				<CentFlex>
					<div>
						{success === false && <Errors>Rellena todos los campos</Errors>}
						<SubmitBttn type="submit">Terminar y enviar</SubmitBttn>
					</div>
				</CentFlex>
			</form>
		</Containers >
		</div>
	)
}
