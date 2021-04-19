import React from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';

class Estoque extends React.Component {
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
                        <h1>Estoque</h1>
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
                                        <th>Código</th>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Marca</th>
                                        <th>Quantidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Bateria</td>
                                        <td>Bateria 2s</td>
                                        <td>Nanotech</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Arduino</td>
                                        <td>Arduino nano</td>
                                        <td>Arduino</td>
                                        <td>20</td>
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
                                    <Col md={2}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Código:</Form.Label>
                                            <Form.Control type="number" disabled={true} placeholder="3" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Nome:</Form.Label>
                                            <Form.Control type="text" placeholder="Adicione o nome do equipamento" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Marca:</Form.Label>
                                            <Form.Control type="text" placeholder="Adicione a marca do equipamento" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Quantidade:</Form.Label>
                                            <Form.Control type="number" placeholder="Adicione a quantidade" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={12}>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Descrição:</Form.Label>
                                            <Form.Control as="textarea" rows={2} placeholder="Adicione uma descrição do equipamento" />
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

export default Estoque;