import { Sumnary } from "../Sumnary/Sumnary";
import { TransactionTable } from "../TransactionsTable/TransactionsTable";
import { Container } from "./dashboard.styles";

export function Dashboard(){
  return (
    <Container>
      <Sumnary /> 
      <TransactionTable />

    </Container>
  );
}