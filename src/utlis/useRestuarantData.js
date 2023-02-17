import { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
const useRestuarantData = ()=>{
    const [allRestuarants, setAllRestuarants] = useState([]);
    const [filterRestuarants, setFilterRestuarants] = useState([]);
    useEffect(()=>{
        console.log("useEffect from allRestuaranList")
        getRestuarantData()
    },[]); 
    async function getRestuarantData(){
        try{
            const res = await axios.get(config.Restuarant_List_API);
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