import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profile from '../assets/melmao.jpg'

const Hero = () => {
  return (
    <Container fluid className='m-0 p-5 bg-dark' id='home'>
      <Row>
        <Col className='bg-dark columnHero m-0 p-5 d-flex align-items-center'>
            <div>
                <h1 className='text-white display-4'> Hi, I'm <br/> Daniel Quinatac-an </h1>
                <h2 className='text-white small-5'> Student </h2>
                <Button variant="primary"><a href='#about' className='text-decoration-none text-light'> Know me more! </a></Button>  
            </div>
        </Col>
        <Col className='bg-dark columnHero m-0 p-0 d-flex align-items-center justify-content-center' >
          <Card style={{ width: '18rem' }} className='h-80'>
              <Card.Img
                variant="top"
                src={profile}
                style={{
                  height: '100%',       
                  width: '100%',         
                  objectFit: 'cover'     
                }}
              />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
