import { imageUrl } from "../utils/constants";

const RestaurantCard = ({ resDatakey }) => {
  const {
    info: {
      name,
      cuisines,
      costForTwo,
      areaName,
      avgRating,
      cloudinaryImageId,
    },
  } = resDatakey;

  return (
    <div className="card">
      <img
        src={imageUrl + cloudinaryImageId}
        alt="Delicious Food"
        className="card-img"
      />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">{cuisines.join(",")}</h2>
        <p className="card-price">{costForTwo}</p>
        <p className="card-price">{areaName}</p>
        <p className="card-price">{avgRating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
