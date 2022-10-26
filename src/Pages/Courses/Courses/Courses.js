import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>this is courses section{course.name}</h2>
        </div>
    );
};

export default Courses;