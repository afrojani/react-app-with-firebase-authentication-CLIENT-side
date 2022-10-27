import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Faqs from "../../Pages/AllCourses/Faqs";
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
                loader: () => fetch('https://assignment10-server-side-two.vercel.app/courses')
            },
            {
                path: '/faq',
                element: <Faqs></Faqs>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://assignment10-server-side-two.vercel.app/courses/${params.id}`)
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
                path: '/premium/:id',
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment10-server-side-two.vercel.app/premium/${params.id}`)
            },
        ]
    },
    { path: '*', element: <h4>404. This page is not found.</h4> }
]);