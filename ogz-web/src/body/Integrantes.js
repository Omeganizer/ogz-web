import React from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';

class Integrantes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNewItemForm: false
        };
    }

    showNewItemForm = () => {
        this.setState({ showNewItemForm: true });
    }

    closeNewItemForm = () => {
        this.setState({ showNewItemForm: false });
    }

    render() {
        const { showNewItemForm } = this.state;

        return (
            <Container className="margin-top-15px">
                <Row>
                    <Col md={9}>
                        <h1>Integrantes</h1>
                    </Col>
                    {!showNewItemForm ?
                        <Col md={3} className={"align-center"}>
                            <Button variant="success" block onClick={this.showNewItemForm}> Novo </Button>
                        </Col> : null}
                </Row>
                {!showNewItemForm ?
                    <Row>
                        <Col>
                            <Table striped bordered hover size="sm" className="margin-top-15px">
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>RA</th>
                                        <th>Nascimento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Angelo Miguel</td>
                                        <td>180474@facens.br</td>
                                        <td>180474</td>
                                        <td>01/01/2000</td>
                                    </tr>
                                    <tr>
                                        <td>Priscila Luz</td>
                                        <td>190474@facens.br</td>
                                        <td>190474</td>
                                        <td>01/01/2000</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row> : null}
                {showNewItemForm ?
                    <Row>
                        <Col>
                            <Form>
                                <Row>
                                    <Col md={8}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Nome:</Form.Label>
                                            <Form.Control type="text" placeholder="Adicione o nome do integrante" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>RA:</Form.Label>
                                            <Form.Control type="text" placeholder="Adicione o RA do integrante" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control type="email" placeholder="Adicione o email do integrante" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Nascimento:</Form.Label>
                                            <Form.Control type="date" placeholder="Adicione o nascimento" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={3} className="margin-top-10px">
                                        <Button variant="danger" block onClick={this.closeNewItemForm}> Cancelar </Button>
                                    </Col>
                                    <Col md={3} className="margin-top-10px">
                                        <Button variant="success" block onClick={this.closeNewItemForm}> Cadastrar </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row> : null}
            </Container>
        )
    }
}

export default Integrantes;