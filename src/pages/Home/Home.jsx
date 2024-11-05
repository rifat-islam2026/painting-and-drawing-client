import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../CraftCard/CraftCard";
import Slider from "../Slider/Slider";

function Home() {
  const craftItems = useLoaderData();
  // console.log(craftItems)
  const [dataLength, setDataLength] = useState(6);

  return (
    <div>
      {/* Banner section */}
      <Slider/>

      {/* craft items section  */}
      <h1 className="text-4xl font-bold py-7 md:px-0 px-5">Craft Items</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:px-0 px-5 mb-10">
        {
          craftItems.slice(0,dataLength).map(craftItem => <CraftCard key={craftItem._id} craftItem={craftItem} />)
        }
      </div>
      
    </div>
  )
}

export default Home
