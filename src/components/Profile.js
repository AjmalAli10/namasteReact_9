import { useEffect, useState } from "react";
function Profile(props){
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    // useEffect(()=>{
    //     // console.log("useEffect")
    //     let timer =setInterval(()=>{
    //         console.log("NamasteReact OP from useEffect")
    //     },1000);
    //     console.log("useEffect")
    //     //"this function is called when you are unMounting this component"⬇️
    //     return ()=>{
    //         clearInterval(timer)
    //         console.log("useEffect return")
    //     }
    // })
    console.log("render")
    return (
        <div>
            <h2>Profile function component</h2>
            <h2>name: {props.name}</h2>
            <h2>count: {count}</h2>
            <button onClick={()=>{
                setCount(count + 1)
            }}>count</button>
        </div>
    )
}
export default Profile;