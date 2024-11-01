import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

function AddItems() {
  const { user } = useContext(AuthContext);

  const handelAddItems = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processing = form.processing.value;
    const customization = form.customization.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const items = { name, subcategory, description, price, rating, processing, customization,userName,userEmail };
    // console.log(items)
    fetch('http://localhost:5000/product', {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(items)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product added Successfully.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
  }

  return (
    <div className="min-h-screen mb-5">
      <h1 className="text-3xl text-center font-bold py-5">Add Craft Items</h1>
      <form onSubmit={handelAddItems}
        className="p-5 shadow-xl bg-base-200 rounded-lg">
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Item Name"
              className="input input-bordered "
              required />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <input
              name="subcategory"
              type="text"
              placeholder="Subcategory Name"
              className="input input-bordered"
              required />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="Short Description"
              className="input input-bordered "
              required />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered"
              required />
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
              required />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              name="processing"
              type="text"
              placeholder="Processing Time"
              className="input input-bordered "
              required />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              name="userName"
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered"
              disabled />
          </div>
          <div className="form-control md:w-1/2 mb-3">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              name="userEmail"
              type="text"
              defaultValue={user?.email}
              className="input border input-bordered "
              disabled />
          </div>
        </div>
        <div className="flex items-center gap-7 my-5">
          <p>Customization</p>
          <div className="flex items-center gap-5">
            <input type="radio" name="customization" className="radio radio-accent" value='Yes' />
            <label>Yes</label>
            <input type="radio" name="customization" className="radio radio-accent" value='No' />
            <label>No</label>
          </div>
        </div>
        <input type="submit" value="Add items" className="btn btn-info w-full" />
      </form>
    </div>
  )
}

export default AddItems
