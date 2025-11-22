import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
  return (
    <Container fluid className='m-0 p-5 bg-dark ' id='projects'>
      <h1 className='text-white display-5 my-5'> Projects </h1>
      <Row>  
        
        <Col md={3} className='my-2 '>
          <Card style={{ width: '100%' }} className='h-100'>
            <Card.Body>
              <Card.Title>Tasklist</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Android</Card.Subtitle>
              <Card.Text variant="dark">
              A task list app built with Jetpack Compose (Kotlin DSL)
              </Card.Text>
              <Button variant="primary"><a href='https://github.com/AndriQuinn/task-list-app-android' className='text-decoration-none text-light'> View </a></Button>
            </Card.Body>
          </Card>
        </Col>      

        <Col md={3} className='my-2 '>
          <Card style={{ width: '100%' }} className='h-100'>
            <Card.Body>
              <Card.Title>Anima</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Web</Card.Subtitle>
              <Card.Text variant="dark">
              Simple ecommerce using basic html, css, and js
              </Card.Text>
              <Button variant="primary"><a href='https://github.com/AndriQuinn/anima-ecommerce' className='text-decoration-none text-light'> View </a></Button>
            </Card.Body>
          </Card>
        </Col>

         <Col md={3} className='my-2 '>
          <Card style={{ width: '100%' }} className='h-100'>
            <Card.Body>
              <Card.Title>Color Game</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Android</Card.Subtitle>
              <Card.Text variant="dark">
              Basic colorgame using jetpack compose
              </Card.Text>
              <Button variant="primary"><a href='https://github.com/AndriQuinn/colorgame-android' className='text-decoration-none text-light'> View </a></Button>
            </Card.Body>
          </Card>
        </Col>          

        <Col md={3} className='my-2 '>
          <Card style={{ width: '100%' }} className='h-100'>
            <Card.Body>
              <Card.Title>Word Counter</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Web</Card.Subtitle>
              <Card.Text variant="dark">
              Simple word counter using JS
              </Card.Text>
              <Button variant="primary"><a href='https://github.com/AndriQuin/Word-Counter' className='text-decoration-none text-light'> View </a></Button>
            </Card.Body>
          </Card>
        </Col>          

      </Row>
    </Container>
    
  );
}

export default Projects;