import { Dashboard } from "./components/Dashbord";
import Modal from 'react-modal';
import { useState } from 'react';
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handelOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handelCloseNewTransactionModalClose() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handelOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handelCloseNewTransactionModalClose}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}