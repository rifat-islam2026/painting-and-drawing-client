import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Artists from "../Artists/Artists";
import CraftCard from "../CraftCard/CraftCard";
import ModernGallery from "../ModernGallery/ModernGallery";
import Slider from "../Slider/Slider";
import SubCategory from "../SubCategory/SubCategory";

function Home() {
  const craftItems = useLoaderData();
  // console.log(craftItems)
  const [dataLength, setDataLength] = useState(6);

  return (
    <div>
      <Helmet>
        <title>Painting || Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {/* Banner section */}
      <Slider />
      
      {/* craft items section  */}
      <h1 className="text-4xl font-bold py-7 md:px-0 px-5">Craft Item</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 md:px-0 px-5 mb-10">
        {
          craftItems.slice(0,dataLength).map(craftItem => <CraftCard key={craftItem._id} craftItem={craftItem} />)
        }
      </div>
      {/* subcategory section */}
      <SubCategory />

      {/* Modern Gallery */}
        <ModernGallery/>

      {/* Artist */}
      <Artists/>
    </div>
  )
}

export default Home
