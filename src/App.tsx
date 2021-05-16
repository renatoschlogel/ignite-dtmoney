import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";
import { TrasactionsContext } from "./TransactionsContext";

Modal.setAppElement("#root"); // para acessibilidade.

export function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function hadleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }

  return (
    <TrasactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionOpen} onRequestClose={hadleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TrasactionsContext.Provider>
  );
}
