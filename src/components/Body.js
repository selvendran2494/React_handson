import restList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    return (
      <main className="main">
        <div className="container">
          {restList.map((restaurant) => (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resDatakey={restaurant}
            />
          ))}
        </div>
      </main>
    );
  };

  export default Body