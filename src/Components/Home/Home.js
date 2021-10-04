import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    const url = '/courses';

return (
    <div>
      <Header></Header>
{/* use bootstrap card to show some course info */}
<Container>
  <Row xs={1} md={4} className="g-2">

    <Col>
      <Card >
        <Card.Img variant="top" className="img-responsive" src="https://previews.123rf.com/images/keviz/keviz1803/keviz180301765/98577878-reading-a-book-logo.jpg" />
        <Card.Body>
          <Card.Title>AWESOME COURSES</Card.Title>
          <Link to={url}>
                <Button>Learn More</Button>
            </Link>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" className="img-responsive" src="https://cdn.dribbble.com/users/1787323/screenshots/11115035/media/acd6ef3bfd4fd4d9a38d2ee945d3bce8.png?compress=1&resize=400x300" />
        <Card.Body>
          <Card.Title>EXPERIENCED TEACHERS</Card.Title>
          <Link to={url}>
                <Button>Learn More</Button>
            </Link>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" className="img-responsive" src="https://thumbs.dreamstime.com/b/photography-workshop-black-glyph-icon-photography-workshop-black-glyph-icon-practical-lesson-photography-performing-skill-209615878.jpg" />
        <Card.Body>
          <Card.Title>PRACTICAL CLASSES</Card.Title>
          <Link to={url}>
                <Button>Learn More</Button>
            </Link>
        </Card.Body>
      </Card>
      </Col>
      <Col>
      <Card>
        <Card.Img variant="top" className="img-responsive" src="https://image.shutterstock.com/image-vector/valid-seal-icon-orange-circle-260nw-1103422097.jpg" />
        <Card.Body>
          <Card.Title>VALIDATE CERTIFICATE</Card.Title>
          <Link to={url}>
                <Button>Learn More</Button>
            </Link>
        </Card.Body>
      </Card>
    </Col>

</Row>
</Container>






<Footer></Footer>
          </div>
    );
};

export default Home;