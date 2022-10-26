import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesCard from '../../Shared/CoursesCard/CoursesCard';
import Row from 'react-bootstrap/Row';


const Home = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h2>this is home page.{allCourses.length}</h2>
            <Row sm={1} md={2}>

                {
                    allCourses.map(courses => <CoursesCard
                        key={courses.id}
                        courses={courses}
                    ></CoursesCard>)
                }

            </Row>

        </div>
    );
};

export default Home;