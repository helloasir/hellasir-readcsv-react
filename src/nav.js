import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
    <div class="container my-0">
      <Navbar collapseOnSelect  bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Hello Asir</Navbar.Brand>
          <Nav variant="pills">
          <Nav.Item><Nav.Link href="https://vat201.com/" target="_blank" >VAT Calculator</Nav.Link>
          </Nav.Item><Nav.Link href="https://noontopsellingitems.ahlan.app/" target="_blank">Noon Top Selling</Nav.Link>
            <Nav.Link href="https://ahlan.app/" target="_blank" >Ahlan.app</Nav.Link>
            <Nav.Link href="https://madinadeals.com/" target="_blank" >Madina Deals</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <br />
      
    </>
  );
}

export default BrandExample;