import React from 'react';
import './Details.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    let { id } = useParams();
    const [Details, setDetails] = useState([]);
    const [singleCourse, setSingleCourse] = useState({});
    useEffect(() => {
        fetch("/courses.json")
          .then((res) => res.json())
          .then((data) => setDetails(data));
      }, []);

      useEffect(() => {
        const found =Details.find(
          (course) => course.id === id
        );
        setSingleCourse(found);
      }, [Details]);
    



    return (
        <div className="single-card">

<Card>
 <img className="img-responsive" src={singleCourse?.image} alt="" />
  <Card.Header as="h2">{singleCourse?.name}</Card.Header>
  <Card.Body>
    <h1>{singleCourse?.brief}</h1>
    <br/>
    <h3>1 {singleCourse?.outline1}</h3>
    <h3>2 {singleCourse?.outline2}</h3>
    <h3>3 {singleCourse?.outline3}</h3>
    <h3>4 {singleCourse?.outline4}</h3>
    <h3>5 {singleCourse?.outline5}</h3>
    <br/>

    <Link
              to={ '/courses'  }
              activeStyle={{
              fontWeight: "bold",
              }}
              > 
              <Button>Back to Courses</Button>
                      </Link>

  </Card.Body>
</Card>
        </div>
    );
};

export default Details;