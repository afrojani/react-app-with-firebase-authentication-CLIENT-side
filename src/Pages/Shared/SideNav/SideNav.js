import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaGoogle, FaGithub } from "react-icons/fa";

const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <div className='mb-5'>
                <DropdownButton id="dropdown-basic-button" title="Enroll Now">
                    <Dropdown.Item eventKey="1" active>Sign in with <FaGoogle></FaGoogle></Dropdown.Item>
                    <Dropdown.Item eventKey="2">Sign in with  <FaGithub></FaGithub></Dropdown.Item>
                </DropdownButton>
            </div>
            <h4>All Courses: {courses.length}</h4>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/courses/${course.id}`}><Button variant="outline-primary">{course.name}</Button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;