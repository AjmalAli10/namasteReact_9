import React from "react"
import "../styles/About.css";
import { Outlet } from "react-router-dom";
import ProfileFunctionComponent from "./Profile";
import Profile from "./ProfileClass";
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("Paren - constructor will called")
    }
    componentDidMount(){
        //Component Did mount is the best place to API call
        // console.log("Parent -  componentDidmount will be callled")
    }
    componentDidUpdate(){
        // console.log("Parent ComponentDidUpdate")
    }
    render(){
        // console.log("Parent -  render method will be called")
        return(
            <div className="about">
            <h1>About me Page</h1>
            <h2>This is the Namaste React course 07 , Finding the Path 🚀</h2>
            {/* <ProfileFunctionComponent name="Ajmal"/> */}
            <ProfileFunctionComponent />
            <Profile  name="First child "/>
            {/* <Profile name="Second child" /> */}
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