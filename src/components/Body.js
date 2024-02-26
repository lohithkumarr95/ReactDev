import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_RESTAURANT_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(SWIGGY_RESTAURANT_API);
    const json = await result.json();

    const dataItems =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // Optional Chaining
    setListOfRestraunt(dataItems);
    setFilteredRestaurant(dataItems);
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter">
            <button onClick={()=>{
                const filteredList = listOfRestaurants.filter((res) => {
                    return +res?.info?.avgRatingString>=4.3;
                  });
                  setFilteredRestaurant(filteredList);
            }}>
                Good Restaurants
            </button>
        </div>

        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
            <Link to={'/restaurants/'+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
  //    <RestaurantCard />;
};

export default Body;
