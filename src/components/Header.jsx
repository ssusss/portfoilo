import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Header = () => {

    const navigate = useNavigate();

    const onLinkClick = (e) => {
        e.preventDefault();


        const path = e.target.dataset.to;
        const targetElement = document.getElementById(path);
        console.log(path);
        // navigate(path);

        if (targetElement) {
            window.scroll({
                top: targetElement.offsetTop - 50,
                behavior: 'smooth',
            });
        }
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerClass = scrollPosition < 20 ? 'transparent' : '';

    return (
        <div className='header'>
            <Navbar className={`${headerClass}`} data-bs-theme="light">
                <Container className='headerContainer'>
                    <Navbar.Brand href="/" data-to="home" id='navTitle' onClick={onLinkClick}>KDC's Portfolio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" data-to="home" onClick={onLinkClick}>Home</Nav.Link>
                        <Nav.Link href="#pricing" data-to='aboutMe' onClick={onLinkClick}>About Me</Nav.Link>
                        <Nav.Link href="#pricing" data-to='skill' onClick={onLinkClick}>Skill</Nav.Link>
                        <Nav.Link href="#pricing" data-to='project' onClick={onLinkClick}>Project</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>

        </div>

    )
}

export default Header;