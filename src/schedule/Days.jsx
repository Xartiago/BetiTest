import { Name, NameDayCont } from "./styles";

export const Days = ({dayName}) => {
  return (
    <NameDayCont>
        <Name>{dayName}</Name>
    </NameDayCont>
  );
};
