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
// import { Contact } from "lucide";



export const router = createBrowserRouter([
    {
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'profile',
                Component: Profile
            },
            {
                path: 'addModels',
                Component: AddModels
            },
            {
                path: 'allModels',
                Component: AllModel
            },
            {
                path: 'myModels',
                Component: MyModel
            },
            {
                path: 'contact',
                Component: Contact
            },
            {
                path: 'purchase',
                Component: Purchase
            },
            {
                path: 'profile',
                Component: Profile
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