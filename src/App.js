import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import Profile from "./components/Profile";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// I need AppLayout to Structure my Components 
 /**
     * Designing High Level Components
     * 
     * Header
     *  .Logo
     *  .NavItems(on RightSide)
     * 
     * Body
     *  .SearchBar
     *  .RestrauntList
     *    .ResturantCard
     *      .Image
     *      .Name
     *      .Rating 
     *      .Cusines
     * 
     * Footer
     *  .Copyright 
     *  .Link to social media
     */
 const AppLayout = ()=>{
    return(
        <div className="AppLayout">
           <Header />
           <Outlet />
           <Footer />
        </div>
    )
};
// ON certain path whatever you want load give it too element or errorElement
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children:[
                    {
                        path: "profile", /**
                                            "/profile" -> mean below
                                            localHost123:about/profile 

                                            "profile" => mean below
                                           
                                         */
                        element: <Profile />
                    }
                ]
            },
            {
                path: "restuarant/:id",
                element: <RestuarantMenu />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
       <RouterProvider router={appRouter}/>
    );