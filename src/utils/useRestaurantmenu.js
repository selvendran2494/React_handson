import { useEffect, useState } from "react";

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
    console.log("Full-json", json);
    console.log("info-json", json?.data?.cards[2]?.card?.card.info);
    setResdetails(json?.data);
  };
  return resdetails;
};
export default useRestaurantmenu;
