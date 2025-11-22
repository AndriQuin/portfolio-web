import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Skills = () => {
  return (
    <Container fluid className='m-0 p-5 bg-dark ' id='skills'>
      <h1 className='text-white display-5 my-5'> Skills </h1>
      <Row>  
        
        <Col md={3} className='my-2 '>
          <Card style={{ width: '100%' }} className='h-100'>
            <Card.Img
              variant="top"
              src="src/assets/reactJS.png"
              style={{
                height: '150px',       
                width: '100%',         
                objectFit: 'cover'     
              }}
            />
            <Card.Body>
              <Card.Title>React JS</Card.Title>
              <Card.Text variant="dark">
              React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless".
              It is maintained by Meta and a community of individual developers and companies.
              </Card.Text>
              <Button variant="primary"><a href='https://react.dev/' className='text-decoration-none text-light'> Learn More </a></Button>
            </Card.Body>
          </Card>
        </Col>      

        <Col md={3} className='my-2 '>
          <Card style={{ width: '100%' }} className='h-100'>
            <Card.Img
              variant="top"
              src="src/assets/MySQL.png"
              style={{
                height: '150px',       
                width: '100%',         
                objectFit: 'cover'     
              }}
            />
            <Card.Body>
              <Card.Title>MySQL</Card.Title>
              <Card.Text variant="dark">
              MySQL is a widely used, free, and open-source relational database management system (RDBMS) ideal for both small and large applications.
              </Card.Text>
              <Button variant="primary"><a href='https://www.mysql.com/' className='text-decoration-none text-light'> Learn More </a></Button>  
            </Card.Body>
          </Card>
        </Col>      

        
        <Col md={3} className='my-2 '>
          <Card style={{ width: '100%' }} className='h-100'>
            <Card.Img
              variant="top"
              src="src/assets/reactbs.png"
              style={{
                height: '150px',       
                width: '100%',         
                objectFit: 'cover'     
              }}
            />
            <Card.Body>
              <Card.Title>React Bootstrap</Card.Title>
              <Card.Text variant="dark">
              React-Bootstrap replaces the Bootstrap JavaScript.
              Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery.
              </Card.Text>
              <Button variant="primary"><a href='https://react-bootstrap.netlify.app/' className='text-decoration-none text-light'> Learn More </a></Button>
            </Card.Body>
          </Card>
        </Col>      

        <Col md={3} className='my-2 '>
          <Card style={{ width: '100%' }} className='h-100'>
            <Card.Img
              variant="top"
              src="src/assets/jetpackcompose.png"
              style={{
                height: '150px',       
                width: '100%',         
                objectFit: 'cover'     
              }}
            />
            <Card.Body>
              <Card.Title>Jetpack Compose</Card.Title>
              <Card.Text variant="dark">
              Jetpack Compose is Android's recommended modern toolkit for building native UI. It simplifies and accelerates UI development on Android.
              </Card.Text>
              <Button variant="primary"><a href='https://developer.android.com/compose' className='text-decoration-none text-light'> Learn More </a></Button>
            </Card.Body>
          </Card>
        </Col>      

      </Row>
    </Container>
    
  );
}

export default Skills;