import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlinestatus";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const checkOnlineStatus = useOnlinestatus();

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
    setFilterState(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  if (checkOnlineStatus === false) {
    return <p>Please Check the internet connection </p>;
  }
  return listofRestaurants.length === 0 ? (
    <div className="shimmer-wrapper">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <Shimmer key={index} />
        ))}
    </div>
  ) : (
    <main className="bg-yellow-50">
      <button
        className="m-2 px-3"
        onClick={() => {
          const filterednewList = listofRestaurants.filter(
            (restaurant) => restaurant.info.avgRating >= 4.5
          );
          setlistofRestaurants(filterednewList);
          setFilterState(filterednewList);
        }}
      >
        Filter Highest Rating
      </button>
      <div className="inline">
        <input className="border-2 border-black"
          type="text"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className=" border-2 border-amber-500 m-3 px-3"
          onClick={() => {
            const filteredText = listofRestaurants.filter((obj) =>
              obj.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterState(filteredText);
          }}
        >
          Search
        </button>
        <button
          className=" border-2 border-amber-500  px-3"
          onClick={() => {
            fetchdata();
          }}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-wrap justify-evenly p-3">
        {filterState.map((restaurant) => (
          <Link
            className="link-reset"
            key={restaurant?.info?.id}
            to={`/restaurant/${restaurant?.info?.id}`}
          >
            <RestaurantCard resDatakey={restaurant} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Body;
