import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState([]);
  const [filterState,setFilterState]=useState([]);

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9832379&lng=80.1821011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistofRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterState( json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)
  };
  return listofRestaurants.length === 0 ? (
    <div className="shimmer-wrapper">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <main className="main">
      <button
        className="button-pad"
        onClick={() => {
          const filterednewList = listofRestaurants.filter(
            (restaurant) => restaurant.info.avgRating >= 4.5
          );
          setlistofRestaurants(filterednewList);
        }}
      >
        Filter Highest Rating
      </button>
      <div className="input-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {        
            const filteredText = listofRestaurants.filter((obj) => obj.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilterState(filteredText);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {   
            fetchdata();
          }}
        >
          Reset
        </button>
      </div>

      <div className="container">
        {filterState.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resDatakey={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Body;
