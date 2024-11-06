import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

function AddItems() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handelAddItems = (e) => {
    e.preventDefault();
    const form = e.target;
    const item_name = form.item_name.value;
    const category = form.category.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const processing_time = form.processing_time.value;
    const photo_url = form.photo_url.value;
    const customization = form.customization.value;
    const email = form.email.value;

    const items = {
      item_name,
      category,
      subcategory_name,
      short_description,
      price,
      rating,
      processing_time,
      photo_url,
      customization,
      user:{
        email,
        name: user?.displayName,
        photo: user?.photoURL
      }
    };

    fetch("http://localhost:5000/craftItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added Successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate('/myCraftItems')
      });
  };

  return (
    <div className="min-h-screen mb-5">
      <h1 className="text-3xl text-center font-bold py-5">Add Craft Items</h1>
      <form
        onSubmit={handelAddItems}
        className="p-5 shadow-xl bg-base-100 rounded-lg"
      >
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              name="item_name"
              type="text"
              placeholder="Item Name"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select name="category" className="select select-bordered w-full">
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              name="short_description"
              type="text"
              placeholder="Short Description"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <input
              name="subcategory_name"
              type="text"
              placeholder="Subcategory Name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              name="processing_time"
              type="text"
              placeholder="Processing Time"
              className="input input-bordered "
              required
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              name="photo_url"
              type="text"
              placeholder="Photo Url"
              className="input border input-bordered "
              required
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              name="user_name"
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered"
              disabled
            />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              name="email"
              type="text"
              defaultValue={user?.email}
              className="input border input-bordered "
              disabled
            />
          </div>
        </div>
        <div className="flex items-center gap-7 my-5">
          <p>Customization</p>
          <div className="flex items-center gap-5">
            <input
              type="radio"
              name="customization"
              className="radio radio-accent"
              value="Yes"
            />
            <label>Yes</label>
            <input
              type="radio"
              name="customization"
              className="radio radio-accent"
              value="No"
            />
            <label>No</label>
          </div>
        </div>
        <input
          type="submit"
          value="Add items"
          className="btn btn-info w-full"
        />
      </form>
    </div>
  );
}

export default AddItems;
