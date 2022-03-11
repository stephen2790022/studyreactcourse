import React from 'react';
import { Navbar, Nav, NavDropdown,Container  } from 'react-bootstrap'

const index = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">StudyReact</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/">ホーム</Nav.Link>
                    <NavDropdown title="授業" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/course/props">Props</NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
};

export default index;