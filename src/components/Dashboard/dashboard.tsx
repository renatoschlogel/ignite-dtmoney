import { Sumnary } from "../Sumnary/sumnary";
import { TransactionTable } from "../TransactionTable/transactionTable";
import { Container } from "./dashboard.styles";

export function Dashboard(){
  return (
    <Container>
      <Sumnary /> 
      <TransactionTable />

    </Container>
  );
}