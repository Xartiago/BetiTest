import { End, InfoCont, NegButtn, PaddFlexCont, Pilot, PosButtn, RightPercent, TextRes, TitleResult } from "../styles/Results"
import { Containers } from "../styles/Util"
/* Imgs */
import Avioneta from '../assets/icons/Avioneta.png'
import { Percent } from "../miniLibrarie/Percent"
import { FlexAr, Nums } from "../styles/librarie"
import { useNavigate } from "react-router-dom"
import { Navbar } from "./Navbar"

export const Results = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <Containers>
      <PaddFlexCont>
        <InfoCont>
          <End>
            <Pilot src={Avioneta} />
          </End>
          <TitleResult>Despegando ando</TitleResult>
          <TextRes>¡Alistandote para despegar! Estas en un momento de aprendizaje continuo por lo que estas validando tu idea de negocio y atraer o retener a tus primeros clientes. Estas buscando estabilidad financiera y has tenido que invertir esfuerzo y dinero pero no has visto ganancias significativas. No has comenzado a pagar impuestos y sabemos que legalmente tienes muchas dudas.</TextRes>
          <br />
          <TextRes>Con el <b>Paquete Starter</b> te guiare en la planiicacion de tu empresa en el area financiera y tributaria para que logres de una vez llevar tu emprendimiento al siguiente nivel en poco tiempo, ¡Quiero ser parte de tu crecimiento, vamos con toda!</TextRes>
          <PosButtn onClick={() => navigate('/home/calendar')}>Continuar</PosButtn>
          <NegButtn>Descargar PDF</NegButtn>
        </InfoCont>
        <RightPercent>
          <div>
            <Percent title={'Rapidez de Crecimiento'} percent={'1.5'} />
            <FlexAr><span /><Nums>1</Nums><span /><Nums>2</Nums><span /><Nums>3</Nums><span /><Nums>4</Nums><span /><Nums>5</Nums><span /></FlexAr>
            <Percent title={'Aversion al riesgo'} percent={'3'} />
            <FlexAr><span /><Nums>1</Nums><span /><Nums>2</Nums><span /><Nums>3</Nums><span /><Nums>4</Nums><span /><Nums>5</Nums><span /></FlexAr>
            <Percent title={'Protección legal'} percent={'2.5'} />
            <FlexAr><span /><Nums>1</Nums><span /><Nums>2</Nums><span /><Nums>3</Nums><span /><Nums>4</Nums><span /><Nums>5</Nums><span /></FlexAr>
            <Percent title={'Estabilidad Financiera'} percent={'1.5'} />
            <FlexAr><span /><Nums>1</Nums><span /><Nums>2</Nums><span /><Nums>3</Nums><span /><Nums>4</Nums><span /><Nums>5</Nums><span /></FlexAr>
            <Percent title={'Nivel de incertidumbre'} percent={'4'} />
            <FlexAr><span /><Nums>1</Nums><span /><Nums>2</Nums><span /><Nums>3</Nums><span /><Nums>4</Nums><span /><Nums>5</Nums><span /></FlexAr>
            <Percent title={'planificacion tributaria'} percent={'1'} />
            <FlexAr><span /><Nums>1</Nums><span /><Nums>2</Nums><span /><Nums>3</Nums><span /><Nums>4</Nums><span /><Nums>5</Nums><span /></FlexAr>
          </div>
        </RightPercent>
      </PaddFlexCont>
    </Containers>
    </div>
  )
}
