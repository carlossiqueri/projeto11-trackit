import { AddContainer } from "./style";
import TodayForm from "./TodayForm";
export default function AddSection({ setAdd }) {
  const saveButton = "salvar";
  return (
    <AddContainer>
      <TodayForm setAdd={setAdd} saveButton={saveButton} />
    </AddContainer>
  );
}
