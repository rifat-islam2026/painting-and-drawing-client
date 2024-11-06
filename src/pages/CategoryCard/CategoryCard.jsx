import { Link } from "react-router-dom";

function CategoryCard({ item }) {
  const categoryItems = item;
  const {
    _id,
    item_name,
    category,
    subcategory_name,
    short_description,
    price,
    rating,
    processing_time,
    photo_url,
    customization,
    userName,
    userEmail,
  } = categoryItems;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <img className="h-52" src={photo_url} />
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p className="font-bold">{subcategory_name}</p>
        <p>
          <small>{short_description}</small>
        </p>
        <p className="font-bold">$ {price}</p>
        <p>{rating}</p>
        <div className="card-actions justify-end">
          <Link to={`/craftItems/${_id}`}>
            <button className="btn btn-warning">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
