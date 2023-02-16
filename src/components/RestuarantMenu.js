import { useParams } from "react-router-dom";
import config from "../config";
import "../styles/RestuarantMenu.css";
import Shimmer from "./Shimmer";
import useRestuarantMenu from "../utlis/useRestuarantMenu";
function RestuarantMenu() {
  const { id: resId } = useParams();
  const res = useRestuarantMenu(resId);

  return !res ? (
    <Shimmer />
  ) : (
    <div className='restuarant-menu'>
      <div className='restuarant-details'>
        <h2>Restuarant Menu : {resId}</h2>
        <img src={config.IMG_CDN_LINK + res?.cloudinaryImageId} />
        <h2>{res.name}</h2>
        <h3>
          {res.locality}, {res.area}, {res.city}
        </h3>
        <h3>Rating {res.avgRating}</h3>
        <h3>{res.costForTwoMsg}</h3>
      </div>
      {/* {console.log(Object.values(res?.menu?.items))} */}
      <div>
        <h2>Menu</h2>
        <div>
          <ul>
            {Object.values(res?.menu?.items).map((item) => (
              <li key={item.id}>{item?.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default RestuarantMenu;
