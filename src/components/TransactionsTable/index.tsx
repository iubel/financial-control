import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
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