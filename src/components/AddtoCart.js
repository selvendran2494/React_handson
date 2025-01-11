import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const AddtoCart = () => {
  const cartItems = useSelector((store) => store.cart.items);  
  return (
    <div>
      <div className="text-center text-xl font-bold m-4">Add to Cart</div>
      <div className="w-1/2 mx-auto">
        <ItemList item={cartItems}></ItemList>
      </div>
    </div>
  );
};
export default AddtoCart;
