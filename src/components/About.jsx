import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <Container fluid className='m-0 p-5 bg-dark ' id='about'>
      <h1 className='text-white display-5 my-5'> About </h1>

      <Row>
        <Col className='bg-dark columnHero m-0 p-5 d-flex align-items-center'>
            <div>
                <p className='text-white'>
                    Hi! I'm Daniel Quinatac-an, 
                    <br/>
                    A student currently attending in University of Cabuyao under Bachelor of Science in Computer Science Program.
                    <p>
                        Im currently in my 3rd Year 1st Semester and this portolio is made to  showcase my skills, projects, and personal information
                        <br/>
                        serving as my professional online presence
                    </p>
                </p>  
            </div>
        </Col>
        <Col className='bg-dark columnHero m-0 p-0 d-flex align-items-center justify-content-center' >
          <Card style={{ width: '18rem' }} className='h-80'>
              <Card.Img
                variant="top"
                src="src/assets/ccs.png"
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

export default About;