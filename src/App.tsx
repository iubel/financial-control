import { Dashboard } from "./components/Dashbord";
import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handelOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handelCloseNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handelOpenNewTransactionModal} />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handelCloseNewTransactionModalClose}
      >
        <h2>New transaction</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}