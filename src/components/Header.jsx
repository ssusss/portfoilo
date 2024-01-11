import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Header = () =>{

    const navigate = useNavigate();

    const onLinkClick = (e) =>{
        e.preventDefault();

        
        const path=e.target.dataset.to;
        console.log(path);
        navigate(path);
    };

    return(
        <div className='header'>
            <Navbar bg="light" data-bs-theme="light">
                <Container className='headerContainer'>
                    <Navbar.Brand href="/" data-to="/" id='navTitle' onClick={onLinkClick}>ReadMe</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" data-to="/" onClick={onLinkClick}>Home</Nav.Link>
                        <Nav.Link href="#features" data-to='resume' onClick={onLinkClick}>Resume</Nav.Link>
                        <Nav.Link href="#pricing" data-to='project' onClick={onLinkClick}>Project</Nav.Link>
                    </Nav>
                </Container>
                
            </Navbar>

            
        </div>
    )
}

export default Header;