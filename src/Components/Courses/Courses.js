import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {

    const [courses, setCourses]= useState([])
    // fetch data 
    useEffect(() =>{
        fetch('/courses.json')
        .then(res=>res.json())
        .then(data=> setCourses(data) )
        },[])

    return (
        <div>
            {/* pass fetched  data to another component  */}
             <Row xs={1} md={3} className="g-4"> {
            courses.map(course => <Course
            key={course.id}
            course={course}
             >
                </Course>         
                )
            }</Row> 
         
        </div>
    );
};

export default Courses;