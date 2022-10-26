import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const Courses = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>this is courses section{course.name}</h2>
            <Card border="primary">
                <Card.Body >
                    <Card.Text >
                        <h5>{course.name}</h5>
                        <h4>{course.title}</h4>
                        <p>{course.body}</p>
                        <h6>Course Duration: {course.time}</h6>

                    </Card.Text>
                </Card.Body>
                <Card.Img className="img-fluid img-thumbnail" variant="bottom" src={course.image_url} />
            </Card>
        </div>
    );
};

export default Courses;