import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

function ViewDetails() {
    const craftItem = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, item_name, category, subcategory_name, short_description, price, rating, processing_time, photo_url, customization,} = craftItem;
    console.log(user)
  return (
    <div>
          <h1 className="text-3xl text-center font-bold py-10">View Details</h1>
          <div className="w-2/4 mx-auto mb-10">
              <div className="card card-compact bg-base-100 shadow-xl">
                  <img
                      src={photo_url} />
                  <div className="card-body">
                      <h2 className="card-title font-bold">{category}</h2>
                      <h3 className="text-sm font-semibold">{item_name}</h3>
                      <p className="font-bold">{subcategory_name}</p>
                      <p>{short_description}</p>
                      <p className="font-bold">$ {price}</p>
                      <p>{rating}</p>
                      <p>Processing Time: {processing_time}</p>
                      <p>Customization: {customization}</p>
                      <span className="font-semibold">User Details :</span>
                      <div className="flex items-center justify-between">
                          <div>
                              <p>User name: {user?.displayName}</p>
                              <p>User Email: {user?.email}</p>
                          </div>
                          <img src={user?.photoURL} className="w-10 rounded-badge" />
                     </div>

                  </div>
              </div>
          </div>
    </div>
  )
}

export default ViewDetails
