import "../css/restaurantmenu.css";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantmenu from "../utils/useRestaurantmenu";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = () => {
  const { resid } = useParams();
  const resdetails = useRestaurantmenu(resid);

  if (!resdetails) {
    return <Shimmer />;
  }
  console.log("Res-details-res-menu", resdetails);

  const { name, city, avgRating, costForTwoMessage, cuisines , totalRatingsString , sla } =
    resdetails?.cards[2]?.card?.card.info;
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
            <h2 className="font-bold">{avgRating} ({totalRatingsString} )</h2>
            <li className="px-3">{costForTwoMessage}</li>
          </div>
          <h2 className="text-orange-600 text-sm font-bold underline cursor-pointer">{cuisines.toString()}</h2>
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

        {/* <div className="flex flex-col max-w-2xl mx-auto">
        <p className="mx-3 text-xl font-bold">Category</p>
          {itemCards?.map((obj) => {
            return (
              <div
                className="flex border-2 border-gray-200 shadow-lg p-2 m-2 rounded-lg"
                key={obj.card.info.id}
              >
                <div className="flex-1">
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
        </div> */}
        <div className="flex flex-col max-w-2xl mx-auto">
          {getCategories?.map((obj) => {
            return (
              <div key={obj.card.card.title}>
                <RestaurantCategory data={obj.card.card} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;
