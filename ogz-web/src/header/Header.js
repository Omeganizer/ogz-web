import React from 'react';
import { Navbar, Nav, Modal, Button, Col } from 'react-bootstrap';
import Estoque from '../body/Estoque';
import Integrantes from '../body/Integrantes';
import Visitas from '../body/Visitas';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogout: false,
            showPerfil: false,
            showVisitas: false,
            showEstoque: false,
            showIntegrantes: false
        };
    }

    showLogoutModal = () => {
        this.setState({ showLogout: true })
    }

    closeLogoutModal = () => {
        this.setState({ showLogout: false });
    }

    showVisitas = () => {
        this.setState({
            showPerfil: false,
            showVisitas: true,
            showEstoque: false,
            showIntegrantes: false
        });
    }

    showPerfil = () => {
        this.setState({
            showPerfil: true,
            showVisitas: false,
            showEstoque: false,
            showIntegrantes: false
        });
    }

    showEstoque = () => {
        this.setState({
            showPerfil: false,
            showVisitas: false,
            showEstoque: true,
            showIntegrantes: false
        });
    }
    
    showIntegrantes = () => {
        this.setState({
            showPerfil: false,
            showVisitas: false,
            showEstoque: false,
            showIntegrantes: true
        });
    }

    render() {
        const { showLogout, showVisitas, showEstoque, showIntegrantes } = this.state;

        return (
            <div className="ogz-web">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed>
                    <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={this.showPerfil}>Perfil</Nav.Link>
                            <Nav.Link onClick={this.showEstoque}>Estoque</Nav.Link>
                            <Nav.Link onClick={this.showIntegrantes}>Integrantes</Nav.Link>
                            <Nav.Link onClick={this.showVisitas}>Visitas</Nav.Link>
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
                                <Button variant="success" onClick={this.closeLogoutModal} block> Continuar </Button>
                            </Col>
                            <Col>
                                <Button variant="danger" onClick={this.closeLogoutModal} block> Sair </Button>
                            </Col>
                        </Modal.Footer>
                    </Modal>
                    : null}

                    {showVisitas ? <Visitas /> : null}

                    {showEstoque ? <Estoque /> : null}

                    {showIntegrantes ? <Integrantes /> : null}
            </div>
        );
    }
}

export default Header;
