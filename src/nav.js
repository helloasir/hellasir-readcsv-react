import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Hello Asir</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      
    </>
  );
}

export default BrandExample;