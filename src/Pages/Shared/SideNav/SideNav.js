import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SideNav = () => {

    const { providerSignIn } = useContext(AuthContext);
    // google sign in

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handleGitHubSignin = () => {
        providerSignIn(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }


    // for data loading from server
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://assignment10-server-side-two.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    // data loading end
    return (
        <div>
            <div className='mb-5'>
                <DropdownButton id="dropdown-basic-button" title="Enroll Now">
                    <Dropdown.Item onClick={handleGoogleSignIn} eventKey="1" active>Sign in with <FaGoogle></FaGoogle></Dropdown.Item>
                    <Dropdown.Item onClick={handleGitHubSignin} eventKey="2">Sign in with  <FaGithub></FaGithub></Dropdown.Item>
                </DropdownButton>
            </div>
            <h4>All Courses:</h4>
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