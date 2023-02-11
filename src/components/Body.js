import { useEffect, useState } from "react";
import axios from "axios";
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import "../styles/Body.css";

const filterData = (input, restuarantes)=>{
    console.log("input - ",input)
    console.log("resturaant data before filter method - ",restuarantes)
    const data = restuarantes?.filter((restuarant)=> (restuarant?.data?.name)?.toLowerCase()?.includes(input?.toLowerCase()) );
    return data
};

const Body = () =>{
    const [allRestuarants, setAllRestuarants] = useState([]);
    const [filterRestuarants, setFilterRestuarants] = useState([])
    const [searchInput, setSearchInput] = useState("");

    //USeEffect with Empty dpeendency array => it will get call after Intial render
    useEffect(()=>{
        getRestuarantData()
    },[]); 

    async function getRestuarantData(){
        try{
            const res = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
            console.log(res)
            setAllRestuarants(res?.data?.data?.cards[2]?.data?.data?.cards);
            setFilterRestuarants(res?.data?.data?.cards[2]?.data?.data?.cards);
        }catch(e){
            console.log(e.res)
        }
    };

    console.log("render");
    if(!allRestuarants){
        return (
            <>
            <h4>
            "Due to it is giving undefined so I Returned it Early"
            </h4>
            </>
            )
    }
    return (allRestuarants?.length === 0)? (<Shimmer />):(
        <>
        <div className="search-Container">
            <input
            className="input-search"
            type="search" 
            placeholder="search" 
            value={searchInput} 
            onChange={(e)=>setSearchInput(e.target.value)}
            />

            <button
            type="button"
            className="filter-button"
            onClick={()=>{
                const data = filterData(searchInput, allRestuarants);
                console.log("data",data)
                setFilterRestuarants(data)

                //again set to orginal data as it was original data. because restuarants StateVariable has always be original data. So that If we cancel something out from the input 
            }}>Search</button>
        </div>
        <div className="restuarant-list">
            {
                (filterRestuarants?.length === 0) 
                ? 
                (<h3>"No Resturants Matching your Search"</h3>)
                :
                (filterRestuarants?.map((restuarant)=>{
                    return (
                        <Link to={"restuarant/"+restuarant.data.id} key={restuarant.data.id}>
                        <RestuarantCard {...restuarant.data}/>
                        </Link>
                    )
                }))
            }
        </div>
        </>
    )
};
export default Body;