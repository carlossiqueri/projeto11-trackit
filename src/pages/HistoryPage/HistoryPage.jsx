import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { HistoryBody } from "./style";

export default function HistoryPage() {
  return (
    <>
      <Header />
      <HistoryBody>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </HistoryBody>
      <Footer />
    </>
  );
}
