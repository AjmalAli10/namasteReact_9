import { useState } from "react";
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import "../styles/Body.css";
import { filterData } from "../utlis/helper";
import useRestuarantData from "../utlis/useRestuarantData";
import useOnline from "../utlis/useOnline";
const Body = () => {
  const [filterRestuarants, setFilterRestuarants, allRestuarants] =
    useRestuarantData();
  const [searchInput, setSearchInput] = useState("");
  const isOnline = useOnline();
  console.log("render");

  //Early return 
  // if(!isOnline){
  //   return (
  //     <div>
  //       <h2>you are get 🛑 Disconnected. Please connect again</h2>
  //     </div>
  //   )
  // }
  if (!allRestuarants) {
    return (
      <>
        <h4>"Due to it is giving undefined so I Returned it Early"</h4>
      </>
    );
  }
  return (
    <>
      <div className='search-Container'>
        <input
          className='input-search'
          type='search'
          placeholder='search'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button
          type='button'
          className='filter-button'
          onClick={() => {
            const data = filterData(searchInput, allRestuarants);
            console.log("data", data);
            setFilterRestuarants(data);
          }}
          >
          Search
        </button>
      </div>
      {allRestuarants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='restuarant-list'>
          {filterRestuarants?.length === 0 ? (
            <h3>"No Resturants Matching your Search"</h3>
          ) : (
            filterRestuarants?.map((restuarant) => {
              return (
                <Link
                  to={"restuarant/" + restuarant.data.id}
                  key={restuarant.data.id}>
                  <RestuarantCard {...restuarant.data} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};
export default Body;
