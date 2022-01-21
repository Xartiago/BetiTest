import { Numb, NumDayCont, Tasks } from "./styles";
/* Icons */
import { GoPrimitiveDot } from 'react-icons/go'

export const NumDays = ({ numDay, tasksArr }) => {
	return (
		<NumDayCont dom={numDay} >
			<Numb>{numDay}</Numb>
			{tasksArr.length >= 1 && <Tasks>{tasksArr.map((task, i) => <GoPrimitiveDot key={i} size={34} color={task.color}/>)}</Tasks>}
		</NumDayCont>
	);
};
