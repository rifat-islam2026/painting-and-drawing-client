import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";

function MyAllCraftItem() {
    const craftItems = useLoaderData();
    console.log(craftItems)
  return (
      <div>
          <h1 className="text-center text-5xl font-bold my-5">My all craft items here</h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-5">
              {
                  craftItems.map(craftItem => <CraftCard key={craftItem._id} craftItem={craftItem} />)
              }
          </div>
    </div>
  )
}

export default MyAllCraftItem
//  https://i.ibb.co.com/r5Dm90T/Charcoal-Art.jpg
//     https://i.ibb.co.com/SB8pxPN/colorful.jpg
//     https://i.ibb.co.com/PMZjnHW/graffiti.jpg
//     https://i.ibb.co.com/sg9SYyQ/oil.jpg
//     https://i.ibb.co.com/N9RN99R/portrait.jpg
//     https://i.ibb.co.com/6gcRq4q/vintage.jpg 
    
