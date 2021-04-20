import React, { Component } from 'react';
import { Container, Form, FormControl, Nav, Button, Navbar } from 'react-bootstrap';
import logo from './logo.JPG';

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                weight="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Популярные</Nav.Link>
                                <Nav.Link href="/toprated">Лучшие</Nav.Link>
                                <Nav.Link href="/premiere">Премьеры</Nav.Link>
                                <Nav.Link href="/random">Случайный</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Поиск"
                                    className="mr-sm-3"
                                />
                                <Button variant="outline-info">Поиск</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }
}
