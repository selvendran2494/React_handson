import "../css/restaurantmenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import { useState, useEffect } from "react";

const Restaurantmenu = () => {
  const { resid } = useParams();
  const resdetails = useRestaurantmenu(resid);
  const [itemCards, setItemCards] = useState([]);
  const [bestseller, setBestseller] = useState([]);

  useEffect(() => {
    if (resdetails) {
      const initialItemCards = resdetails?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
      setItemCards(initialItemCards);
      setBestseller(initialItemCards); // Initially show all items
    }
  }, [resdetails]);

  if (!resdetails) {
    return <Shimmer />;
  }

  console.log("resdetails", resdetails);
  const {
    name,
    city,
    avgRating,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
  } = resdetails?.cards[2]?.card?.card.info;

  return (
    <div className="restaurant-container">
      <div className="border-2 border-gray-300 rounded-lg shadow-lg px-3 py-3 w-1/2 mx-auto">
        {/* Banner Section */}
        <h1 className="font-bold text-left">{name}</h1>
        {/* Details Section */}
        <div className="py-3">
          <div className="flex">
            <h2 className="font-bold">Ratings: {avgRating}</h2>
            <li className="px-3">{costForTwoMessage}</li>
          </div>
          <h2>{cuisines.toString()}</h2>
          <h3>
            <span className="font-bold">Outlet</span> {city}
          </h3>
        </div>
      </div>
      {/* Menu Section */}
      <div className="menu-section">
        <h2 className="font-bold text-center">Menu Highlights</h2>

        <div className="flex justify-center items-center">
          <button
            className="border-1 shadow-lg px-6 m-2 rounded-lg bg-orange-300"
            onClick={() => {
              const filteredBestsellers = itemCards.filter((obj) => {
                return obj.card.info.ribbon?.text === "Bestseller";
              });
              console.log(filteredBestsellers);
              setBestseller(filteredBestsellers);
            }}
          >
            Best Seller
          </button>
        </div>

        <div className="flex border-2 border-gray-200 shadow-lg p-2 m-2 rounded-lg max-w-2xl mx-auto">
          <h1 className="font-bold">Starters ({itemCards?.length})</h1>
        </div>
        <div className="flex flex-col max-w-2xl mx-auto">
          {bestseller?.map((obj) => {
            return (
              <div
                className="flex border-2 border-gray-200 shadow-lg p-2 m-2 rounded-lg"
                key={obj.card.info.id}
              >
                <div className="flex-1">
                  <p className="text-orange-500 font-bold">
                    {obj.card.info.ribbon?.text}
                  </p>
                  <h4 className="font-bold">{obj.card.info.name}</h4>
                  <h4 className="font-bold">
                    ₹{obj.card.info.price || obj.card.info.defaultPrice / 100}
                  </h4>
                  <p>{obj.card.info.description}</p>
                </div>
                <div className="flex-shrink-0 flex flex-col">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${obj.card.info.imageId}`}
                    alt="Dish"
                    className="object-contain h-24 rounded-lg"
                  />
                  <button className="border-2 shadow-lg px-12 m-2 hover:bg-orange-300">
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;