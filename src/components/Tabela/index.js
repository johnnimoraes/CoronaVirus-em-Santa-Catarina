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

        console.log(this.state);
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
                        {this.state.cidades.map(function (cidade) {
                            return (
                                <tr>
                                    <td>{cidade}</td>
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