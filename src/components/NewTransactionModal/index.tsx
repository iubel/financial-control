import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handelCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        console.log({
            title,
            value,
            category,
            type,
        })
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt='Close modal' />
            </button>

            <Container onSubmit={handelCreateNewTransaction}>
                <h2>New transaction</h2>

                <input
                    placeholder='Title'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type='number'
                    placeholder='Value'
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt='Income' />
                        <span>Income</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => setType('whitdraw')}
                        isActive={type === 'whitdraw'}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt='Outcome' />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder='Categorie'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type='submit'>
                    Submit
                </button>
            </Container>
        </Modal >
    );
}