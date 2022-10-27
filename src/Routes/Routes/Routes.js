import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import PremiumAccess from "../../Pages/PremiumAccess/PremiumAccess";
import Register from "../../Pages/SignIn/Register/Register";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses',
                element: <AllCourses></AllCourses>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/premium',
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>
            },
        ]
    }
]);