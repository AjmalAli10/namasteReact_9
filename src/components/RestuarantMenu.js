import { useEffect, useState } from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import config from "../config";
import "../styles/RestuarantMenu.css";
import Shimmer from "./Shimmer";
function RestuarantMenu(){
     const [res, setRes] = useState(null)
    //  console.log(useState())
    /** Below are Expriment */
    // const restuarantMenu= useState({});
    // const res = restuarantMenu[0];
    // const setRes = restuarantMenu[1];
    // const {
    //     name, 
    //     cloudinaryImageId, 
    //     area, 
    //     locality, 
    //     city,
    //     avgRating,
    //     costForTwoMsg,
    //     menu
    //     } = res;
    let params = useParams();
    // let id  =params.id;
    const {id: resId} = params;
    // const {id} = params;
    /**
     * On the Left Hand  of Assignment operator of object distructutring.
     * 
     * distructre's Key refrence to params's key and while distructure's key's * value represent new Variable;
     *  console.log(params)
     *  console.log(menuId)
     *  console.log(id)
     */
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
    }
    // console.log(restuarantMenu);
    // console.log(res)
    console.log("render");
    // console.log(setRes)
    return(!res) ? (<Shimmer />):
    (<div className="restuarant-menu">
            <div className="restuarant-details">
                <h2>Restuarant Menu : {resId}</h2>
                <img src={config.IMG_CDN_LINK+res?.cloudinaryImageId} />
                <h2>{res.name}</h2>
                <h3>{res.locality}, {res.area}, {res.city}</h3>
                <h3>Rating {res.avgRating}</h3>
                <h3>{res.costForTwoMsg}</h3>
            </div>
            {/* {console.log(Object.values(res?.menu?.items))} */}
            <div>
                <h2>Menu</h2>
                <div>
                    <ul>
                        {
                            Object.values(res?.menu?.items).map(item=>(
                                <li key={item.id}>{item?.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>)
}
export default RestuarantMenu;