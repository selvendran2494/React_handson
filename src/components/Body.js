import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);

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
  };
  if (listofRestaurants.length === 0) {
    return (
      <div className="shimmer-wrapper">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <Shimmer key={index} />
          ))}
      </div>
    );
  }
  return (
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

      <div className="container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant?.info?.id}
            resDatakey={restaurant}
          />
        ))}
      </div>
    </main>
  );
};

export default Body;
