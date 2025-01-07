import "../css/restaurantmenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu = () => {
  const testDatafromparent = "I have a data in Restaurant menu => a top level component."
  const { resid } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resdetails = useRestaurantmenu(resid);

  if (!resdetails) {
    return <Shimmer />;
  }
  console.log("Res-details-res-menu", resdetails);

  const {
    name,
    city,
    avgRating,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
  } = resdetails?.cards[2]?.card?.card.info;
  const getCategories =
    resdetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log("getCategories", getCategories);
  const { itemCards } =
    resdetails?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.categories?.[0] ||
    resdetails?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log("itemCards", itemCards);
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-extrabold text-xl py-5">{name}</h1>
      <div className="manual-shadow">
        <div className="border-2 border-gray-300 rounded-lg shadow-lg px-3 py-3 max-w-2xl mx-auto inner-shadow">
          {/* Banner Section */}

          {/* Details Section */}
          <div className="py-3">
            <div className="flex">
              <h2 className="font-bold">
                {avgRating} ({totalRatingsString} )
              </h2>
              <li className="px-3">{costForTwoMessage}</li>
            </div>
            <h2 className="text-orange-600 text-sm font-bold underline cursor-pointer">
              {cuisines.toString()}
            </h2>
            <h3 className="py-3">
              <span className="font-bold text-sm">Outlet</span>
              <span className="text-sm mx-1">{city}</span>
            </h3>
            <span className="font-bold text-sm">{sla?.slaString}</span>
          </div>
        </div>
      </div>
      {/* Menu Section */}
      <div className="menu-section">
        <h2 className="font-bold text-center">Menu Highlights</h2>
        <div className="flex flex-col max-w-2xl mx-auto">
          {getCategories?.map((obj, index) => {
            return (
              <div key={obj.card.card.title}>
                <RestaurantCategory
                  data={obj.card.card}
                  showItems={index == showIndex && true}
                  setShowIndex={() => {
                    setShowIndex(index);
                  }}
                  child = {testDatafromparent}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;
