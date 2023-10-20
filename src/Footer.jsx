import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <Container fluid className='bg-dark text-light'>
      <Row className='d-flex justify-content-center'>
        <Col xs={4} >
          <div className='footer-div'>
              <h4>Contatti</h4>
                <p>Indirizzo: Via Example, 12345, Città</p>
                <p>Email: info@example.com</p>
                <p>Telefono: +39 0123 456789</p>
          </div>  
        </Col>
        <Col xs={4}>
          <div className='footer-div'>
           <h4>Link Utili</h4>
              <ul class="list-unstyled">
                  <li>Home</li>
                  <li>Chi siamo</li>
                  <li>Servizi</li>
                  <li>Contatti</li>
               </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
