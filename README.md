useState()
--------------
Super powerful react variable keeps UI layer in sync with data layer
Whenever State variable updates , React Re-renders the component (removes the body and update quickly)

const [data,setData]=useState([]);
setData("data1")

Now my data is "data1"

useEffect()
-----------------
If I need to write something after rendering the component (called after my component renders)
e.g., api call [FLOW : Quickly renders -> make api call -> fill the details]

Cases:
---------
1) with dependency array => called eveytime when dependency variable is updated.
2) without a dependency array => will run every time the component renders or re-renders.
3) without empty dependency array => runs only once—after the initial render of the component. It does not run again on subsequent re-renders of the component.

  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9832379&lng=80.1821011&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistofRestaurants(data);
  }
 
Custom Hooks
------------
const useRestaurantmenu = (resid) => {
  const [resdetails, setResdetails] = useState("");
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9832379&lng=80.1821011&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();  
    setResdetails(json?.data);
  };
  return resdetails;
};
export default useRestaurantmenu;

JS Function
------------
const Restaurantmenu = () => {
  const { resid } = useParams();
  const resdetails = useRestaurantmenu(resid);
  const { itemCards } =
    resdetails?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
}