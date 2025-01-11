  
Parent Component
------------------
const [showIndex, setShowIndex] = useState(0);
  <div key={obj.card.card.title}>
                <RestaurantCategory
                  data={obj.card.card}
                  showItems={index == showIndex && true}
                  setShowIndex={() => {
                    setShowIndex(index);
                  }}
                  // I can pass it as a call back function to update state variable of my parent.
                />
              </div>

Child Component  
-----------------            
const RestaurantCategory = ({ data , showItems , setShowIndex }) => {
 const handleClick = () => {
   setShowIndex()
  };  
    <div
      className="border-1 bg-gray-50  px-4 py-2 shadow-md my-2 cursor-pointer" onClick={handleClick}    
    >
}

Here , the Child is on clicking modifying the state variable of my parent. 
directly it is not possible but by this way we can do.