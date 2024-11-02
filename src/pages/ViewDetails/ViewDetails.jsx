import { useLoaderData } from "react-router-dom";

function ViewDetails() {
    const craftItem = useLoaderData();
    const { _id, item_name, subcategory_name, short_description, price, rating, processing_time, image_url, customization, userName, userEmail } = craftItem;
    console.log(craftItem)
  return (
    <div>
          <h1 className="text-3xl text-center font-bold py-10">View Details</h1>
          <div className="w-2/4 mx-auto mb-10">
              <div className="card card-compact bg-base-100 shadow-xl">
                  <img
                      src={image_url} />
                  <div className="card-body">
                      <h2 className="card-title">{item_name}</h2>
                      <p className="font-bold">{subcategory_name}</p>
                      <p>{short_description}</p>
                      <p className="font-bold">$ {price}</p>
                      <p>{rating}</p>
                      <p>Processing Time: {processing_time}</p>
                      <p>Customization: {customization}</p>
                      <p>User name: {userName}</p>
                      <p>User Email: {userEmail}</p>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default ViewDetails
