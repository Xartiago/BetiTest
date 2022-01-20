import { NegButtn, Pilot, PosButtn, TextRes, TitleResult } from "../styles/Results"
import { Containers } from "../styles/Util"
/* Imgs */
import Avioneta from '../assets/icons/Avioneta.png'

export const Results = () => {
  return (
    <Containers>
      <Pilot src={Avioneta} />
      <TitleResult>Despegando Ando</TitleResult>
      <TextRes>¡Alistandote para despegar! Estas en un momento de aprendizaje continuo por lo que estas validando tu idea de negocio y atraer o retener a tus primeros clientes. Estas buscando estabilidad financiera y has tenido que invertir esfuerzo y dinero pero no has visto ganancias significativas. No has comenzado a pagar impuestos y sabemos que legalmente tienes muchas dudas.</TextRes>
      <br />
      <TextRes>Con el <b>Paquete Starter</b> te guiare en la planiicacion de tu empresa en el area financiera y tributaria para que logres de una vez llevar tu emprendimiento al siguiente nivel en poco tiempo, ¡Quiero ser parte de tu crecimiento, vamos con toda!</TextRes>
      <PosButtn>Continuar</PosButtn>
      <NegButtn>Descargar PDF</NegButtn>
    </Containers>
  )
}
