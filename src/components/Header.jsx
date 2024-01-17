import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, {useRef} from 'react'


const Header = () =>{

    const navigate = useNavigate();

    const onLinkClick = (e) =>{
        e.preventDefault();

        
        const path=e.target.dataset.to;
        const targetElement = document.getElementById(path);
        console.log(path);
        // navigate(path);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
    };


    return(
        <div className='header'>
            <Navbar bg="light" data-bs-theme="light">
                <Container className='headerContainer'>
                    <Navbar.Brand href="/" data-to="aboutMe" id='navTitle' onClick={onLinkClick}>ReadMe</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" data-to="aboutMe" onClick={onLinkClick}>Home</Nav.Link>
                        <Nav.Link href="#features" data-to='myStory' onClick={onLinkClick}>MyStory</Nav.Link>
                        <Nav.Link href="#pricing" data-to='Skill' onClick={onLinkClick}>Skill</Nav.Link>
                        <Nav.Link href="#pricing" data-to='project' onClick={onLinkClick}>Project</Nav.Link>
                    </Nav>
                </Container>
                
            </Navbar>

            
        </div>
    )
}

export default Header;