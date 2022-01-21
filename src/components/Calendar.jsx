import { ActiveCeil, AlignCent, BrandCont, BttnRecord, CalContr, CalendarCont, CalTle, Ceil, FlexCalCont, Month, NavCont, ScheduleCont, Select2, SpanContr } from "../styles/Calendar"
import { Containers, PtionTle } from "../styles/Util"
/* Imgs */
import Brand from '../assets/img/Brand.png'
import { CentFlex, RelModCont } from "../styles/Welcome"
/* React Icons */
import { AiOutlineCalendar, AiOutlineStock, AiOutlineCheckCircle, AiOutlinePlusCircle, AiOutlineRight, AiOutlineLeft, AiOutlineClose } from 'react-icons/ai'
import { RiFilePaper2Line } from 'react-icons/ri'
import { GiMoneyStack } from 'react-icons/gi'
import { MdPersonOutline } from 'react-icons/md'
import { Option, Select } from "../styles/Register"
import { NameDays, Schedule } from '../schedule/schedule'
import { Days } from "../schedule/Days"
import { NumDays } from "../schedule/NumDays"
import { Navbar } from "./Navbar"
import { useState } from "react"
import { Close, Cont, FormCal, GridFormCont } from "../styles/FormCal"
import { useForm } from "react-hook-form"
import { Input, InputTitles } from "../styles/Home"

export const Calendar = () => {
	const [recordatorio, setRecordatorio] = useState(false);
	const { register, handleSubmit } = useForm()

	const Formulario = <Cont>
		<RelModCont>
			<Close><AiOutlineClose size={20} onClick={() => setRecordatorio(false)} /></Close>
			<FormCal>
				<Month>Crear recordatorio</Month>
				<GridFormCont>
					<div>
						<InputTitles>Nombre del recordatorio</InputTitles>
						<Input type='text' placeholder="Escribe aqui" {...register('nombre')} />
					</div>
					<div>
						<InputTitles>Tipo de recordatorio</InputTitles>
						<Input type='text' placeholder=""/>
					</div>
					<div>
						<InputTitles>Nombre de la etiqueta</InputTitles>
						<Input type='text' placeholder="Escribe aqui" {...register('etiqueta')} />
					</div>
					<div>
						<InputTitles>Color</InputTitles>
						<Select name='color'
							{...register('color')}
						>
							<Option defaultValue='Option0' value='Option0' >Selecciona una opcion</Option>
							<Option value='Option1' >Azul</Option>
							<Option value='Option2' >Verde</Option>
							<Option value='Option3' >Rosado</Option>
						</Select>
					</div>
					<div>
						<InputTitles>Fecha de Recordatorio</InputTitles>
						<Input type='number' max={28} {...register('day')} placeholder="Day"/>
					</div>
					<div>
						<InputTitles>Primer Recordatorio</InputTitles>
						<Input type='text' />
					</div>
					<div>
						<InputTitles>Segundo recordatorio</InputTitles>
						<Input type='text' />
					</div>
					<div>
						<InputTitles>Comentario</InputTitles>
						<Input type='text' />
					</div>
				</GridFormCont>
			</FormCal>
		</RelModCont>
	</Cont>

	return (
		<div>
			<Navbar />
			<Containers>
				{recordatorio && Formulario}
				<FlexCalCont>
					<NavCont>
						<CentFlex>
							<BrandCont src={Brand} />
						</CentFlex>
						<CalTle>Miel de la sierra</CalTle>
						<ActiveCeil>
							<AiOutlineCalendar size={28} />
							<SpanContr>Calendario</SpanContr>
						</ActiveCeil>
						<Ceil>
							<AiOutlineStock size={28} />
							<SpanContr>Tu estado financiero</SpanContr>
						</Ceil>
						<Ceil>
							<RiFilePaper2Line size={28} />
							<SpanContr>Contratos</SpanContr>
						</Ceil>
						<Ceil>
							<GiMoneyStack size={28} />
							<SpanContr>Beneficios tributarios</SpanContr>
						</Ceil>
						<Ceil>
							<AiOutlineCheckCircle size={28} />
							<SpanContr>Equipo de trabajo</SpanContr>
						</Ceil>
						<Ceil>
							<MdPersonOutline size={30} />
							<SpanContr>Perfil</SpanContr>
						</Ceil>
					</NavCont>
					<CalendarCont>
						<PtionTle>Calendario de obligaciones</PtionTle>
						<CalContr>
							<BttnRecord onClick={() => setRecordatorio(true)}><AiOutlinePlusCircle size={20} />Crear Recordatorio</BttnRecord>
							<AlignCent>
								<AiOutlineLeft size={22} />
								<Month>Febrero 2021</Month>
								<AiOutlineRight size={22} />
							</AlignCent>
							<Select2 name='industria'>
								<Option defaultValue='Option0' value='Option0' >Todos</Option>
								<Option value='Option1' >Option 1</Option>
								<Option value='Option2' >Option 2</Option>
								<Option value='Option3' >Option 3</Option>
								<Option value='Option4' >Option 4</Option>
							</Select2>
						</CalContr>
						<ScheduleCont>
							{NameDays.map((day, i) => <Days key={i} dayName={day} />)}
							{Schedule.map(day => <NumDays key={day.day} numDay={day.day} tasksArr={day.tasks} />)}
						</ScheduleCont>
					</CalendarCont>
				</FlexCalCont>
			</Containers>
		</div>
	)
}
