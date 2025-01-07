import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems , setShowIndex , child }) => { 
  const handleClick = () => {
   setShowIndex()
  };
  return (
    <div
      className="border-1 bg-gray-50  px-4 py-2 shadow-md my-2 cursor-pointer" onClick={handleClick}    
    >
      {/* 1.Header */}
      <div className="flex justify-between">
        <span className="font-bold">
          {data.title} ({data?.itemCards?.length})
        </span>    
        <i className="fas fa-chevron-up"></i>      
      </div>
      {/* 2.Body */}
      {showItems && <ItemList item={data} grandchild={child} />}
    </div>
  );
};

export default RestaurantCategory;
