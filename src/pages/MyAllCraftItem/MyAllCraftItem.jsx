import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

function MyAllCraftItem() {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/items/${user?.email}`)
            .then(res => res.json())
            .then(data=>{setItems(data)})
    }, [user])
    console.log(items)
  return (
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
              <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
          </figure>
          <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
              </div>
          </div>
      </div>
  )
}

export default MyAllCraftItem
//  https://i.ibb.co.com/r5Dm90T/Charcoal-Art.jpg
//     https://i.ibb.co.com/SB8pxPN/colorful.jpg
//     https://i.ibb.co.com/Cpdfcx0/5124484-2701029-1.jpg
//     https://i.ibb.co.com/sg9SYyQ/oil.jpg
//     https://i.ibb.co.com/N9RN99R/portrait.jpg
//     https://i.ibb.co.com/6gcRq4q/vintage.jpg 
    
