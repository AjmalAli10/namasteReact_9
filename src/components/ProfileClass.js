import React from "react";
class Profile extends React.Component{
    constructor(props){
        super(props);
        //create State
        this.state = {
            count: 0,
            count2: 0,
            userInfo: {
                name: "dummy name",
                location: "dummy lication"
            }
        }
        console.log("child - " +" constructor " + this.props.name)
    }
    // async componentDidMount(){
    //     const data = await fetch("https://api.github.com/users/AjmalAli10");
    //     const json = await data?.json();
    //     console.log(json)
    //     this.setState({
    //         userInfo:json,
    //     });
    //     console.log("child - " +" componentDidMount " + this.props.name);
    // }
    componentDidMount(){
         this.timerId = setInterval(()=>{
            console.log("Namaste React OP")
        }, 1000)
        console.log("ComponentDidMount")
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.count !== prevState.count){
            //.....Then Do something with count 1
        }
        if(this.state.count2 !== prevState.count2){
            //.... Then do something with count 2
        }
        console.log("ComponentDidUpdate - "+ this.props.name);
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
        console.log("componentWillUmount")
    }
    //The most important part of the class based component is your render method
    // This Render method return some jSX
    render(){
       const {name, avatar_url, bio}=this?.state?.userInfo
        console.log("child - " + " render " + this.props.name)
        return(
            <div>
                <h2>Profile class Component</h2>
                <img src={avatar_url} alt="avatar" width="300" hieght="200" />
                <h2>Name: {name}</h2>
                <h2>Bio: {bio}</h2>
                {/* <h2>count: {this.state.count}</h2>
                <button onClick={()=>{
                    //In the setState you set a modified object
                    // WE do not mutate setState directly - ⬇️
                                            // this.setState = something
                    this.setState({
                        count: this.state.count +  1
                    })
                }}>class count</button> */}
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