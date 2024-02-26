import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [resInfo,setResInfo] = useState(null);
    console.log(resId);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const resData = await fetch(MENU_API+resId)
        const json = await resData.json();
        setResInfo(json.data);
    }

    if(!resInfo)
    return <Shimmer />;

    const {name,areaName,city} = resInfo?.cards[2]?.card.card.info;
    const itemCards  =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    // const recommendList = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    // setResInfo(restaurantInfo);
    // setMenuData(recommendList);

   


    
    return (
        <div>
            <h1>{name}</h1>
            <h3>{areaName},{city}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=>{
                    return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu;