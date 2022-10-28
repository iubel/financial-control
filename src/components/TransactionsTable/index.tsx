import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Categorie</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Web development</td>
                        <td className="deposit">R$15.000,00</td>
                        <td>Development</td>
                        <td>27/10/2022</td>
                    </tr>

                    <tr>
                        <td>Host</td>
                        <td className="withdraw">- R$100,00</td>
                        <td>Development</td>
                        <td>27/10/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}