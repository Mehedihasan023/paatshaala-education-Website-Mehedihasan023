import React from 'react';
import { Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Corse = (props) => {
    const{image,name,id}=props.course;
    // console.log(course)

    return (
        <div>
 <Container>

    <Col>
      <Card>
        <Card.Img variant="top" className="img-responsive" src={image}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link
                    to={ `/courses/${id}`  }
                    activeStyle={{
                          fontWeight: "bold",
                        }}
                        > 
                    <Button>Details</Button>
                      </Link>
        </Card.Body>
      </Card>
    </Col>
    </Container>   
        </div>
    );
};

export default Corse;