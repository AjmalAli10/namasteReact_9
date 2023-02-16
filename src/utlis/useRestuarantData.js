import { useState, useEffect } from "react";
import axios from "axios";
const useRestuarantData = ()=>{
    const [allRestuarants, setAllRestuarants] = useState([]);
    const [filterRestuarants, setFilterRestuarants] = useState([]);
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
    return [filterRestuarants, setFilterRestuarants, allRestuarants, setAllRestuarants]
};
export default useRestuarantData;