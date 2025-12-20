import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import RootLayout from "./Layouts/RootLayout";
import Profile from "./Pages/Profile";
import AddModels from "./Pages/AddModels";
import AllModel from "./Pages/AllModel";
import Contact from "./Pages/Contact";
import Purchase from "./Pages/Purchase";
import Login from "./Pages/Login";
import MyModel from "./Pages/MyModel";
import Register from "./Pages/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";
// import { Contact } from "lucide";



export const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [
            {   
                path:'/',
                index: true,
                Component: Home
            },
            {
                path: 'profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: 'addModels',
                element:<PrivateRoute><AddModels></AddModels></PrivateRoute>
            },
            {
                path: 'allModels',
                element:<PrivateRoute><AllModel></AllModel></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/models')
                .then(res => res.json())

            },
            {
                path: 'myModels',
                element:<PrivateRoute><MyModel></MyModel></PrivateRoute>

            },
            {
                path: 'contact',
                element:<PrivateRoute><Contact></Contact></PrivateRoute>
            },
            {
                path: 'purchase',
                element:<PrivateRoute><Purchase></Purchase></PrivateRoute>
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component: Register

            },
        ]
    }
])