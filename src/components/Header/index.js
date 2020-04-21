import React from 'react';
import { Navbar, } from 'react-bootstrap'


export default function Header() {
    return (
        <Navbar className="d-flex justify-content-center mb-3" bg="light">
            <Navbar.Brand> Coronavírus em SC </Navbar.Brand>
        </Navbar>
    )
}