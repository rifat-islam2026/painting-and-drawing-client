import { useLoaderData } from "react-router-dom";

function ViewDetails() {
    const craftItem = useLoaderData();
    const { _id, item_name, category, subcategory_name, short_description, price, rating, processing_time, image_url, customization, user_name, user_email } = craftItem;
    console.log(craftItem)
  return (
    <div>
          <h1 className="text-3xl text-center font-bold py-10">View Details</h1>
          <div className="w-2/4 mx-auto mb-10">
              <div className="card card-compact bg-base-100 shadow-xl">
                  <img
                      src={image_url} />
                  <div className="card-body">
                      <h2 className="card-title font-bold">{category}</h2>
                      <h3 className="text-sm font-semibold">{item_name}</h3>
                      <p className="font-bold">{subcategory_name}</p>
                      <p>{short_description}</p>
                      <p className="font-bold">$ {price}</p>
                      <p>{rating}</p>
                      <p>Processing Time: {processing_time}</p>
                      <p>Customization: {customization}</p>
                      <p>User name: {user_name}</p>
                      <p>User Email: {user_email}</p>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default ViewDetails
