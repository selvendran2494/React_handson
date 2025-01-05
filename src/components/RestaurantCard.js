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
    <div className="w-[300px] rounded-lg py-2 gap-8">
      <img
        src={imageUrl + cloudinaryImageId}
        alt="Delicious Food"
        className="h-[200px] rounded w-full object-cover py-2"
      />
      <div className="flex flex-col items-center">
        <h2 className="w-full break-words items-center text-center font-bold">{name}</h2>
        <h2 className="w-full break-words items-center text-center">{cuisines.join(",")}</h2>
        <p className="">{costForTwo}</p>
        <p className="">{areaName}</p>
        <p className="font-bold">{avgRating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
