import { useState, useEffect } from "react";
import config from '../config';
const useRestuarantMenu = (resId) =>{
    const [res, setRes] = useState(null);
    useEffect(()=>{
        getRestuarantMenu();
    },[]);
    const getRestuarantMenu = async ()=>{
        try{
             const getData = await fetch(config.Restuarant_Menu_API+resId);
             const getMenuData = await getData.json();
             setRes(getMenuData.data);
             console.log(getMenuData);
        }catch(e){
         console.log(e)
        }
     };
    return res;
};
export default useRestuarantMenu;