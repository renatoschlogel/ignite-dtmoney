
import { Container } from "./sumnary.styles";
import icomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext } from "react";
import { TrasactionsContext } from "../../TransactionsContext";

export function Sumnary(){

  const contextData = useContext(TrasactionsContext);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas"/>
        </header>
        <strong>R$2000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>- R$500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$1500,00</strong>
      </div>

    </Container>
  );
}