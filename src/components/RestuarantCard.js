import "../styles/RestuarantCard.css";
import config from "../config";
const RestuarantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) =>{
    return(
        <div className="card">
            <img src={config.IMG_CDN_LINK+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
};
export default RestuarantCard;