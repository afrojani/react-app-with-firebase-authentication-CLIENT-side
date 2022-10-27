import React from 'react';
import { Accordion } from 'react-bootstrap';
const Blog = () => {
    return (
        <div className='container'>
            <h1 className='m-4'>Blog Questions.</h1>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>what is cors?</Accordion.Header>
                    <Accordion.Body>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. <br></br>
                        Top Alternatives to Firebase Authentication
                        Auth0. A set of unified APIs and tools that instantly enables Single Sign On and user management to all your applications. ...
                        MongoDB. MongoDB stores data in JSON-like documents that can vary in structure, offering. ...
                        Passport. ...
                        Okta. ...
                        Firebase. ...
                        JSON Web Token. ...
                        Keycloak. ...
                        Amazon Cognito.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body>
                        Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                        The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.<br></br>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                        Scalability, latency, and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return. <br></br>
                        Node.js takes a different approach. It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire. The callback function can handle requests with non-blocking I/O calls, and if necessary can spawn threads from a pool to execute blocking or CPU-intensive operations and to load-balance across CPU cores. Node’s approach to scaling with callback functions requires less memory to handle more connections than most competitive architectures that scale with threads, including Apache HTTP Server, the various Java application servers, IIS and ASP.NET, and Ruby on Rails.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;