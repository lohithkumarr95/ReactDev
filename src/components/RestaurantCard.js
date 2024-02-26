import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData.info;


  return (
      <div className="rest-card">
        <img src={IMAGE_URL + cloudinaryImageId} alt="image" />
        <h3>{name}</h3>
        <h3>{deliveryTime}</h3>
        <h3>{costForTwo}</h3>
        {/* <h3>{cuisines.join(",")}</h3> */}
        <h3>{avgRating}</h3>
      </div>
  );
};

export default RestaurantCard;
