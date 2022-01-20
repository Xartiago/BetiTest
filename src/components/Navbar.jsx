import { LeftCont, Logout, MobileCont, NavCont, RightCont, VerticalStick } from "../styles/Navbar";
/* Imgs */
import Beti from '../assets/icons/Beti.png'
/* Styled-components */
import { Img } from '../styles/Util'
/* Icons */
import { FiLogOut } from 'react-icons/fi'
import { MdNotificationsNone } from 'react-icons/md'
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<NavCont>
			<LeftCont>
				<Img src={Beti} width='70px' height='65px' />
			</LeftCont>
			<MobileCont>
				<MdNotificationsNone size={34} color="white" />
				<VerticalStick />
				<Link to='/'><FiLogOut size={28} color="white" /></Link>
			</MobileCont>
			<RightCont>
				<MdNotificationsNone size={28} color="white" />
				<VerticalStick />
				<Link to='/'><Logout>Cerrar Sesion</Logout></Link>
			</RightCont>
		</NavCont>
	)
};
