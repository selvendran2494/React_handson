import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item, grandchild }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {item?.map((obj) => {
        return (
          <div className="flex border-b-2 p-2 m-2" key={obj.card.info.id}>
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
                className="object-cover h-36 w-[156px] rounded-lg"
              />
              <button
                className="border-2 shadow-lg px-12 m-2 hover:bg-orange-300"
                onClick={() => {
                  handleAddItem(obj);
                }}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
