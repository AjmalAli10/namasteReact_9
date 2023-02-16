import React from "react"
import "../styles/About.css";
import { Link, Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";
class About extends React.Component{
    render(){
        return(
            <div className="about">
            <h1>About me Page</h1>
            <h2>This is the Namaste React course 07 , Finding the Path 🚀</h2>
            <Link to="profile">Click ME to see the profile</Link>
            <Outlet />
            </div>
        )
    }
};
export default About;

//if miltiple child get enouncter
/**
 * REDNER PHASE  - 
 * 
 * Parent - Parent constructor
 * Parent - Parent render
 * 
 * child - First child constructor
 * child - First child render
 * child - Second child constructor
 * child - Second child render
 * 
 * Comit Phase -
 * DOM will Updated then it will call ⬇️
 * 
 * child - First child ComponentDidMount
 * child - Second Child CompoentDidMount
 * 
 * Parent - Parent componentDidMount
 */