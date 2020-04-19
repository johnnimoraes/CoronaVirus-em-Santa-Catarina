import React from 'react';
import { Navbar, } from 'react-bootstrap'


export default function Header() {
    return (
        <Navbar className="d-flex justify-content-center" bg="light">
            <Navbar.Brand>CoronaVirus em SC</Navbar.Brand>
        </Navbar>
    )
}