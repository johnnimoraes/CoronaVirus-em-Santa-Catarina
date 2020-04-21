import React from 'react';
import Header from '../../components/Header';
import Tabela from '../../components/Tabela';
import { Container, Row, Col } from 'react-bootstrap'


class Home extends React.Component {


    render() {
        return (
            <div className="Home">
                <Container  >                    
                        <Header />                    
                </Container>
                <Container >
                    <Row >
                        <Col> <Tabela /></Col>
                    </Row>
                </Container>
            </div>

        )
    }
};

export default Home;