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


Real Time Flow:
Step 1: Dispatch actions using Button Click
    1.1
            <button
            className="border-2 shadow-lg px-12 m-2 hover:bg-orange-300"
            onClick={() => {
            handleAddItem(obj);
            }}
            >
            Add
            </button>
    1.2
            const dispatch = useDispatch();
            const handleAddItem = (item) => {
            dispatch(addItem(item));
            };
Step 2: Calls Reducer Function to modify the slice of store (step 5  and step 4)
Step 3: Since it is subscribed to the store using selector , I can update easily the cart.

Summary:
1) Create Store using configureStore
2) Add Store to our application using Provider
3) Create a Slice => set initial value , and create actions in reducer function to modify the initial value using createSlice
4) Add Slice to our Store using configureStore
5) Subscribe using selector to get the updated value each time using useSelector hook

Real Time:
1) Push the payload to the store (using dispatch action and reducer function) - big effort
2) after that all will taken care of redux using selector , since it is subscribed to the store - small effort