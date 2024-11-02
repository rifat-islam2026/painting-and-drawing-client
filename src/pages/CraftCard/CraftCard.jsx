import { Link } from "react-router-dom";

function CraftCard({craftItem}) {
  const craftItems = craftItem;
  const { _id, item_name, subcategory_name, short_description, price, rating, processing_time, image_url, customization, userName, userEmail } = craftItems;

  return (
      <div className="card card-compact bg-base-100 shadow-xl">
          <img
            src={image_url} />
        <div className="card-body">
        <h2 className="card-title">{item_name}</h2>
          <p className="font-bold">{subcategory_name}</p>
        <p><small>{short_description}</small></p>
          <p className="font-bold">$ {price}</p>
        <p>{rating}</p>
          <div className="card-actions justify-end">
          <Link to={`/craftItems/${_id}`}>
            <button className="btn btn-warning">View Details</button>
          </Link>
          </div>
        </div>
      </div>
   
  )
}

export default CraftCard