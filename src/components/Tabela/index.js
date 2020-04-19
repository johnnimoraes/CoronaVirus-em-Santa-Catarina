import React from 'react';
import { Table } from 'react-bootstrap'
import api from '../../api';


class Tabela extends React.Component {

    state = {
        cidades: [],
    }


    async componentDidMount() {
        const response = await api.get();

        this.setState({ cidades: response.data.results });

        console.log(this.state.cidades);
        
    };
    

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
                        {this.state.cidades.map(function (cidade, i) {
                            return (
                                <tr key={i}>
                                    <td>{
                                    cidade.city==null ? "Total":i+1
                                    }</td>
                                    <td>{cidade.city}</td>
                                    <td>{cidade.confirmed}</td>
                                    <td>{cidade.deaths}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </div>
        )
    };
}

export default Tabela;