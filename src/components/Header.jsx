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
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container className='headerContainer'>
                    <Navbar.Brand href="/" data-to="/" id='navTitle' onClick={onLinkClick}>ReadMe</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" data-to="/" onClick={onLinkClick}>Home</Nav.Link>
                        <Nav.Link href="#features" data-to='resume' onClick={onLinkClick}>Resume</Nav.Link>
                        <Nav.Link href="#pricing" data-to='project' onClick={onLinkClick}>Project</Nav.Link>
                        <Nav.Link href="#pricing" data-to='visite' onClick={onLinkClick}>방명록?</Nav.Link>
                    </Nav>
                </Container>
                <h5>로그인 고민중</h5>
            </Navbar>

            
        </div>
    )
}

export default Header;