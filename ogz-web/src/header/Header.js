import React from 'react';
import { Navbar, Nav, Modal, Button, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogout: false
        };
    }

    showLogoutModal = () => {
        this.setState({ showLogout: true })
    }

    logoutModalClose = () => {
        this.setState({ showLogout: false });
    }

    render() {
        const { showLogout } = this.state;

        return (
            <div className="ogz-web">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed>
                    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#perfil">Perfil</Nav.Link>
                            <Nav.Link href="#estoque">Estoque</Nav.Link>
                            <Nav.Link href="#integrantes">Integrantes</Nav.Link>
                            <Nav.Link href="#visitas">Visitas</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={this.showLogoutModal}>Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {showLogout ?
                    <Modal show={this.state.showLogout} animation={false}>
                        <Modal.Header>
                            <Modal.Title>Alerta</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Tem certeza que deseja sair do sistema?</Modal.Body>
                        <Modal.Footer>
                                <Col>
                                    <Button variant="success" onClick={this.logoutModalClose} block> Continuar </Button>
                                </Col>
                                <Col>
                                    <Button variant="danger" onClick={this.logoutModalClose} block> Sair </Button>
                                </Col>
                        </Modal.Footer>
                    </Modal>
                    : null}

            </div>
        );
    }
}

export default Header;
