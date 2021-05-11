import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './header.styles';
import Modal from 'react-modal';


export function Header () {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function hadleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }

  return (
    <Container>
      <Content>


        <img src={logoImg} alt="dt money"/>
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Nova Transação
        </button>
        <Modal isOpen={isNewTransactionOpen}
               onRequestClose={hadleCloseNewTransactionModal} >
         <h2>Cadastrar transação</h2> 
        </Modal>
       </Content>
    </Container>
  )
}