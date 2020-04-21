import React from 'react';
import { Table, Card, Button, ListGroup } from 'react-bootstrap'
import api from '../../api';


class Tabela extends React.Component {

    state = {
        cidades: [],
        total: []
    }


    async componentDidMount() {
        const response = await api.get();

        this.setState({
            cidades: response.data.results.sort(function (a, b) {
                return b.confirmed - a.confirmed;
            })
        });

        // console.log(this.state.cidades);

        // var total = this.state.cidades[0].confirmed;

        // console.log(total);

        this.setState({
            total: this.state.cidades[0]
        })

    };


    render() {

        const data = this.state.cidades;
        const total = this.state.total;



        return (
            <div className="TabelaPrincipal  ">


                <ListGroup className="mb-3 text-center">
                    <ListGroup.Item>Total de Casos confirmados: {total.confirmed}</ListGroup.Item>
                    <ListGroup.Item>Total de Obitos confirmados: {total.deaths}</ListGroup.Item>
                </ListGroup>

                <Card className="mb-3" >
                    <Card.Body>
                        <Card.Title>Fontes de dados</Card.Title>
                        <Card.Text>
                            Boletins diarios da secretaria da saude de Santa Catarina
                             compilados pela <a href="brasil.io">brasil.io</a>, os boletins podem
                             ser acessados atraves do botão abaixo.
                        </Card.Text>
                        <Button href="http://www.saude.sc.gov.br/coronavirus/boletins.html"
                            variant="primary">Boletins Secretaria de Saude SC</Button>
                    </Card.Body>
                </Card>



                <Table responsive className="table-striped">
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Cidade</th>
                            <th>Confirmados</th>
                            <th>Obitos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(function (cidade, i) {
                            return (
                                <tr key={i}>
                                    <td>{
                                        cidade.city == null ? "Total" : i
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