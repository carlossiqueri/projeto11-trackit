import { HabitsHeader } from "./style";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
export default function Header() {
  const { userIcon } = useContext(UserContext);
  return (
    <HabitsHeader data-test="header">
      <p>TrackIt</p>
      <img src={userIcon} alt="userIcon" />
    </HabitsHeader>
  );
}
