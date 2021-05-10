import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./transactionsTable.styles";

export function TransactionTable () {

  useEffect(() => {
    api.get("/transactions")
    .then(response => console.log(response.data))
  }, []);


  return (
  <>
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>

        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">R$12000,00</td>
            <td>Tecnologia</td>
            <td>12/05/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="withdraw">- R$2000,00</td>
            <td>Tecnologia</td>
            <td>12/05/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$12000,00</td>
            <td>Tecnologia</td>
            <td>12/05/2021</td>
          </tr>

          <tr>
            <td>Desenvolvimento de Website</td>
            <td>R$12000,00</td>
            <td>Tecnologia</td>
            <td>12/05/2021</td>
          </tr>
          
        </tbody>

      </table>
    </Container>
  </>
  );
} 