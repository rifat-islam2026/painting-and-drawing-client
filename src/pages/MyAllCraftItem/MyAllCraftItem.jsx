import { useLoaderData } from "react-router-dom";

function MyAllCraftItem() {
    const products = useLoaderData();
    console.log(products)
  return (
    <div>
          <h1 className="text-center text-5xl font-bold my-5">My all craft items here</h1>
    </div>
  )
}

export default MyAllCraftItem
