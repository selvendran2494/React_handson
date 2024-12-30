import { useEffect, useState } from "react";
import "../css/restaurantmenu.css";
import Shimmer from "./Shimmer";
import { imageUrl } from "../utils/constants";
import { useParams } from "react-router-dom";
const Restaurantmenu = () => {
  const [resdetails, setResdetails] = useState(null);
  const {resid}=useParams();
  console.log(resid)

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9832379&lng=80.1821011&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log("Full-json", json);
    console.log("info-json", json?.data?.cards[2]?.card?.card.info);
    setResdetails(json?.data);
  };

  if (!resdetails) {
    return <Shimmer />;
  }
  console.log("resdetails",resdetails);
  const { name, city, avgRating, costForTwoMessage, cuisines,cloudinaryImageId } = resdetails?.cards[2]?.card?.card.info;
  const { itemCards} = resdetails?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  console.log(itemCards)

  return (
    <div className="restaurant-container">
      {/* Banner Section */}
      <div className="restaurant-banner">
        <img
          src={imageUrl + cloudinaryImageId} style={{width:"400px",height:"400px"}}
          alt="Restaurant Banner"
          className="banner-image"
        />
        <h1 className="restaurant-name">{name}</h1>
      </div>

      {/* Details Section */}
      <div className="restaurant-details">
        <h2>Ratings: {avgRating}</h2>
        <h2>
          {cuisines} - {costForTwoMessage}
        </h2>
        {/* <h3>Address: {resdetails?.labels[1]?.message}</h3> */}
        <h3>City: {city}</h3>
      </div>

      {/* Menu Section */}
 
      <div className="menu-section">
        <h2>Menu Highlights</h2>
        <div className="menu-items">
          {itemCards.map((obj) => {
            return (
              <div className="menu-item" key={obj.card.info.id}>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${obj.card.info.imageId}`}
                  alt="Dish"
                  className="menu-image"
                />
                <h4>{obj.card.info.name}</h4>
                <p>{obj.card.info.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurantmenu;