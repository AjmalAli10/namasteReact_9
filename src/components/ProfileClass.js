import React from "react";
import Shimmer from "./Shimmer";
class Profile extends React.Component {
    constructor(props) {
        super(props);
        //create State
        this.state = {
            userInfo: []
        },
        this.handleClick = this.handleClick.bind(this)
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/AjmalAli10");
        const json = await data?.json();
        console.log(json)
        this.setState({
            userInfo: json,
        });
    };
    handleClick (){

    }
    render(){
    const { name, avatar_url, bio } = this?.state?.userInfo
    return this, this.state.userInfo.length === 0 ?
        (<Shimmer />) : (
            <div>
                <h2>Profile class Component</h2>
                <img src={avatar_url} alt="avatar" width="300" hieght="200" />
                <h2>Name: {name}</h2>
                <h2>Bio: {bio}</h2>
                <button onClick={this.handleClick}>button</button>
            </div>
        )
}
};

export default Profile;

/**
 * RENDER phase - 
 * 
 * Parent - costrcutor
 * paren - render
 * 
 * child  -constructor'
 * child - render
 * 
 * COmmit Phase - 
 * DOM get Updated;
 * 
 * Parent comonentDidMOunt
 * logged api 
 * 
 * Child - componentDIdMount
 * 
 * there is setter fumction so It will trigger RE-render
 * child - First child render
 * 
 */