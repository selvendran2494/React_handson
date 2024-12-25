import { useState } from "react";
import  restList from "../utils/mockData"
import RestaurantCard from "./RestaurantCard";
import Calculator from "./Calculator";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(restList);
  return (
    <main className="main">
      <button
        className="button-pad"
        onClick={() => {        
          const filterednewList = listofRestaurants.filter(
            (restaurant) => restaurant.card.card.info.avgRating >= 4.5
          );
          setlistofRestaurants(filterednewList);
          console.log("list",listofRestaurants)
        }}
      >
        Filter Highest Rating
      </button>

      <div className="container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resDatakey={restaurant}
          />
        ))}
      </div>
      <Calculator />
    </main>
  );
};

export default Body;
