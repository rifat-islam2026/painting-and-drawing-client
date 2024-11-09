import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProvider";
import MyCard from "../CraftCard/MyCard";

function MyAllCraftItem() {
    const { user } = useContext(AuthContext) || {};
 
  const [items, setItems] = useState([]);
  const [displayItem, setDisplayItem] = useState([]);

  useEffect(() => {
    fetch(`https://painting-and-drawing-server-phi.vercel.app/items/${user?.email}`)
      .then((res) => res.json())
        .then((data) => {
            setItems(data)
            displayItem(items);
        });
  }, [user]);
  const handelFilter = (filter) => {
    if (filter === "All") {
      setDisplayItem(items);
    }
    else if (filter === "Landscape Painting") {
      const landscapePainting = items.filter(
        (i) => i.category === "Landscape Painting"
      );
      setDisplayItem(landscapePainting);
    }
    else if (filter === "Portrait Drawing") {
      const portraitDrawing = items.filter(
        (i) => i.category === "Portrait Drawing"
      );
      setDisplayItem(portraitDrawing);
    }
    else if (filter === "Watercolour Painting") {
      const watercolourPainting = items.filter(
        (i) => i.category === "Watercolour Painting"
      );
      setDisplayItem(watercolourPainting);
    }
    else if (filter === "Oil Painting") {
      const oilPainting = items.filter(
        (i) => i.category === "Oil Painting"
      );
      setDisplayItem(oilPainting);
    }
    else if (filter === "Charcoal Sketching") {
      const charcoalSketching = items.filter(
        (i) => i.category === "Charcoal Sketching"
      );
      setDisplayItem(charcoalSketching);
    }
    else if (filter === "Cartoon Drawing") {
      const cartoonDrawing = items.filter(
        (i) => i.category === "Cartoon Drawing"
      );
      setDisplayItem(cartoonDrawing);
    }
  };

  return (
    <>
      <div className="mt-5">
        <Helmet>
          <title>Painting || My Craft List</title>
          <meta name="description" content="Helmet application" />
        </Helmet>
        <div className="dropdown dropdown-bottom ">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => handelFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handelFilter("Landscape Painting")}>
              <a>Landscape Painting</a>
            </li>
            <li onClick={() => handelFilter("Portrait Drawing")}>
              <a>Portrait Drawing</a>
            </li>
            <li onClick={() => handelFilter("Watercolour Painting")}>
              <a>Watercolour Painting</a>
            </li>
            <li onClick={() => handelFilter("Oil Painting")}>
              <a>Oil Painting</a>
            </li>
            <li onClick={() => handelFilter("Charcoal Sketching")}>
              <a>Charcoal Sketching</a>
            </li>
            <li onClick={() => handelFilter("Cartoon Drawing")}>
              <a>Cartoon Drawing</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 md:px-0 px-5 my-7">
        {displayItem?.map((item) => (
          <MyCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}

export default MyAllCraftItem;
