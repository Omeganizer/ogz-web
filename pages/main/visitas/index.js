import React from 'react';
import { Container, Row, Form, Button, Col } from 'react-bootstrap';

class Visitas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }

    render() {
        return (
            <Container className="margin-top-15px">
                <Row>
                    <Col>
                        <h1>Registrar Visitas</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col md={8}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Nome:</Form.Label>
                                        <Form.Control type="text" placeholder="Adicione o seu nome" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Data de nascimento:</Form.Label>
                                        <Form.Control type="date" placeholder="Adicione a sua data de nascimento" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={8}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Escola:</Form.Label>
                                        <Form.Control type="text" placeholder="Adicione o nome da escola" />
                                    </Form.Group>
                                </Col>
                                <Col md={4}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>RA:</Form.Label>
                                        <Form.Control type="number" placeholder="Adicione o seu RA" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control type="email" placeholder="Adicione o seu email" />
                                    </Form.Group>
                                </Col>
                                <Col md={3} className="margin-top-10px">
                                    <Button variant="success" block> Cadastrar </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Visitas;