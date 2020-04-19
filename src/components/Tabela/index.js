import React from 'react';
import { Table } from 'react-bootstrap'
import api from '../../api';


class Tabela extends React.Component {

    state = {
        cidades: [],
    }


    async componentDidMount() {
        const response = await api.get();

        this.setState({ cidades: response.data.results.sort(function(a,b){
            return b.confirmed - a.confirmed ;
        }) });
       
        console.log(this.state.cidades);
       
        

        
    };
    

    render() {

       const data= this.state.cidades;

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
                        {data.map(function (cidade, i) {
                            return (
                                <tr key={i}>
                                    <td>{
                                    cidade.city==null ? "Total":i
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