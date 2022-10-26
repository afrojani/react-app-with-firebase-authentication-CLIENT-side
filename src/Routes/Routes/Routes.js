import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog/Blog";
import Courses from "../../Pages/Courses/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <AllCourses></AllCourses>
            },
            {
                path: '/course/:id',
                element: <Courses></Courses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
]);