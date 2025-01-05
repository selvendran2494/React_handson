import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showitems, setshowitems] = useState(true);
  const [showArrow, setshowArrow] = useState(true);
  const handleClick = () => {
    setshowitems(!showitems);
    setshowArrow(!showArrow);
  };
  return (
    <div
      className="border-2 bg-gray-50 rounded-lg  px-2 py-2 my-1 shadow-lg cursor-pointer"
      onClick={handleClick}
    >
      {/* 1.Header */}
      <div className="flex justify-between">
        <span className="font-extrabold">
          {data.title} ({data?.itemCards?.length})
        </span>
        {/* <span className="ml-2">
          <i className="fas fa-chevron-down"></i>
        </span>
        <span className="ml-2">
          <i className="fas fa-chevron-up"></i>
        </span> */}
        {showArrow ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </div>
      {/* 2.Body */}
      {showitems && <ItemList item={data} />}
    </div>
  );
};

export default RestaurantCategory;
