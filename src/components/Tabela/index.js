import React from 'react';
import { Table } from 'react-bootstrap'

class Tabela extends React.Component {   

    render() {
    return (
        <div className="TabelaPrincipal ">
            <Table responsive variant="dark">
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Cidade</th>
                        <th>Confirmados</th>
                        <th>Obitos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        
                    </tr>
                   
                </tbody>
            </Table>
        </div>
    )};
}

export default Tabela;