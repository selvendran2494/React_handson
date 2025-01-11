Step 1 :
npm install react-redux
npm install @reduxjs/toolkit

Step 2:
We need to create own store => utils => appstore.js
        const appStore = configureStore();

Step 3:
Add Store to our application => Go to root of application => App.js
        <Provider store={appStore}></Provider>

Step 4:
Create a slice => utils => cartSlice.js
    4.1.1 => use CreateSlice to create a new slice
        const cartSlice = createSlice({
            name:"cart",
            initialState:{
                items:[]
            }
        })
    4.1.2 => use reducer to modify the state based on action , small api to communicate with redux tool
        const cartSlice = createSlice({
        name:"cart",
        initialState:{
            items:[]
        },
        reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payload);
            }
        }
        })
    4.1.3 => export slice and reducer below
       export const { addItem, deleteItem, clearItem } = cartSlice.actions;
       export default cartSlice.reducer;
Step 5 :
Add slice to appStore , big reducer is whole app's reducer , small reducer is for different slices.
        import cartReducer from "./cartSlice"
        const appStore = configureStore({
            reducer:{
                cart:cartReducer
            }
        });
Step 6 : 
Subscribe to the store by Selector (READ DATA , automatically updated) [To get the result]
        const cart = useSelector((store)=>store.cart.items);


Higher Order Components
---------------------------
- normal Js function
- takes component as Input => enhances the component => returns back new component.
- import as a named Import

Normal Component
---------------------
const RestaurantCard = ({ resDatakey }) => {
  return (
    <div className="w-[300px] rounded-lg py-2 gap-8">     
    </div>
    </div>
  );
};
Higher Order Component
-----------------------
export const withbestsellerTag = (RestaurantCard) => {
  return (props) => {  
    return (
      <div>
        <p className="absolute bg-black text-white rounded-lg px-2">Best Ratings</p>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

import RestaurantCard, { withbestsellerTag } from "./RestaurantCard";