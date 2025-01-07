import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showitems, setshowitems] = useState(false);
  const [showArrow, setshowArrow] = useState(true);
  const handleClick = () => {
    setshowitems(!showitems);
    setshowArrow(!showArrow);
  };
  return (
    <div
      className="border-1 bg-gray-50  px-4 py-2 shadow-md my-2 cursor-pointer"
      onClick={handleClick}
    >
      {/* 1.Header */}
      <div className="flex justify-between">
        <span className="font-bold">
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
