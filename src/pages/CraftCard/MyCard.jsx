import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function MyCard({ item }) {
  const {
    _id,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    processing_time,
    photo_url,
    customization, } = item;
  const handelDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      if (result.isConfirmed) {
        fetch(`https://painting-and-drawing-server-phi.vercel.app/craftItems/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              const remaining = allCraftItems.filter(i => i._id !== id);
              setAllCraftItems(remaining);
            }
          })
      }
    });

  }
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <img className="h-52" src={photo_url} />
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p className="font-bold">{subcategory_name}</p>
          <p>
            <small>{short_description}</small>
          </p>
          <div className="flex items-center">
            <p className="font-bold">$ {price}</p>
            <p className="flex justify-end">{rating}</p>
          </div>
          <p>Processing Time: {processing_time}</p>
          <p>Customization: {customization}</p>
          <div className="card-actions justify-end">
            <Link to={`/craftItems/${_id}`}>
              <button className="btn btn-warning">View Details</button>
            </Link>
            <Link to={`/update/${item._id}`}
              className="btn btn-success"
            >Update</Link>
            <button
              onClick={() => handelDelete(item._id)}
              className="btn btn-info"
            >delete</button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default MyCard
