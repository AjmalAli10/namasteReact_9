import {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import Profile from "./components/ProfileClass";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Instamart = lazy(()=> import("./components/Instamart"));

// const Body = lazy(()=>import("./components/Body"));
 const AppLayout = ()=>{
    return(
        <div className="AppLayout">
           <Header />
           <Outlet />
           <Footer />
        </div>
    )
};
// ON certain path whatever you want load it too element or errorElement
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
            },
            {
                path: "/Instamart",
                element: <Suspense fallback= {<h2>Loading...🔃</h2>}>
                    <Instamart />
                </Suspense>
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
       <RouterProvider router={appRouter}/>
    );