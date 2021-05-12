import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import { Container , TransactionTypeContainer} from './newTransactionModal.styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen}
           onRequestClose={onRequestClose} 
           overlayClassName="react-modal-overlay"
           className="react-modal-content"
           >

      <button type="button"
              className="react-modal-close" 
              onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar" />
      </button>       
      <Container>
        <h2>Cadastrar transação</h2> 

        <input placeholder="Titulo"/>
        <input type="number" placeholder="Valor"/>

        <TransactionTypeContainer>
          <button type="button">Entrada</button>
          <button type="button">Saida</button>

        </TransactionTypeContainer>

        <input placeholder="Categoria"/>

        <button type="submit">Cadastrar</button>

      </Container>
    </Modal>
  );
}