import { useState, useEffect } from "react";
const useRestuarantMenu = (resId) =>{
    const [res, setRes] = useState(null);
    useEffect(()=>{
        getRestuarantMenu();
    },[]);
    const getRestuarantMenu = async ()=>{
        try{
             const getData = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+resId);
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