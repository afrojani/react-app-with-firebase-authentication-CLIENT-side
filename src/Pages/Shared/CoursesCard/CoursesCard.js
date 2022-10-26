import React from 'react';
import Card from 'react-bootstrap/Card';


const CoursesCard = ({ courses }) => {
    console.log(courses);
    const { body, image_url, name, time, title } = courses;
    return (
        <div>

            <Card border="primary">
                <Card.Body >
                    <Card.Text >
                        <h5>{name}</h5>
                        <h4>{title}</h4>
                        <p>{body}</p>
                        <h6>Course Duration: {time}</h6>

                    </Card.Text>
                </Card.Body>
                <Card.Img className="img-fluid img-thumbnail" variant="bottom" src={image_url} />
            </Card>
        </div>
    );
};

export default CoursesCard;