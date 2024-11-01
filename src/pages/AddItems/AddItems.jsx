
function AddItems() {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl text-center font-bold py-5">Add Craft Items</h1>
      <form>
        <div className="flex gap-3 w-2/3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Item_Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Item Name"
              className="input input-bordered "
              required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subcategory_Name</span>
            </label>
            <input
              name="subcategory"
              type="text"
              placeholder="Subcategory Name"
              className="input input-bordered"
              required />
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddItems
